import { addEvent } from '../../lib/templates/addEvent.js'
import { classNames } from '../../lib/templates/classNames.js'

export const themeTypes = ['color', 'pattern', 'image'] as const
export type ThemeType = typeof themeTypes[number]

export class ThemeItem extends HTMLElement {
  get #type(): ThemeType | null {
    const themeType = this.getAttribute('type') as ThemeType
    return themeTypes.includes(themeType) ? themeType : null
  }
  #value = this.getAttribute('value')

  constructor() {
    super()

    this.classList.add(
      ...classNames('block aspect-square', 'border border-gray-700', 'rounded'),
    )

    if (this.#type === null) return
    if (this.#value === null) return

    switch (this.#type) {
      case 'color':
        this.style.backgroundColor = this.#value
        break
    }

    addEvent(this, 'click', () => {
      if (this.#type === null) return
      if (this.#value === null) return

      console.log(`change theme to ${this.#value} (type ${this.#type})`)
    })
  }

  connectedCallback() {}
}
