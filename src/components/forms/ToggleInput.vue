<script setup lang="ts">
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
import { ref, watch } from 'vue'
import FormLabel from './FormLabel.vue'

const props = defineProps<{ label: string; modelValue: boolean }>()

const emit = defineEmits(['update:modelValue'])

const value = ref(props.modelValue)

watch(value, (newValue) => {
  emit('update:modelValue', newValue)
})
</script>

<template>
  <SwitchGroup as="div" class="flex items-center px-6 py-4">
    <SwitchLabel class="grow"
      ><FormLabel>{{ label }}</FormLabel></SwitchLabel
    >
    <Switch
      v-model="value"
      class="grid items-center w-12 h-8 rounded-full cursor-default"
      :class="[{ 'bg-gray-300': !value, 'bg-sky-700': value }]"
    >
      <span
        class="inline-block translate-x-1 w-6 h-6 rounded-full transition-transform ease-out bg-white"
        :class="{
          'translate-x-5': value,
        }"
      ></span>
    </Switch>
  </SwitchGroup>
</template>
