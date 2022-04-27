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
    transition-colors
    bg-[color:var(--bg)]
    ${
      $themeStore === 'white'
        ? '[--bg:white]'
        : $themeStore === 'beige'
        ? '[--bg:beige]'
        : $themeStore === 'blue'
        ? '[--bg:#ddddff]'
        : $themeStore === 'green'
        ? '[--bg:#ddffdd]'
        : 'white'
    }
  `}
>
  <AppHeader />
  <Editor editorStore={leftEditorStore} />
  <Editor editorStore={rightEditorStore} />
</div>
