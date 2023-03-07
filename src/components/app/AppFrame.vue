<script setup lang="ts">
import TextEditor from '../editor/TextEditor.vue';
import AppHeader from './AppHeader.vue';

</script>

<template>
  <AppHeader />
  <TextEditor name="left" />
  <TextEditor name="right" />
</template>
