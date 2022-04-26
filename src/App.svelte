<script lang="ts">
  import AppHeader from './appHeader/AppHeader.svelte'
  import Editor from './editor/Editor.svelte'
  import { leftEditorStore, rightEditorStore } from './editor/editorStore'
</script>

<div
  class={`
    fixed inset-0
    grid grid-rows-[auto,1fr] grid-cols-[1fr,1fr]
    bg-gray-50
  `}
>
  <AppHeader />
  <Editor editorStore={leftEditorStore} />
  <Editor editorStore={rightEditorStore} />
</div>
