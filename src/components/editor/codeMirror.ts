import { insertTab } from '@codemirror/commands'
import { EditorView, keymap } from '@codemirror/view'
import { onMounted, ref, type Ref } from 'vue'
import type { EditorName } from './TextEditor.vue'

type UseCodeMirrorOptions = { name: EditorName }

export function useCodeMirror({
  name,
}: UseCodeMirrorOptions): Ref<HTMLDivElement | null> {
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
            `saving ${name} editor, text: ${String(update.state.doc)}`,
          )
        }),
      ],
      parent: editor.value,
    })
  })

  return editor
}
