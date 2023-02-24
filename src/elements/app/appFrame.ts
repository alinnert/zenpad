import { parseTemplate } from '../../lib/templateParser/parseTemplate'
import { isSidebarOpenState } from './appSidebar'

export class AppFrame extends HTMLElement {
  #template = parseTemplate('app-frame-template')

  connectedCallback() {
    if (!this.#template.ok) {
      console.error('template "app-frame-template" is missing')
      return
    }

    this.classList.add('block')
    this.#template.mount(this)

    this.#template.forEachSlot('toggle-sidebar', (toggleSidebarSlot) => {
      toggleSidebarSlot.addEventListener('click', () => {
        isSidebarOpenState.set(!isSidebarOpenState.value)
      })
    })
  }
}
