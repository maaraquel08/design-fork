<script setup lang="ts">
import PlusIcon from './icons/PlusIcon.vue'
import styles from './UIFork.module.css'

defineProps<{
  disabled?: boolean
}>()

const emit = defineEmits<{
  click: [e: MouseEvent]
}>()
</script>

<template>
  <button
    @click="disabled ? undefined : emit('click', $event)"
    :class="[styles.newVersionButton, styles.menuItem, disabled ? styles.disabled : '']"
    :title="disabled ? 'Connect to server to create new versions' : 'Create new version'"
    :aria-disabled="disabled"
  >
    <div :class="styles.newVersionIconContainer">
      <PlusIcon :class="styles.newVersionIcon" />
    </div>
    <span>New version</span>
  </button>
</template>
