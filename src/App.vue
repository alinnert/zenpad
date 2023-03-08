<script setup lang="ts">
import AppCloak from './components/app/AppCloak.vue'
import AppFrame from './components/app/AppFrame.vue'
import AppSidebar from './components/app/AppSidebar.vue'
import { initializingSettingsCountState } from './sys/definePersistentSetting'
</script>

<template>
  <AppCloak v-if="initializingSettingsCountState > 0" />
  <template v-else>
    <AppFrame />
    <AppSidebar />
  </template>
</template>
