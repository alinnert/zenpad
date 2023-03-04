import { addEvent } from '../../lib/templates/addEvent.js'
import { classNames } from '../../lib/templates/classNames.js'
import { isNonNullable } from '../../lib/basics/isNonNullable'
import { createComputedValue } from '../../lib/reactiveValues/createComputedValue'
import { createValue } from '../../lib/reactiveValues/createValue'
import { getChildren } from '../../lib/templates/getChildren'
import {
  ParsedTemplate,
  parseTemplate,
} from '../../lib/templates/parseTemplate'
import { TabType, tabTypes } from './tabLabel.js'
import { TabsTab } from './tabsTab'

export class TabsContainer extends HTMLElement {
  #cachedTemplate: ParsedTemplate | null = null
  get #template(): ParsedTemplate {
    if (this.#cachedTemplate === null) {
      const templateId = `tabs-container-template--type:${this.#tabsType}`
      this.#cachedTemplate = parseTemplate(templateId)
    }
    return this.#cachedTemplate
  }
  get #tabsType(): TabType {
    const tabsType = this.getAttribute('type') as TabType
    return tabTypes.includes(tabsType) ? tabsType : 'underline'
  }
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
  #tabLabelElements = createComputedValue(
    [this.#tabLabels],
    ([tabLabels]): Element[] => {
      return tabLabels.map((label) => {
        const tabLabel = document.createElement('tab-label')
        tabLabel.setAttribute('type', this.#tabsType)
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

    this.classList.add(
      ...classNames('block', 'grid grid-rows-[auto,1fr]', 'overflow-hidden'),
    )

    const tabElements = getChildren<TabsTab>(this, 'tabs-tab')
    this.#tabElements.set(tabElements)
    this.#template.mount(this)

    this.#template.forEachSlot('content', (contentSlot) => {
      contentSlot.classList.add(...classNames('overflow-y-auto'))
    })

    this.#tabLabelElements.onChange((tabLabelElements) => {
      if (!this.#template.ok) return
      this.#template.forEachSlot('tabs', (tabsSlot) => {
        tabsSlot.append(...tabLabelElements)
      })
      addEvent(tabLabelElements, 'mousedown', (_event, index) => {
        this.#currentIndex.set(index)
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
