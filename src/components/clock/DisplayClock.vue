<script setup lang="ts">
import { computed, onMounted, onUnmounted, reactive } from 'vue'

let interval: number
const time = reactive({ time: new Date() })
const timeString = computed(() =>
  time.time.toLocaleTimeString(navigator.language, {
    hour: '2-digit',
    minute: '2-digit',
  }),
)

onMounted(() => {
  interval = setInterval(() => {
    time.time = new Date()
  }, 1000)
})
onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <div>{{ timeString }}</div>
</template>
