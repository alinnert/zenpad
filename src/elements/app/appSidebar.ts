import { createValue } from '../../lib/reactiveValues/createValue'
import { classNames } from '../../lib/basics/classNames'
import { parseTemplate } from '../../lib/templateParser/parseTemplate'

export const isSidebarOpenState = createValue(false)

export class AppSidebar extends HTMLElement {
  #template = parseTemplate('app-sidebar-template')

  connectedCallback() {
    if (!this.#template.ok) {
      console.error(this.#template.error)
      return
    }

    this.classList.add(
      ...classNames([
        'fixed top-0 left-0 bottom-0 w-[30rem]',
        'bg-white',
        '-translate-x-full is-active:translate-x-0',
        'shadow-none is-active:shadow-xl',
        'transition-all duration-300',
      ]),
    )

    this.#template.mount(this)

    this.#template.forEachSlot('toggle-sidebar', (toggleSidebarSlot) => {
      toggleSidebarSlot.addEventListener('click', () => {
        isSidebarOpenState.set(false)
      })
    })

    isSidebarOpenState.onChange((isSidebarOpen) => {
      this.classList.toggle('is-active', isSidebarOpen)
    })
  }
}
