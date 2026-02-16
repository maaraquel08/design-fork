<script setup lang="ts">
import { ref } from 'vue'
import CopyIcon from './icons/CopyIcon.vue'
import CheckmarkIcon from './icons/CheckmarkIcon.vue'
import styles from './UIFork.module.css'
import { isDevelopment } from '../utils/environment'

const copied = ref(false)

async function handleCopyCommand() {
  const command = 'npx uifork-vue watch'
  try {
    await navigator.clipboard.writeText(command)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {
    // Failed to copy
  }
}
</script>

<template>
  <div v-if="isDevelopment()" :class="styles.componentSelectorDropdownHint">
    <span>
      Run{{ ' ' }}
      <button
        @click="handleCopyCommand"
        :class="styles.offlineMessageCommandButton"
        title="Copy command"
        aria-label="Copy command to clipboard"
      >
        <code :class="styles.componentSelectorDropdownHintCode">
          npx uifork-vue watch{{ ' ' }}
          <CheckmarkIcon v-if="copied" :class="styles.offlineMessageCopyIcon" />
          <CopyIcon v-else :class="styles.offlineMessageCopyIcon" />
        </code>
      </button>
      {{ ' ' }}to fork, create, and promote versions from here.
    </span>
  </div>
</template>
