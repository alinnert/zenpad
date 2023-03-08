<script setup lang="ts">
import MainTabs from '@/components/ui/UiTabs.vue'
import {
  currentThemeTabState,
  setCurrentThemeTab,
} from '@/states/basicUiStates'
import Colors from './ThemeTab.Colors.vue'
import Images from './ThemeTab.Images.vue'
</script>

<template>
  <MainTabs
    type="pills"
    :tabs="[
      { label: 'Colors', content: Colors },
      { label: 'Images', content: Images },
    ]"
    :defaultIndex="currentThemeTabState"
    @change="setCurrentThemeTab"
  ></MainTabs>
</template>
