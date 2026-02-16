<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, defineAsyncComponent, type Component } from 'vue'
import { useLocalStorage } from '../composables/useLocalStorage'
import { registerComponent, unregisterComponent } from '../utils/componentRegistry'
import type { VersionsType } from '../types'

const COMPONENT_VERSION_STORAGE_PREFIX = 'uifork-component-'

const props = defineProps<{
  id: string
  versions: VersionsType
  defaultVersion?: string
}>()

const versionKeys = computed(() => Object.keys(props.versions))
const initialVersion = computed(() => props.defaultVersion || versionKeys.value[0])

const versionInfos = computed(() =>
  Object.entries(props.versions).map(([key, version]) => ({
    key,
    label: version.label,
  })),
)

const [activeVersion, setActiveVersion] = useLocalStorage<string>(
  `${COMPONENT_VERSION_STORAGE_PREFIX}${props.id}`,
  initialVersion.value,
  true,
)

onMounted(() => {
  registerComponent(props.id, versionInfos.value)
})

onUnmounted(() => {
  unregisterComponent(props.id)
})

watch(versionInfos, (infos) => {
  registerComponent(props.id, infos)
})

const lastValidVersion = ref(
  versionKeys.value.includes(activeVersion.value) ? activeVersion.value : initialVersion.value,
)

watch(activeVersion, (val) => {
  if (props.versions[val]) {
    lastValidVersion.value = val
  }
})

watch([activeVersion, versionKeys], ([active, keys]) => {
  if (keys.length > 0 && !keys.includes(active)) {
    const timer = setTimeout(() => {
      if (!versionKeys.value.includes(activeVersion.value)) {
        setActiveVersion(versionKeys.value[0])
      }
    }, 2500)
    return () => clearTimeout(timer)
  }
})

const ResolvedComponent = computed<Component | null>(() => {
  const versionLoader =
    props.versions[activeVersion.value]?.render ??
    props.versions[lastValidVersion.value]?.render ??
    props.versions[versionKeys.value[0]]?.render

  if (!versionLoader) return null

  if (typeof versionLoader === 'function') {
    return defineAsyncComponent(versionLoader as () => Promise<{ default: Component }>)
  }

  return versionLoader as Component
})
</script>

<template>
  <component
    v-if="ResolvedComponent"
    :is="ResolvedComponent"
    v-bind="$attrs"
  />
</template>
