<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import styles from './UIFork.module.css'
import PromoteIcon from './icons/PromoteIcon.vue'
import OpenInEditorIcon from './icons/OpenInEditorIcon.vue'
import DeleteIcon from './icons/DeleteIcon.vue'
import RenameIcon from './icons/RenameIcon.vue'
import MenuItem from './MenuItem.vue'
import { useClickOutside } from '../composables/useClickOutside'

const props = defineProps<{
  version: string
  label?: string
}>()

const emit = defineEmits<{
  promote: [version: string, e: MouseEvent]
  openInEditor: [version: string, e: MouseEvent]
  delete: [version: string, e: MouseEvent]
  rename: [version: string, e: MouseEvent]
  close: []
  setDropdownRef: [el: HTMLDivElement | null]
}>()

const renameLabel = (props.label && props.label.trim()) ? 'Edit label' : 'Add label'
const dropdownRef = ref<HTMLDivElement | null>(null)

// Send ref to parent for positioning
onMounted(() => {
  emit('setDropdownRef', dropdownRef.value)
})

onUnmounted(() => {
  emit('setDropdownRef', null)
})

useClickOutside({
  isActive: ref(true),
  refs: [dropdownRef],
  onClickOutside: () => emit('close'),
  additionalCheck: (target) => {
    const element = target as Element
    return !!element.closest?.('[data-actions]')
  },
})
</script>

<template>
  <Teleport to="#uifork-root">
    <div
      ref="dropdownRef"
      :class="styles.popover"
      data-popover-dropdown
      :style="{ visibility: 'hidden' }"
      role="menu"
    >
      <MenuItem
        :icon="RenameIcon"
        :label="renameLabel"
        :stop-propagation="true"
        @click="(e: MouseEvent) => { emit('rename', version, e); emit('close') }"
      />
      <MenuItem
        :icon="PromoteIcon"
        label="Promote"
        @click="(e: MouseEvent) => { emit('promote', version, e); emit('close') }"
      />
      <MenuItem
        :icon="OpenInEditorIcon"
        label="Open in editor"
        @click="(e: MouseEvent) => { emit('openInEditor', version, e); emit('close') }"
      />
      <div :class="styles.divider" />
      <MenuItem
        :icon="DeleteIcon"
        label="Delete"
        variant="delete"
        :stop-propagation="true"
        @click="(e: MouseEvent) => { emit('delete', version, e); emit('close') }"
      />
    </div>
  </Teleport>
</template>
