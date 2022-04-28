<script lang="ts">
  import AppHeader from './appHeader/AppHeader.svelte'
  import Editor from './editor/Editor.svelte'
  import { leftEditorStore, rightEditorStore } from './editor/editorStore'
  import { themeStore } from './themes'
</script>

<div
  class={`
    fixed inset-0
    grid grid-rows-[auto,1fr] grid-cols-[1fr,1fr]
    transition-colors duration-500
    bg-[color:var(--bg)]
    theme-${$themeStore}
  `}
>
  <AppHeader />
  <Editor editorStore={leftEditorStore} />
  <Editor editorStore={rightEditorStore} />
</div>

<style>
  .theme-white {
    --bg: white;
  }

  .theme-slate {
    --bg: #f8fafc;
  }

  .theme-blue {
    --bg: #f0f9ff;
  }

  .theme-green {
    --bg: #ecfdf5;
  }
</style>
