<script lang="ts">
  import Clock from './Clock.svelte'
  import MenuItem from './MenuItem.svelte'
  import { menuItems, menuStateStore } from './menuStore'

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
    flex items-center
    border-b border-gray-300
    bg-white/80
    backdrop-blur
  `}
  bind:this={appHeaderRef}
>
  <h1 class="px-4 font-semibold">zenpad</h1>

  {#each menuItems as item}
    <MenuItem label={item.label} id={item.id} />
  {/each}

  <div class="ml-auto" />
  <Clock />
</div>
