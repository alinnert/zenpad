<script setup lang="ts">
import { sidebarOpenState, toggleSidebar } from '@/states/basicUiStates'
import { onMounted } from 'vue'
import AboutTab from '../../widgets/sidebar/AboutTab.vue'
import GeneralTab from '../../widgets/sidebar/GeneralTab.vue'
import ThemeTab from '../../widgets/sidebar/ThemeTab.vue'
import MainTabs from '../ui/MainTabs.vue'

onMounted(() => {
  addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (!sidebarOpenState.value) return
      toggleSidebar(false)
      event.stopPropagation()
      return
    }
  })
})
</script>

<template>
  <div
    :class="[
      'fixed inset-0 right-auto w-[26rem] bg-white',
      'transition ease-out duration-300',
      {
        '-translate-x-full': !sidebarOpenState,
        'shadow-2xl': sidebarOpenState,
      },
    ]"
  >
    <div class="flex items-center px-6 py-4">
      <div class="text-xl font-semibold mr-auto">Settings</div>
      <div
        :class="[
          'grid items-center justify-center',
          'w-8 aspect-square',
          'rounded',
          'hover:bg-gray-200',
        ]"
        @click="toggleSidebar(false)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5"
        >
          <path
            d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
          />
        </svg>
      </div>
    </div>

    <MainTabs
      :tabs="[
        { label: 'General', content: GeneralTab },
        { label: 'Themes', content: ThemeTab },
        { label: 'About', content: AboutTab },
      ]"
    ></MainTabs>
  </div>
</template>
