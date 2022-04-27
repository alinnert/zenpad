<script lang="ts">
  import type { IconName } from '../ui/Icon.svelte'
  import Icon from '../ui/Icon.svelte'

  export let icon: IconName = null
</script>

<div
  class={`
    flex items-center
    px-3 py-1
    hover:bg-black/10 active:bg-black/20
    font-semibold
  `}
  on:click
>
  {#if icon !== null}
    <div class="mr-1">
      <Icon name={icon} />
    </div>
  {/if}
  <slot />
</div>
