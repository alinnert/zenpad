import { isNonNullable } from '../../lib/basics/isNonNullable'
import { createComputedValue } from '../../lib/reactiveValues/createComputedValue'
import { createValue } from '../../lib/reactiveValues/createValue'
import { getChildren } from '../../lib/templateParser/getChildren'
import { parseTemplate } from '../../lib/templateParser/parseTemplate'
import { TabsTab } from './tabsTab'

export class TabsContainer extends HTMLElement {
  #template = parseTemplate('tabs-container-template')
  #currentIndex = createValue(0)
  #tabElements = createValue<TabsTab[]>([])
  #tabLabels = createComputedValue(
    [this.#tabElements],
    ([tabElements]): string[] => {
      return tabElements
        .map((element) => element.getAttribute('label'))
        .filter(isNonNullable)
    },
  )
  #tabLabelsHtml = createComputedValue(
    [this.#tabLabels],
    ([tabLabels]): Element[] => {
      return tabLabels
        .map((label) => {
          const tabLabel = document.createElement('tab-label')
          tabLabel.textContent = label
          return tabLabel
        })
    },
  )

  connectedCallback() {
    if (!this.#template.ok) {
      console.error(this.#template.error)
      return
    }

    this.classList.add('block')

    const tabElements = getChildren<TabsTab>(this, 'tabs-tab')
    this.#tabElements.set(tabElements)
    this.#template.mount(this)

    this.#tabLabelsHtml.onChange((tabLabelsHtml) => {
      if (!this.#template.ok) return
      this.#template.forEachSlot('tabs', (tabsSlot) => {
        tabsSlot.append(...tabLabelsHtml)
        tabLabelsHtml.forEach((tabLabelElement, index) => {
          tabLabelElement.addEventListener('click', () => {
            this.#currentIndex.set(index)
          })
        })
      })
    })

    this.#currentIndex.onChange((currentIndex) => {
      this.#tabLabelsHtml.value.forEach((tabLabelElement, index) => {
        tabLabelElement.classList.toggle('is-active', index === currentIndex)
      })

      this.#tabElements.value.forEach((tabElement, index) => {
        tabElement.classList.toggle('hidden', index !== currentIndex)
      })
    })
  }
}
