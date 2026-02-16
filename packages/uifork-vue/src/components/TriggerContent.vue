<script setup lang="ts">
import ForkIcon from './icons/ForkIcon.vue'
import styles from './UIFork.module.css'

const props = defineProps<{
  hasSelection: boolean
  selectedComponent: string
  activeVersion: string
  activeVersionLabel?: string
  formatVersionLabel: (version: string) => string
}>()

const displayVersion = () =>
  props.activeVersionLabel || (props.activeVersion ? props.formatVersionLabel(props.activeVersion) : '-')
</script>

<template>
  <template v-if="!hasSelection">
    <ForkIcon :class="styles.triggerIcon" />
  </template>
  <template v-else>
    <ForkIcon :class="styles.triggerIcon" />
    <span :class="styles.triggerLabel">{{ selectedComponent }}</span>
    <span :class="styles.triggerVersion">{{ displayVersion() }}</span>
  </template>
</template>
