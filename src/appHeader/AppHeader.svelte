<script lang="ts">
  import { themeStore } from '../themes'
  import Clock from './Clock.svelte'
  import MenuItem from './MenuItem.svelte'
</script>

<div
  class={`
    col-span-2
    grid grid-cols-[1fr,auto,1fr] items-center
    border-b border-gray-300
    bg-white
    backdrop-blur
  `}
>
  <div class="flex items-center">
    <h1 class="px-4 font-semibold">zenpad</h1>
    <MenuItem icon="cog" label="Settings" />

    <MenuItem label="white" on:click={() => themeStore.set('white')} />
    <MenuItem label="beige" on:click={() => themeStore.set('beige')} />
    <MenuItem label="blue" on:click={() => themeStore.set('blue')} />
    <MenuItem label="green" on:click={() => themeStore.set('green')} />
  </div>
  <div class="flex items-center">
    <MenuItem icon="chevron-double-left" />
    <MenuItem icon="chevron-left" />
    <MenuItem icon="refresh" />
    <MenuItem icon="chevron-right" />
    <MenuItem icon="chevron-double-right" />
  </div>
  <div class="flex items-center justify-end">
    <Clock />
  </div>
</div>
