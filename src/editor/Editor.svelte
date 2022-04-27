<script lang="ts">
  import ToolbarButton from './ToolbarButton.svelte'
  import ToolbarText from './ToolbarText.svelte'
  import { getWordCount } from './wordCounter'

  export let editorStore

  $: wordCount = getWordCount($editorStore)

  function handleTextareaInput(event: Event) {
    if (!(event.target instanceof HTMLTextAreaElement)) return
    console.log(event.target.value)
    $editorStore = event.target.value
  }
</script>

<div class="grid justify-center pt-4">
  <div
    class={`
      grid grid-rows-[auto,1fr,auto]
      w-[80ex] max-w-full
      border-l border-t border-r border-gray-300
      rounded-t-md
      bg-white
      overflow-hidden
    `}
  >
    <div class="border-b border-gray-300 flex">
      <div class="flex">
        <ToolbarButton icon="document">File</ToolbarButton>
        <ToolbarText>Temporary</ToolbarText>
      </div>
      <div class="ml-auto flex" />
    </div>

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

    <div class="border-t border-gray-300 flex">
      <div class="flex">
        <ToolbarText>
          {$editorStore.length}
          {$editorStore.length === 1 ? 'character' : 'characters'}
        </ToolbarText>
        <ToolbarText>
          {wordCount}
          {wordCount === 1 ? 'word' : 'words'}
        </ToolbarText>
      </div>
      <div class="ml-auto flex" />
    </div>
  </div>
</div>
