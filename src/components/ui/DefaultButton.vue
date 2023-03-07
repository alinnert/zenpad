<script setup lang="ts"></script>

<template>
  <button
    :class="[
      'px-2 py-1 rounded',
      'bg-gray-200 hover:bg-gray-300 active:bg-gray-400 disabled:bg-gray-50',
      'disabled:text-gray-400',
      'cursor-default',
    ]"
  >
    <slot></slot>
  </button>
</template>
