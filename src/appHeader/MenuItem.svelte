<script lang="ts">
  import { menuStateStore } from './menuStore'

  export let label: string
  export let id: string

  function handleItemClick(): void {
    $menuStateStore = $menuStateStore === id ? null : id
  }
</script>

<div
  class={`
    my-1 px-3 py-1
    hover:bg-black/10 active:bg-black/20
    ${
      $menuStateStore === id
        ? 'text-gray-900 underline'
        : 'text-gray-500 hover:text-gray-700'
    }
    rounded
  `}
  on:click={handleItemClick}
>
  {label}
</div>
