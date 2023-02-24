import { indentLess, insertTab } from '@codemirror/commands'
import { EditorView, KeyBinding, keymap, ViewUpdate } from '@codemirror/view'
import {
  createValue,
  ReactiveValue
} from '../../lib/reactiveValues/createValue'
import { parseTemplate } from '../../lib/templateParser/parseTemplate'

export const editorTextStates: Record<string, ReactiveValue<string>> = {
  left: createValue(''),
  right: createValue(''),
}

export class TextEditor extends HTMLElement {
  #editorName = this.getAttribute('editor-name')
  #template = parseTemplate('text-editor-template')
  // #editorView: EditorView | null = null

  get #editorTextState(): ReactiveValue<string> | null {
    if (this.#editorName === null) return null
    return editorTextStates[this.#editorName]
  }

  connectedCallback() {
    if (!this.#template.ok) {
      console.error(this.#template.error)
      return
    }
    this.appendChild(this.#template.node)
    this.classList.add('grid')

    this.#editorTextState?.onChange((text) => this.#onTextChange(text))

    this.#template.forEachSlot('editor', (editorSlot) => {
      new EditorView({
        doc: this.#editorTextState?.value ?? '',
        extensions: [
          keymap.of(this.#getKeybindings()),
          EditorView.updateListener.of((update) =>
            this.#onEditorUpdate(update),
          ),
        ],
        parent: editorSlot,
      })
    })

    this.#template.forEachSlot('header', (headerSlot) => {
      headerSlot.textContent = `(editor "${this.#editorName}")`
    })
  }

  #onEditorUpdate(update: ViewUpdate) {
    if (!update.docChanged) return
    this.#editorTextState?.set(String(update.state.doc))
  }

  #onTextChange(text: string) {
    if (!this.#template.ok) return
    const whitespaceMatches = text.replace(/['";:,.?¿\-!¡]+/g, '').match(/\S+/g)
    const wordCount = whitespaceMatches?.length ?? 0
    const charCount = text.length
    const characterPluralized = charCount === 1 ? 'character' : 'characters'
    const wordPluralized = wordCount === 1 ? 'word' : 'words'
    const counterString = `${charCount} ${characterPluralized} / ${wordCount} ${wordPluralized}`

    this.#template.forEachSlot('footer', (footerSlot) => {
      footerSlot.textContent = counterString
    })
  }

  #getKeybindings(): KeyBinding[] {
    return [
      { key: 'Tab', run: insertTab },
      { key: 'Shift-Tab', run: indentLess },
    ]
  }
}
