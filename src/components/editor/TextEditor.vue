<script setup lang="ts">
import { insertTab } from '@codemirror/commands'
import { EditorView, keymap } from '@codemirror/view'
import { onMounted, ref } from 'vue'

const props = defineProps<{ name: 'left' | 'right' }>()

const editor = ref<HTMLDivElement | null>(null)

onMounted(() => {
  if (editor.value === null) return

  new EditorView({
    doc: '',
    extensions: [
      keymap.of([{ key: 'Tab', run: insertTab }]),
      EditorView.updateListener.of((update) => {
        if (!update.docChanged) return
        console.log(
          `saving ${props.name} editor, text: ${String(update.state.doc)}`,
        )
      }),
    ],
    parent: editor.value,
  })
})
</script>

<template>
  <div class="p-2 grid">
    <div class="grid" ref="editor"></div>
  </div>
</template>
