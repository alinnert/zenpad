import { addEvent } from '../../lib/templates/addEvent.js'
import { parseTemplate } from '../../lib/templates/parseTemplate'
import { isSidebarOpenState } from './appSidebar'

export class AppFrame extends HTMLElement {
  #template = parseTemplate('app-frame-template')

  constructor() {
    super()

    if (!this.#template.ok) return

    addEvent(this.#template.slots['toggle-sidebar'], 'click', () => {
      isSidebarOpenState.set(!isSidebarOpenState.value)
    })
  }

  connectedCallback() {
    if (!this.#template.ok) {
      console.error('template "app-frame-template" is missing')
      return
    }

    this.classList.add('block')
    this.#template.mount(this)
  }
}
