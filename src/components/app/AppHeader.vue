<script setup lang="ts">
import { toggleSidebar } from '@/states/basicUiStates'
import { showClockState } from '@/states/generalSettingsStates'
import { storageActionsRunningState } from '@/sys/storage'
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
        <div class="flex gap-x-4">
          <div v-if="storageActionsRunningState > 0">
            {{ storageActionsRunningState }}
            {{ storageActionsRunningState === 1 ? 'task' : 'tasks' }} running
          </div>
          <DisplayClock v-if="showClockState" />
        </div>
      </template>
    </AlignmentContainer>
  </div>
</template>
