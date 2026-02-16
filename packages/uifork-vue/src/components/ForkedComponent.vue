<script setup lang="ts">
import { ref, computed, watch, provide, inject, onMounted, onUnmounted, type Ref } from 'vue'
import { useLocalStorage } from '../composables/useLocalStorage'
import { registerComponent, unregisterComponent } from '../utils/componentRegistry'
import type { ParentContext } from '../utils/componentRegistry'
import type { VersionsType } from '../types'

const COMPONENT_VERSION_STORAGE_PREFIX = 'uifork-component-'

const props = defineProps<{
  id: string
  versions: VersionsType
  defaultVersion?: string
}>()

const isMounted = ref(false)
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

// Parent-child tracking for smart switching
const parentContext = inject<{ id: string; activeVersion: Ref<string> } | null>('uifork-parent', null)
provide('uifork-parent', { id: props.id, activeVersion })

function getParentContextSnapshot(): ParentContext | null {
  if (!parentContext || !parentContext.activeVersion.value) return null
  return { id: parentContext.id, version: parentContext.activeVersion.value }
}

// Register/unregister
onMounted(() => {
  registerComponent(props.id, versionInfos.value, getParentContextSnapshot())
  isMounted.value = true
})

onUnmounted(() => {
  unregisterComponent(props.id)
})

watch(versionInfos, (infos) => {
  registerComponent(props.id, infos, getParentContextSnapshot())
})

const lastValidVersion = ref(
  versionKeys.value.includes(activeVersion.value) ? activeVersion.value : initialVersion.value,
)

watch(activeVersion, (val) => {
  if (props.versions[val]) {
    lastValidVersion.value = val
  }
})

// Fall back if version deleted
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

const ActiveComponent = computed(() => {
  return (
    props.versions[activeVersion.value]?.render ??
    props.versions[lastValidVersion.value]?.render ??
    props.versions[versionKeys.value[0]]?.render
  )
})
</script>

<template>
  <component
    v-if="ActiveComponent && isMounted"
    :is="ActiveComponent"
    v-bind="$attrs"
  />
</template>
