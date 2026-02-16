<script setup lang="ts">
import { ref, watch, onUnmounted, nextTick } from 'vue'
import { autoUpdate, computePosition, offset, shift } from '@floating-ui/dom'
import styles from './UIFork.module.css'
import { registerTooltipHide, registerTooltipShow, shouldSkipDelay } from '../utils/tooltipManager'

const props = defineProps<{
  label: string
  placement?: 'top' | 'bottom' | 'left' | 'right'
}>()

const isVisible = ref(false)
const position = ref({ x: 0, y: 0 })
const triggerRef = ref<HTMLElement | null>(null)
const tooltipRef = ref<HTMLDivElement | null>(null)
let showTimeout: ReturnType<typeof setTimeout> | null = null
let hideTimeout: ReturnType<typeof setTimeout> | null = null
let floatingCleanup: (() => void) | null = null

const placement = props.placement ?? 'top'

watch(isVisible, (visible) => {
  if (visible) {
    registerTooltipShow()
    nextTick(setupPositioning)
  } else {
    registerTooltipHide()
    if (floatingCleanup) {
      floatingCleanup()
      floatingCleanup = null
    }
  }
})

function setupPositioning() {
  if (!triggerRef.value || !tooltipRef.value) return
  if (floatingCleanup) floatingCleanup()

  const trigger = triggerRef.value
  const tooltip = tooltipRef.value
  tooltip.style.visibility = 'hidden'

  const updatePosition = async () => {
    if (!trigger || !tooltip) return
    try {
      const { x, y } = await computePosition(trigger, tooltip, {
        placement,
        strategy: 'fixed',
        middleware: [offset(8), shift({ padding: 8 })],
      })
      position.value = { x, y }
      tooltip.style.visibility = 'visible'
      tooltip.classList.add(styles.tooltipVisible)
    } catch {}
  }

  updatePosition()
  floatingCleanup = autoUpdate(trigger, tooltip, updatePosition)
}

function handleMouseEnter() {
  if (hideTimeout) { clearTimeout(hideTimeout); hideTimeout = null }
  if (showTimeout) clearTimeout(showTimeout)
  const skipDelay = shouldSkipDelay()
  showTimeout = setTimeout(() => {
    isVisible.value = true
    showTimeout = null
  }, skipDelay ? 0 : 300)
}

function handleMouseLeave() {
  if (showTimeout) { clearTimeout(showTimeout); showTimeout = null }
  hideTimeout = setTimeout(() => {
    isVisible.value = false
    hideTimeout = null
  }, 150)
}

onUnmounted(() => {
  if (showTimeout) clearTimeout(showTimeout)
  if (hideTimeout) clearTimeout(hideTimeout)
  if (floatingCleanup) floatingCleanup()
  if (isVisible.value) registerTooltipHide()
})
</script>

<template>
  <span
    ref="triggerRef"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    style="display: inline-flex"
  >
    <slot />
  </span>
  <Teleport to="#uifork-root" v-if="isVisible">
    <div
      ref="tooltipRef"
      :class="styles.tooltip"
      :style="{ left: `${position.x}px`, top: `${position.y}px`, visibility: 'hidden' }"
      role="tooltip"
    >
      {{ label }}
    </div>
  </Teleport>
</template>
