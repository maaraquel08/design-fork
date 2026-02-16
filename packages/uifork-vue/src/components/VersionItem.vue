<script setup lang="ts">
import styles from './UIFork.module.css'
import CheckmarkIcon from './icons/CheckmarkIcon.vue'
import GitForkIcon from './icons/GitForkIcon.vue'
import MoreOptionsIcon from './icons/MoreOptionsIcon.vue'
import VersionActionMenu from './VersionActionMenu.vue'
import Tooltip from './Tooltip.vue'

const props = defineProps<{
  version: string
  label?: string
  isSelected: boolean
  formatVersionLabel: (version: string) => string
  isPopoverOpen: boolean
  isConnected: boolean
  isDevelopment: boolean
}>()

const emit = defineEmits<{
  select: [version: string]
  duplicate: [version: string, e: MouseEvent]
  togglePopover: [version: string, e?: MouseEvent]
  promote: [version: string, e: MouseEvent]
  openInEditor: [version: string, e: MouseEvent]
  delete: [version: string, e: MouseEvent]
  rename: [version: string, e: MouseEvent]
  setPopoverTriggerRef: [version: string, el: HTMLButtonElement | null]
  setPopoverDropdownRef: [version: string, el: HTMLDivElement | null]
}>()

const formattedVersion = props.formatVersionLabel(props.version)
</script>

<template>
  <div
    role="option"
    :aria-selected="isSelected"
    :data-key="version"
    @click="emit('select', version)"
    :class="[styles.versionItem, styles.menuItem]"
  >
    <div :class="styles.checkmarkContainer">
      <CheckmarkIcon v-if="isSelected" :class="styles.checkmarkIcon" />
    </div>
    <div :class="styles.versionLabel">
      <span :class="styles.versionId">{{ formattedVersion }}</span>
      <span v-if="label" :class="styles.versionLabelText">{{ label }}</span>
    </div>
    <div v-if="isDevelopment" data-actions :class="[styles.actions, !isConnected ? styles.disabled : '']" @click.stop>
      <Tooltip label="Fork version" placement="top">
        <button @click.stop="isConnected && emit('duplicate', version, $event)" :class="[styles.actionButton, !isConnected ? styles.disabled : '']">
          <GitForkIcon :class="styles.actionIcon" />
        </button>
      </Tooltip>
      <div :class="styles.actionButtonMore">
        <Tooltip label="More options" placement="top">
          <button
            :ref="(el: any) => emit('setPopoverTriggerRef', version, el as HTMLButtonElement)"
            @click.stop="emit('togglePopover', version, $event)"
            :class="styles.actionButton"
          >
            <MoreOptionsIcon :class="styles.actionIcon" />
          </button>
        </Tooltip>
        <VersionActionMenu
          v-if="isPopoverOpen"
          :version="version"
          :label="label"
          :is-connected="isConnected"
          @promote="(v: string, e: MouseEvent) => emit('promote', v, e)"
          @open-in-editor="(v: string, e: MouseEvent) => emit('openInEditor', v, e)"
          @delete="(v: string, e: MouseEvent) => emit('delete', v, e)"
          @rename="(v: string, e: MouseEvent) => emit('rename', v, e)"
          @close="emit('togglePopover', version)"
          @set-dropdown-ref="(el: HTMLDivElement | null) => emit('setPopoverDropdownRef', version, el)"
        />
      </div>
    </div>
  </div>
</template>
