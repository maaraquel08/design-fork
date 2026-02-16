<script setup lang="ts">
import { type Component } from 'vue'
import styles from './UIFork.module.css'

const props = defineProps<{
  icon: Component
  label: string
  variant?: 'default' | 'delete'
  stopPropagation?: boolean
}>()

const emit = defineEmits<{
  click: [e: MouseEvent]
}>()

function handleClick(e: MouseEvent) {
  if (props.stopPropagation) e.stopPropagation()
  emit('click', e)
}
</script>

<template>
  <button
    @click="handleClick"
    :class="[styles.popoverMenuItem, styles.menuItem, variant === 'delete' ? styles.popoverMenuItemDelete : '']"
  >
    <component :is="icon" :class="styles.popoverMenuItemIcon" />
    <span>{{ label }}</span>
  </button>
</template>
