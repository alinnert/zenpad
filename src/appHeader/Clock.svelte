<script lang="ts">
  import { readable } from 'svelte/store'

  const time = readable('', (set) => {
    const interval = setInterval(() => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, '0')
      const minutes = now.getMinutes().toString().padStart(2, '0')
      set(`${hours}:${minutes}`)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  })
</script>

<div class="px-4">{$time}</div>
