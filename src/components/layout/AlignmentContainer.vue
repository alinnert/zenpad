<script setup lang="ts"></script>

<template>
  <div class="grid grid-cols-[1fr,auto,1fr]">
    <div>
      <slot name="left"></slot>
    </div>
    <div>
      <slot></slot>
    </div>
    <div class="justify-self-end">
      <slot name="right"></slot>
    </div>
  </div>
</template>
