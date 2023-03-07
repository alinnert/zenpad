<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import ButtonGroup from '../ui/ButtonGroup.vue'
import DefaultButton from '../ui/DefaultButton.vue'
import FormLabel from './FormLabel.vue'

const props = withDefaults(
  defineProps<{
    modelValue: number
    min?: number
    max?: number
    step?: number
  }>(),
  { min: -Infinity, max: Infinity, step: 1 },
)

const emit = defineEmits(['update:modelValue'])

const value = ref(props.modelValue)
watch(value, (newValue) => {
  emit('update:modelValue', newValue)
})

const reachedMin = computed(() => value.value <= props.min)
const reachedMax = computed(() => value.value >= props.max)

function updateValue(action: 'increment' | 'decrement'): void {
  const decimalFactor = getDecimalFactor(props.step)
  const directionFactor = action === 'decrement' ? -1 : 1
  const shiftedValue = value.value * decimalFactor
  const shiftedStep = props.step * decimalFactor * directionFactor
  const shiftedResult = shiftedValue + shiftedStep
  value.value = shiftedResult / decimalFactor
}

function getDecimalFactor(step: number): number {
  const stepString = step.toString()
  const matches = stepString.match(/^\d+(\.(\d+))?$/)
  if (matches === null) {
    return 1
  }
  const decimalString = matches[2]
  if (decimalString === undefined) {
    return 1
  }
  return 1 * 10 ** decimalString.length
}
</script>

<template>
  <div class="px-6 py-4 grid grid-cols-[1fr,auto,auto] gap-x-4 items-center">
    <FormLabel><slot></slot></FormLabel>
    <div>{{ modelValue }}</div>
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
