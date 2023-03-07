<script setup lang="ts">
import MainTabs from '@/components/ui/MainTabs.vue'
import Colors from './ThemeTab.Colors.vue'
import Images from './ThemeTab.Images.vue'
</script>

<template>
  <MainTabs
    :tabs="[
      { label: 'Colors', content: Colors },
      { label: 'Images', content: Images },
    ]"
    type="pills"
  ></MainTabs>
</template>
