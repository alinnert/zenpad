<script setup lang="ts">
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
import FormLabel from './FormLabel.vue'

defineProps<{ label: string; modelValue: boolean }>()
defineEmits(['update:modelValue'])
</script>

<template>
  <SwitchGroup as="div" class="flex items-center px-6 py-4">
    <SwitchLabel class="grow"
      ><FormLabel>{{ label }}</FormLabel></SwitchLabel
    >
    <Switch
      :model-value="modelValue"
      @update:model-value="(value) => $emit('update:modelValue', value)"
      class="grid items-center w-12 h-8 rounded-full cursor-default"
      :class="[{ 'bg-gray-300': !modelValue, 'bg-sky-700': modelValue }]"
    >
      <span
        class="inline-block translate-x-1 w-6 h-6 rounded-full transition-transform ease-out bg-white"
        :class="{
          'translate-x-5': modelValue,
        }"
      ></span>
    </Switch>
  </SwitchGroup>
</template>
