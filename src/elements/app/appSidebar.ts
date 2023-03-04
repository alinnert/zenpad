import { createValue } from '../../lib/reactiveValues/createValue'
import { addEvent } from '../../lib/templates/addEvent.js'
import { classNames } from '../../lib/templates/classNames'
import { parseTemplate } from '../../lib/templates/parseTemplate'

export const isSidebarOpenState = createValue(false)

export class AppSidebar extends HTMLElement {
  #template = parseTemplate('app-sidebar-template')

  constructor() {
    super()

    if (!this.#template.ok) return

    addEvent(this.#template.slots['toggle-sidebar'], 'click', () => {
      isSidebarOpenState.set(false)
    })
  }

  connectedCallback() {
    if (!this.#template.ok) {
      console.error(this.#template.error)
      return
    }

    this.classList.add(
      ...classNames(
        'fixed top-0 left-0 bottom-0 w-[30rem]',
        'grid grid-rows-[auto,1fr]',
        'bg-white',
        '-translate-x-full is-active:translate-x-0',
        'shadow-none is-active:shadow-xl',
        'transition-all duration-300',
      ),
    )

    this.#template.mount(this)

    isSidebarOpenState.onChange((isSidebarOpen) => {
      this.classList.toggle('is-active', isSidebarOpen)
    })
  }
}
