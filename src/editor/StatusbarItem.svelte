<script lang="ts">
  export let moveRight: boolean = false
</script>

<div class={`px-4 py-1 ${moveRight ? 'ml-auto' : ''}`}>
  <slot />
</div>
