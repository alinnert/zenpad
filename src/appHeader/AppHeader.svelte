<script lang="ts">
  import { themeStore } from '../themes'
  import Clock from './Clock.svelte'
  import MenuItem from './MenuItem.svelte'
  import logo from '../assets/logo-plain.svg?raw'
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
    <h1 class="px-4 font-semibold flex items-center">
      <div class="w-4 mx-2 fill-slate-600">{@html logo}</div>
      zenpad
    </h1>
    <MenuItem icon="cog" label="Settings" />

    <MenuItem label="white" on:click={() => themeStore.set('white')} />
    <MenuItem label="slate-50" on:click={() => themeStore.set('slate')} />
    <MenuItem label="sky-50" on:click={() => themeStore.set('blue')} />
    <MenuItem label="emerald-50" on:click={() => themeStore.set('green')} />
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
