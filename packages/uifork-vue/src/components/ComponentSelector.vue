<script setup lang="ts">
import styles from './UIFork.module.css'
import ChevronDownIcon from './icons/ChevronDownIcon.vue'
import GearIcon from './icons/GearIcon.vue'

defineProps<{
  selectedComponent: string
}>()

const emit = defineEmits<{
  toggle: []
  settingsClick: [e: MouseEvent]
}>()
</script>

<template>
  <div :class="styles.componentSelectorRow">
    <button
      data-component-selector
      @click="emit('toggle')"
      :class="[styles.componentSelector, styles.menuItem]"
    >
      <span :class="styles.componentSelectorLabel">
        {{ selectedComponent || 'Select component' }}
      </span>
      <ChevronDownIcon :class="styles.componentSelectorIcon" />
    </button>
    <button
      @click="emit('settingsClick', $event)"
      :class="styles.componentSelectorSettings"
      title="Settings"
      aria-label="Open settings"
    >
      <GearIcon :class="styles.componentSelectorSettingsIcon" />
    </button>
  </div>
</template>
