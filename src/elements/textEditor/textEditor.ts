import { indentLess, insertTab } from '@codemirror/commands'
import { EditorView, KeyBinding, keymap, ViewUpdate } from '@codemirror/view'
import { debounce } from '../../lib/basics/debounce'
import {
  createValue,
  ReactiveValue,
} from '../../lib/reactiveValues/createValue'
import { parseTemplate } from '../../lib/templates/parseTemplate'

export const editorTextStates: Record<string, ReactiveValue<string>> = {}

export class TextEditor extends HTMLElement {
  #editorName = this.getAttribute('editor-name')
  #template = parseTemplate('text-editor-template')

  get #editorTextState(): ReactiveValue<string> {
    if (this.#editorName === null) {
      throw new Error('No [editor-name] provided to <text-editor>.')
    }
    return editorTextStates[this.#editorName]
  }

  set #editorTextState(value: ReactiveValue<string>) {
    if (this.#editorName === null) {
      throw new Error('No [editor-name] provided to <text-editor>.')
    }
    editorTextStates[this.#editorName] = value
  }

  connectedCallback() {
    if (!this.#template.ok) {
      console.error(this.#template.error)
      return
    }

    this.#editorTextState = createValue('')

    this.#template.mount(this)
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
    this.#updateWordCounter(text)
    this.#saveTextDebounced(text)
  }

  #updateWordCounter(text: string) {
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

  #saveTextDebounced = debounce(this.#saveText, 750)

  #saveText(_text: string) {}

  #getKeybindings(): KeyBinding[] {
    return [
      { key: 'Tab', run: insertTab },
      { key: 'Shift-Tab', run: indentLess },
    ]
  }
}
