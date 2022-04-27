<script lang="ts">
  import Clock from './Clock.svelte'
  import MenuItem from './MenuItem.svelte'
  import { menuStateStore } from './menuStore'

  let appHeaderRef: HTMLDivElement

  function handleBodyClick(event: MouseEvent) {
    const target = event.target
    if (!(target instanceof Element)) return
    if (appHeaderRef === target || appHeaderRef.contains(target)) return

    $menuStateStore = null
  }
</script>

<svelte:body on:click={handleBodyClick} />

<div
  class={`
    col-span-2
    grid grid-cols-[1fr,auto,1fr] items-center
    border-b border-gray-300
    bg-white/80
    backdrop-blur
  `}
  bind:this={appHeaderRef}
>
  <div class="flex items-center">
    <h1 class="px-4 font-semibold">zenpad</h1>
    <MenuItem icon="cog" label="Settings" />
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
