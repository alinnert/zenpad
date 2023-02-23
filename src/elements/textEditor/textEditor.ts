import { indentLess, insertTab } from '@codemirror/commands'
import { EditorView, KeyBinding, keymap, ViewUpdate } from '@codemirror/view'
import {
  createValue,
  ReactiveValue,
} from '../../lib/reactiveValues/createValue'

export const editorTextStates: Record<string, ReactiveValue<string>> = {
  left: createValue(''),
  right: createValue(''),
}

export class TextEditor extends HTMLElement {
  #editorName = this.getAttribute('editor-name')
  #template = document.getElementById('text-editor-template')
  #editorSlot: HTMLDivElement | null = null
  #headerSlot: HTMLSpanElement | null = null
  #footerSlot: HTMLSpanElement | null = null
  // #editorView: EditorView | null = null

  get #editorTextState(): ReactiveValue<string> | null {
    if (this.#editorName === null) return null
    return editorTextStates[this.#editorName]
  }

  connectedCallback() {
    if (this.#template === null) {
      console.error('template "text-editor-template" is missing.')
      return
    }
    if (!(this.#template instanceof HTMLTemplateElement)) {
      console.error('template "text-editor-template" is not a template element')
      return
    }

    const node = this.#template.content.cloneNode(true)
    this.appendChild(node)

    this.#editorSlot = this.querySelector('div[data-slot=editor]')
    this.#headerSlot = this.querySelector('div[data-slot=header]')
    this.#footerSlot = this.querySelector('div[data-slot=footer]')

    this.classList.add('grid')

    this.#editorTextState?.onChange((text) => this.#onTextChange(text))

    if (this.#editorSlot !== null) {
      // this.#editorView =
      new EditorView({
        doc: this.#editorTextState?.value ?? '',
        extensions: [
          keymap.of(this.#getKeybindings()),
          EditorView.updateListener.of((update) =>
            this.#onEditorUpdate(update),
          ),
        ],
        parent: this.#editorSlot,
      })
    }

    if (this.#headerSlot !== null) {
      this.#headerSlot.textContent = `(editor "${this.#editorName}")`
    }
  }

  #onEditorUpdate(update: ViewUpdate) {
    if (!update.docChanged) return
    this.#editorTextState?.set(String(update.state.doc))
  }

  #onTextChange(text: string) {
    if (this.#footerSlot === null) return
    const whitespaceMatches = text.replace(/['";:,.?¿\-!¡]+/g, '').match(/\S+/g)
    const wordCount = whitespaceMatches?.length ?? 0
    const charCount = text.length
    this.#footerSlot.textContent = `${charCount} ${
      charCount === 1 ? 'character' : 'characters'
    } / ${wordCount} ${wordCount === 1 ? 'word' : 'words'}`
  }

  #getKeybindings(): KeyBinding[] {
    return [
      { key: 'Tab', run: insertTab },
      { key: 'Shift-Tab', run: indentLess },
    ]
  }
}
