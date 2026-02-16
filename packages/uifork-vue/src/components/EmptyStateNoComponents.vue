<script setup lang="ts">
import CheckmarkIcon from './icons/CheckmarkIcon.vue'
import CopyIcon from './icons/CopyIcon.vue'
import styles from './UIFork.module.css'

defineProps<{
  copied: boolean
}>()

const emit = defineEmits<{
  copyCommand: []
}>()
</script>

<template>
  <div :class="styles.emptyStateContainer">
    <h3 :class="styles.emptyStateHeading">Get started with uifork</h3>
    <p :class="styles.emptyStateText">
      Choose a component and run the command in your root directory
    </p>
    <button
      @click="emit('copyCommand')"
      :class="styles.emptyStateCommandContainer"
      title="Copy command"
      aria-label="Copy command to clipboard"
    >
      <code :class="styles.emptyStateCommand">npx uifork-vue &lt;path to file&gt;</code>
      <CheckmarkIcon v-if="copied" :class="styles.emptyStateCopyIcon" />
      <CopyIcon v-else :class="styles.emptyStateCopyIcon" />
    </button>
  </div>
</template>
