import { editorATextState, editorBTextState } from '@/states/editorStates'
import { insertTab } from '@codemirror/commands'
import { EditorView, keymap } from '@codemirror/view'
import { onMounted, ref, type Ref } from 'vue'
import type { EditorName } from './TextEditor.vue'

type UseCodeMirrorOptions = {
  name: EditorName
  textState: Ref<string>
}

export function useCodeMirror({
  name,
  textState,
}: UseCodeMirrorOptions): Ref<HTMLDivElement | null> {
  const editor = ref<HTMLDivElement | null>(null)

  onMounted(() => {
    if (editor.value === null) return

    new EditorView({
      doc: textState.value,
      extensions: [
        keymap.of([{ key: 'Tab', run: insertTab }]),
        EditorView.updateListener.of((update) => {
          if (!update.docChanged) return
          const text = String(update.state.doc)

          if (name === 'a') {
            editorATextState.value = text
          }

          if (name === 'b') {
            editorBTextState.value = text
          }
        }),
      ],
      parent: editor.value,
    })
  })

  return editor
}
