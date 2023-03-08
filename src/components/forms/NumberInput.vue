<script setup lang="ts">
import { computed } from 'vue'
import ButtonGroup from '../ui/UiButtonGroup.vue'
import DefaultButton from '../ui/UiButton.vue'
import FormLabel from './FormLabel.vue'

type Props = { modelValue: number; min?: number; max?: number; step?: number }
const props = withDefaults(defineProps<Props>(), {
  min: -Infinity,
  max: Infinity,
  step: 1,
})

const emit = defineEmits<{ (e: 'update:modelValue', value: number): void }>()

const reachedMin = computed(() => props.modelValue <= props.min)
const reachedMax = computed(() => props.modelValue >= props.max)

function updateValue(action: 'increment' | 'decrement'): void {
  const directionFactor = action === 'decrement' ? -1 : 1
  const shiftedValue = props.modelValue * decimalFactor.value
  const shiftedStep = props.step * decimalFactor.value * directionFactor
  const shiftedResult = shiftedValue + shiftedStep
  const newValue = shiftedResult / decimalFactor.value
  emit('update:modelValue', newValue)
}

const decimalDigits = computed((): number => {
  const stepString = props.step.toString()
  const matches = stepString.match(/^\d+(\.(\d+))?$/)
  if (matches === null) {
    return 0
  }
  const decimalString = matches[2]
  if (decimalString === undefined) {
    return 0
  }
  return decimalString.length
})

const decimalFactor = computed((): number => {
  return 1 * 10 ** decimalDigits.value
})

const displayValue = computed(() => {
  return props.modelValue.toFixed(decimalDigits.value)
})
</script>

<template>
  <div class="px-6 py-4 grid grid-cols-[1fr,auto,auto] gap-x-4 items-center">
    <FormLabel><slot></slot></FormLabel>
    <div>{{ displayValue }}</div>
    <ButtonGroup>
      <DefaultButton @click="updateValue('decrement')" :disabled="reachedMin">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5"
        >
          <path
            fill-rule="evenodd"
            d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
            clip-rule="evenodd"
          />
        </svg>
      </DefaultButton>
      <DefaultButton @click="updateValue('increment')" :disabled="reachedMax">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5"
        >
          <path
            d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
          />
        </svg>
      </DefaultButton>
    </ButtonGroup>
  </div>
</template>
