<script setup lang="ts">
import styles from './UIFork.module.css'
import ChevronRightIcon from './icons/ChevronRightIcon.vue'

defineProps<{
  theme: 'light' | 'dark' | 'system'
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  codeEditor: 'vscode' | 'cursor'
}>()

const emit = defineEmits<{
  back: []
  'update:theme': [value: 'light' | 'dark' | 'system']
  'update:position': [value: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right']
  'update:codeEditor': [value: 'vscode' | 'cursor']
}>()
</script>

<template>
  <div :class="styles.settingsView">
    <button
      @click="emit('back')"
      :class="styles.settingsBackButton"
      :style="{ width: 'auto', alignSelf: 'flex-start' }"
    >
      <ChevronRightIcon :class="styles.settingsBackIcon" />
      <span>Back</span>
    </button>
    <div :class="styles.settingsContent">
      <div :class="styles.settingsGroup">
        <label :class="styles.settingsLabel">Theme</label>
        <select
          :value="theme"
          @change="emit('update:theme', ($event.target as HTMLSelectElement).value as any)"
          :class="styles.settingsSelect"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System</option>
        </select>
      </div>
      <div :class="styles.settingsGroup">
        <label :class="styles.settingsLabel">Position</label>
        <select
          :value="position"
          @change="emit('update:position', ($event.target as HTMLSelectElement).value as any)"
          :class="styles.settingsSelect"
        >
          <option value="top-left">Top left</option>
          <option value="top-right">Top right</option>
          <option value="bottom-left">Bottom left</option>
          <option value="bottom-right">Bottom right</option>
        </select>
      </div>
      <div :class="styles.settingsGroup">
        <label :class="styles.settingsLabel">Code editor</label>
        <select
          :value="codeEditor"
          @change="emit('update:codeEditor', ($event.target as HTMLSelectElement).value as any)"
          :class="styles.settingsSelect"
        >
          <option value="vscode">VSCode</option>
          <option value="cursor">Cursor</option>
        </select>
      </div>
    </div>
  </div>
</template>
