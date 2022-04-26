<script lang="ts">
  import Statusbar from './Statusbar.svelte'
  import StatusbarButton from './StatusbarButton.svelte'
  import StatusbarItem from './StatusbarItem.svelte'
  import { getWordCount } from './wordCounter'

  export let editorStore

  $: wordCount = getWordCount($editorStore)

  function handleTextareaInput(event: Event) {
    if (!(event.target instanceof HTMLTextAreaElement)) return
    console.log(event.target.value)
    $editorStore = event.target.value
  }
</script>

<div class="grid justify-center p-4">
  <div
    class={`
      grid grid-rows-[1fr,auto]
      w-[80ex] max-w-full
      border border-gray-300
      rounded-md
      bg-white
      overflow-hidden
    `}
  >
    <textarea
      class={`
        px-4 py-2
        focus:outline-none
        bg-transparent
        resize-none
      `}
      on:input={handleTextareaInput}
      value={$editorStore}
    />

    <Statusbar>
      <svelte:fragment slot="left">
        <StatusbarButton>Focus</StatusbarButton>
        <StatusbarButton>Minimize</StatusbarButton>
      </svelte:fragment>

      <svelte:fragment slot="right">
        <StatusbarItem>
          {$editorStore.length}
          {$editorStore.length === 1 ? 'character' : 'characters'}
        </StatusbarItem>
        <StatusbarItem>
          {wordCount}
          {wordCount === 1 ? 'word' : 'words'}
        </StatusbarItem>
      </svelte:fragment>
    </Statusbar>
  </div>
</div>
