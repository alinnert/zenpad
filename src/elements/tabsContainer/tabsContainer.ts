import { createComputedValue } from '../../lib/reactiveValues/createComputedValue'
import { createValue } from '../../lib/reactiveValues/createValue'
import { TabsTab } from '../tabsTab/tabsTab'

export class TabsContainer extends HTMLElement {
  #currentIndex = createValue(0)
  #tabElements = createValue<TabsTab[]>([])
  #tabLabels = createComputedValue(
    [this.#tabElements],
    ([tabElements]): string[] => {
      return tabElements
        .map((element) => element.getAttribute('label'))
        .filter((label): label is string => label !== null)
    },
  )
  #tabLabelElements = createComputedValue(
    [this.#tabLabels],
    ([tabLabels]): HTMLDivElement[] => {
      return tabLabels.map((label) => {
        const element = document.createElement('div')
        const elementClasses = [
          'px-4 py-1.5 rounded',
          'hover:bg-gray-200',
          'is-active:bg-sky-700 is-active:text-white',
        ].join(' ')
        element.classList.add(...elementClasses.split(' '))
        element.textContent = label
        return element
      })
    },
  )
  #tabsSlot: HTMLDivElement | null = null

  connectedCallback() {
    const tabElements = Array.from(this.children).filter(
      (element): element is TabsTab => element.tagName === 'TABS-TAB',
    )

    this.#tabElements.set(tabElements)
    const tabsSlotHtml = `<div
      class="flex justify-center gap-x-2 py-4"
      data-slot="tabs"
    ></div>`
    this.insertAdjacentHTML('afterbegin', tabsSlotHtml)
    this.#tabsSlot = this.querySelector('div[data-slot=tabs]')

    this.#tabLabelElements.onChange((tabLabelElements) => {
      if (this.#tabsSlot === null) return
      this.#tabsSlot.append(...tabLabelElements)
      tabLabelElements.forEach((tabLabelElement, index) => {
        tabLabelElement.addEventListener('click', () => {
          this.#currentIndex.set(index)
        })
      })
    })

    this.#currentIndex.onChange((currentIndex) => {
      this.#tabLabelElements.value.forEach((tabLabelElement, index) => {
        tabLabelElement.classList.toggle('is-active', index === currentIndex)
      })

      this.#tabElements.value.forEach((tabElement, index) => {
        tabElement.classList.toggle('hidden', index !== currentIndex)
      })
    })
  }
}
