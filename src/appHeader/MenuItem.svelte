<script lang="ts">
  import type { IconName } from 'src/ui/Icon.svelte'
  import Icon from '../ui/Icon.svelte'

  export let label: string | null = null
  export let icon: IconName | null = null
  export let isCurrent = false
</script>

<div
  class={`
    flex items-center
    my-1 px-3 py-1
    hover:bg-black/10 active:bg-black/20
    ${
      isCurrent
        ? 'text-gray-900 underline'
        : 'text-gray-500 hover:text-gray-700'
    }
    rounded
  `}
  on:click
>
  {#if icon !== null}
    <Icon name={icon} />
  {/if}

  {#if label !== null}
    <div class="ml-1 first:ml-0">{label}</div>
  {/if}

  {#if icon === null && label === null}
    BUTTON
  {/if}
</div>
