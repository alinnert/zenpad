<script setup lang="ts"></script>

<template>
  <div
    :class="[
      'button-group flex gap-x-px',
      '[&>button]:rounded-none first:[&>button]:rounded-l last:[&>button]:rounded-r',
    ]"
  >
    <slot></slot>
  </div>
</template>
