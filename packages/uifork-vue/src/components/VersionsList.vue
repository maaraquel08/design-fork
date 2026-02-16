<script setup lang="ts">
import styles from './UIFork.module.css'
import VersionItem from './VersionItem.vue'
import VersionNameEditor from './VersionNameEditor.vue'
import type { VersionInfo } from '../types'
import { isDevelopment } from '../utils/environment'

const props = defineProps<{
  versions: VersionInfo[]
  activeVersion: string
  editingVersion: string | null
  renameValue: string
  formatVersionLabel: (version: string) => string
  openPopoverVersion: string | null
  popoverPositions: Map<string, { x: number; y: number }>
  isConnected: boolean
}>()

const emit = defineEmits<{
  selectVersion: [version: string]
  duplicateVersion: [version: string, e: MouseEvent]
  togglePopover: [version: string, e?: MouseEvent]
  promoteVersion: [version: string, e: MouseEvent]
  openInEditor: [version: string, e: MouseEvent]
  deleteVersion: [version: string, e: MouseEvent]
  renameVersion: [version: string, e: MouseEvent]
  renameValueChange: [value: string]
  confirmRename: [version: string]
  cancelRename: []
  setPopoverTriggerRef: [version: string, el: HTMLButtonElement | null]
  setPopoverDropdownRef: [version: string, el: HTMLDivElement | null]
}>()

const reversedVersions = () => [...props.versions].reverse()
</script>

<template>
  <div v-if="versions.length === 0" :class="styles.emptyState">No versions found</div>
  <div v-else :class="styles.versionsList">
    <template v-for="versionInfo in reversedVersions()" :key="versionInfo.key">
      <VersionNameEditor
        v-if="editingVersion === versionInfo.key"
        :version="versionInfo.key"
        :value="renameValue"
        :format-version-label="formatVersionLabel"
        @update:value="emit('renameValueChange', $event)"
        @confirm="emit('confirmRename', $event)"
        @cancel="emit('cancelRename')"
      />
      <VersionItem
        v-else
        :version="versionInfo.key"
        :label="versionInfo.label"
        :is-selected="versionInfo.key === activeVersion"
        :format-version-label="formatVersionLabel"
        :is-popover-open="openPopoverVersion === versionInfo.key"
        :is-connected="isConnected"
        :is-development="isDevelopment()"
        @select="emit('selectVersion', $event)"
        @duplicate="(v: string, e: MouseEvent) => emit('duplicateVersion', v, e)"
        @toggle-popover="(v: string, e?: MouseEvent) => emit('togglePopover', v, e)"
        @promote="(v: string, e: MouseEvent) => emit('promoteVersion', v, e)"
        @open-in-editor="(v: string, e: MouseEvent) => emit('openInEditor', v, e)"
        @delete="(v: string, e: MouseEvent) => emit('deleteVersion', v, e)"
        @rename="(v: string, e: MouseEvent) => emit('renameVersion', v, e)"
        @set-popover-trigger-ref="(v: string, el: HTMLButtonElement | null) => emit('setPopoverTriggerRef', v, el)"
        @set-popover-dropdown-ref="(v: string, el: HTMLDivElement | null) => emit('setPopoverDropdownRef', v, el)"
      />
    </template>
  </div>
</template>
