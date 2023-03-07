<script setup lang="ts">
import NumberInput from '@/components/forms/NumberInput.vue'
import {
  fontSizeState,
  lineHeightState,
  setFontSize,
  setLineHeight,
  setShowClock,
  showClockState,
} from '@/states/generalSettingsStates'
import ToggleInput from '../../components/forms/ToggleInput.vue'
</script>

<template>
  <div>
    <NumberInput
      v-if="fontSizeState !== undefined"
      :model-value="fontSizeState"
      @update:model-value="setFontSize"
      :min="10"
      :max="36"
      >Font size</NumberInput
    >

    <NumberInput
      v-if="lineHeightState !== undefined"
      :model-value="lineHeightState"
      @update:model-value="setLineHeight"
      :step="0.1"
      :min="1"
      :max="3"
    >
      Line height
    </NumberInput>

    <ToggleInput
      v-if="showClockState !== undefined"
      :model-value="showClockState"
      @update:model-value="setShowClock"
      label="Show clock"
    ></ToggleInput>
  </div>
</template>
