import { createValue } from '../../lib/reactiveValues/createValue'

const appSidebarClasses = [
  'fixed top-0 left-0 bottom-0 w-[30rem]',
  'bg-white',
  '-translate-x-full is-active:translate-x-0',
  'shadow-none is-active:shadow-xl',
  'transition-all duration-300',
]
  .join(' ')
  .split(' ')

export const isSidebarOpenState = createValue(false)

export class AppSidebar extends HTMLElement {
  connectedCallback() {
    this.classList.add(...appSidebarClasses)
    isSidebarOpenState.onChange((isSidebarOpen) => {
      this.classList.toggle('is-active', isSidebarOpen)
    })
  }
}
