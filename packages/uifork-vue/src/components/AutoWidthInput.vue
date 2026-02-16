<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from 'vue'

const props = defineProps<{
  modelValue: string
  placeholder?: string
  class?: string
  containerStyle?: Record<string, string>
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
  keydown: [e: KeyboardEvent]
  click: [e: MouseEvent]
}>()

const inputRef = ref<HTMLInputElement | null>(null)
const measureRef = ref<HTMLSpanElement | null>(null)
const width = ref<number | undefined>(undefined)

function measure() {
  if (measureRef.value) {
    const textToMeasure = props.modelValue || props.placeholder || ''
    measureRef.value.textContent = textToMeasure || ' '
    width.value = measureRef.value.offsetWidth + 2
  }
}

watch(() => props.modelValue, measure)
watch(() => props.placeholder, measure)
onMounted(() => nextTick(measure))

defineExpose({ inputRef })
</script>

<template>
  <span
    :style="{
      display: 'inline-block',
      position: 'relative',
      overflow: 'hidden',
      ...containerStyle,
    }"
  >
    <span
      ref="measureRef"
      aria-hidden="true"
      :style="{
        position: 'absolute',
        visibility: 'hidden',
        whiteSpace: 'pre',
        font: 'inherit',
        letterSpacing: 'inherit',
        textTransform: 'inherit',
      }"
    />
    <input
      ref="inputRef"
      type="text"
      :value="modelValue"
      :placeholder="placeholder"
      :class="$props.class"
      :style="{
        width: width !== undefined ? `${width}px` : undefined,
        maxWidth: '100%',
        font: 'inherit',
        letterSpacing: 'inherit',
        textTransform: 'inherit',
        boxSizing: 'border-box',
        minWidth: '0',
      }"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      @keydown="emit('keydown', $event)"
      @click="emit('click', $event)"
    />
  </span>
</template>
