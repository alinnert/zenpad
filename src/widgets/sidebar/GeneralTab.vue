<script setup lang="ts">
import NumberInput from '@/components/forms/NumberInput.vue'
import { ref, watch } from 'vue'
import ToggleInput from '../../components/forms/ToggleInput.vue'
import { showClockState, toggleClock } from '../../states/basicUiStates'

const showClock = ref(showClockState.value)
watch(showClock, (newValue) => {
  toggleClock(newValue)
})

const fontSize = ref(16)
watch(fontSize, (newFontSize) => {
  console.log('new font size', newFontSize)
})

const lineHeight = ref(1.6)
watch(lineHeight, (newLineHeight) => {
  console.log('new line height', newLineHeight)
})
</script>

<template>
  <div>
    <NumberInput v-model="fontSize" :min="10" :max="36">Font size</NumberInput>
    <NumberInput v-model="lineHeight" :step="0.1" :min="1" :max="3">
      Line height
    </NumberInput>
    <ToggleInput label="Show clock" v-model="showClock"></ToggleInput>
  </div>
</template>
