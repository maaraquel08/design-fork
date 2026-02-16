<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import styles from './UIFork.module.css'
import CheckmarkIcon from './icons/CheckmarkIcon.vue'
import CancelIcon from './icons/CancelIcon.vue'
import RenameIcon from './icons/RenameIcon.vue'
import Tooltip from './Tooltip.vue'
import AutoWidthInput from './AutoWidthInput.vue'

const props = defineProps<{
  version: string
  value: string
  formatVersionLabel: (version: string) => string
}>()

const emit = defineEmits<{
  'update:value': [value: string]
  confirm: [version: string]
  cancel: []
}>()

const inputComp = ref<InstanceType<typeof AutoWidthInput> | null>(null)
const formattedVersion = props.formatVersionLabel(props.version)

onMounted(() => {
  nextTick(() => {
    const input = inputComp.value?.inputRef
    if (input) {
      input.focus()
      input.select()
    }
  })
})
</script>

<template>
  <div
    :class="[styles.versionItemEditing, styles.menuItem]"
    @click.stop
  >
    <div :class="styles.checkmarkContainer">
      <RenameIcon :class="styles.checkmarkIcon" />
    </div>
    <div :class="styles.versionLabel">
      <span :class="styles.versionId">{{ formattedVersion }}</span>
      <AutoWidthInput
        ref="inputComp"
        :model-value="value"
        @update:model-value="emit('update:value', $event)"
        @keydown="(e: KeyboardEvent) => {
          if (e.key === 'Enter') { e.preventDefault(); e.stopPropagation(); emit('confirm', version) }
          else if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); emit('cancel') }
        }"
        @click.stop
        :class="styles.renameInput"
        placeholder="Add label"
        :container-style="{ minWidth: '60px', maxWidth: '220px' }"
      />
    </div>
    <div :class="styles.actions" :style="{ opacity: 1 }">
      <Tooltip label="Confirm" placement="top">
        <button @click.stop="emit('confirm', version)" :class="styles.actionButton">
          <CheckmarkIcon :class="styles.actionIcon" />
        </button>
      </Tooltip>
      <Tooltip label="Cancel" placement="top">
        <button @click.stop="emit('cancel')" :class="styles.actionButton">
          <CancelIcon :class="styles.actionIcon" />
        </button>
      </Tooltip>
    </div>
  </div>
</template>
