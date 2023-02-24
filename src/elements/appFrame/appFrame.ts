import { parseTemplate } from '../../lib/templateParser/parseTemplate'
import { isSidebarOpenState } from '../appSidebar/appSidebar'
import { TextEditor } from '../textEditor/textEditor'

export class AppFrame extends HTMLElement {
  #template = parseTemplate('app-frame-template')

  connectedCallback() {
    if (!this.#template.ok) {
      console.error('template "app-frame-template" is missing')
      return
    }

    this.classList.add('block')
    this.appendChild(this.#template.node)

    this.#template.forEachSlot('editors', (editorsSlot) => {
      const textEditors = Array.from(this.children).filter(
        (child): child is TextEditor => child.tagName === 'TEXT-EDITOR',
      )

      editorsSlot.append(...textEditors)
    })

    this.#template.forEachSlot('toggle-sidebar', (toggleSidebarSlot) => {
      toggleSidebarSlot.addEventListener('click', () => {
        isSidebarOpenState.set(!isSidebarOpenState.value)
      })
    })
  }
}
