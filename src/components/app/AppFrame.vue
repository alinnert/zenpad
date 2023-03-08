<script setup lang="ts">
import TextEditor from '../editor/TextEditor.vue'
import AppHeader from './AppHeader.vue'
</script>

<template>
  <div class="fixed inset-0 grid grid-rows-[auto,1fr]">
    <AppHeader />
    <div class="relative">
      <TextEditor name="a" />
      <TextEditor name="b" />
    </div>
  </div>
</template>
