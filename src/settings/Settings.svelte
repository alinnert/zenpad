<script context="module" lang="ts">
  import { writable } from 'svelte/store'
  import { themeStore } from '../themes'
  import Button from '../ui/Button.svelte'

  export const settingsOpen = writable(false)
</script>

<script lang="ts">
  let dialogElement: HTMLDialogElement | undefined

  settingsOpen.subscribe((open) => {
    if (open) {
      dialogElement?.showModal()
    } else {
      dialogElement?.close()
    }
  })
</script>

<dialog
  class={`
    rounded
    shadow-xl
    backdrop:bg-transparent
  `}
  bind:this={dialogElement}
>
  <h2 class="font-bold text-lg mb-4">Settings</h2>

  <div>
    <h3 class="font-semibold">Background color</h3>

    <div class="flex gap-x-2 mt-2">
      <Button on:click={() => themeStore.set('white')}>white</Button>
      <Button on:click={() => themeStore.set('slate')}>slate</Button>
      <Button on:click={() => themeStore.set('blue')}>sky</Button>
      <Button on:click={() => themeStore.set('green')}>emerald</Button>
    </div>
  </div>

  <div class="mt-4">
    <Button on:click={() => settingsOpen.update((open) => !open)}>Close</Button>
  </div>
</dialog>
