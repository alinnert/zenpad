<script setup lang="ts">
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/vue'
import type { Component } from 'vue'

withDefaults(
  defineProps<{
    tabs: { label: string; content: Component }[]
    type?: 'underline' | 'pills'
  }>(),
  { type: 'underline' },
)
</script>

<template>
  <TabGroup>
    <TabList
      :class="[
        { 'border-b border-gray-400 px-4 flex gap-x-2': type === 'underline' },
        { 'flex gap-x-1': type === 'pills' },
      ]"
    >
      <Tab
        as="template"
        v-for="tab in tabs"
        :key="tab.label"
        v-slot="{ selected }"
      >
        <button
          class="focus:outline-none cursor-default"
          :class="[
            {
              'px-2 py-1 rounded': type === 'pills',
              'bg-sky-700 text-white': type === 'pills' && selected,
              'px-2 py-2 -mb-px': type === 'underline',
              'shadow-[0_-2px_theme(colors.sky.700)_inset]':
                type === 'underline' && selected,
            },
          ]"
        >
          {{ tab.label }}
        </button>
      </Tab>
    </TabList>
    <TabPanels>
      <TabPanel v-for="tab in tabs" :key="tab.label">
        <component :is="tab.content"></component>
      </TabPanel>
    </TabPanels>
  </TabGroup>
</template>
