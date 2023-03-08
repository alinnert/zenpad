<script setup lang="ts">
import NumberInput from '@/components/forms/NumberInput.vue'
import {
  fontSizeState,
  lineHeightState,
  showClockState,
} from '@/states/generalSettingsStates'
import ToggleInput from '../../components/forms/ToggleInput.vue'
</script>

<template>
  <div>
    <NumberInput
      v-if="fontSizeState !== undefined"
      v-model="fontSizeState"
      :min="10"
      :max="36"
      >Font size</NumberInput
    >

    <NumberInput
      v-if="lineHeightState !== undefined"
      v-model="lineHeightState"
      :step="0.1"
      :min="1"
      :max="3"
    >
      Line height
    </NumberInput>

    <ToggleInput
      v-if="showClockState !== undefined"
      v-model="showClockState"
      label="Show clock"
    ></ToggleInput>
  </div>
</template>
