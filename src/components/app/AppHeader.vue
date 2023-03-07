<script setup lang="ts">
import { showClockState, toggleSidebar } from '@/states/basicUiStates'
import DisplayClock from '../clock/DisplayClock.vue'
import AlignmentContainer from '../layout/AlignmentContainer.vue'
</script>

<template>
  <div class="px-4 py-2 border-b border-slate-300">
    <AlignmentContainer>
      <template #left>
        <div @click="toggleSidebar(true)">Settings</div>
      </template>
      <div>zenpad</div>
      <template #right>
        <DisplayClock v-if="showClockState" />
      </template>
    </AlignmentContainer>
  </div>
</template>
