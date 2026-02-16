<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import styles from './UIFork.module.css'
import CheckmarkIcon from './icons/CheckmarkIcon.vue'
import InfoIcon from './icons/InfoIcon.vue'
import { useClickOutside } from '../composables/useClickOutside'
import type { ComponentInfo } from '../types'

const props = defineProps<{
  mountedComponents: ComponentInfo[]
  selectedComponent: string
  isOpen: boolean
  position: { x: number; y: number }
  isConnected: boolean
}>()

const emit = defineEmits<{
  select: [componentName: string]
  close: []
  'mounted-el': [el: HTMLDivElement | null]
}>()

const componentSelectorRef = ref<HTMLDivElement | null>(null)

// Emit the DOM element whenever it mounts/unmounts
watch(
  () => props.isOpen,
  async (open) => {
    if (open) {
      await nextTick()
      emit('mounted-el', componentSelectorRef.value)
    } else {
      emit('mounted-el', null)
    }
  },
)

useClickOutside({
  isActive: () => props.isOpen,
  refs: [componentSelectorRef],
  onClickOutside: () => emit('close'),
  additionalCheck: (target) => {
    const element = target as Element
    return !!element.closest?.('[data-component-selector]')
  },
})
</script>

<template>
  <div
    v-if="isOpen"
    ref="componentSelectorRef"
    :class="styles.componentSelectorDropdown"
    :style="{ left: `${position.x}px`, top: `${position.y}px`, visibility: 'hidden' }"
  >
    <div :class="styles.componentSelectorDropdownTitle">Forked components</div>
    <div v-if="mountedComponents.length === 0" :class="styles.emptyState">
      No mounted components found
    </div>
    <div v-else :style="{ display: 'flex', flexDirection: 'column', gap: '2px' }">
      <button
        v-for="component in mountedComponents"
        :key="component.name"
        @click="emit('select', component.name)"
        :class="[
          styles.componentSelectorItem,
          styles.menuItem,
          component.name === selectedComponent ? styles.componentSelectorItemSelected : '',
        ]"
      >
        <div :class="styles.componentSelectorItemCheckmarkContainer">
          <CheckmarkIcon v-if="component.name === selectedComponent" :class="styles.componentSelectorItemCheckmark" />
        </div>
        <span :class="styles.componentSelectorItemName">{{ component.name }}</span>
        <span :class="styles.componentSelectorItemCount">{{ component.versions.length }}</span>
      </button>
    </div>
    <div v-if="isConnected" :class="styles.componentSelectorDropdownHint">
      <InfoIcon :class="styles.componentSelectorDropdownHintIcon" />
      <span>
        Use <code :class="styles.componentSelectorDropdownHintCode">npx uifork-vue init</code> to
        iterate on more components
      </span>
    </div>
  </div>
</template>
