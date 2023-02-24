import { createValue } from '../../lib/reactiveValues/createValue'
import { parseTemplate } from '../../lib/templateParser/parseTemplate'

export class NumberInput extends HTMLElement {
  #template = parseTemplate('number-input-template')
  #label = this.getAttribute('label')
  #valueId = this.getAttribute('value-id')
  #min = this.getAttribute('min')
  #max = this.getAttribute('max')
  #step = this.getAttribute('step') ?? '1'
  #defaultValue = this.getAttribute('default-value')
  #currentValue = createValue(this.#defaultValue)

  connectedCallback() {
    if (!this.#template.ok) {
      console.error(this.#template.error)
      return
    }

    this.#template.mount(this)

    this.#template.forEachSlot('label', (labelSlot) => {
      labelSlot.textContent = this.#label
    })

    this.#currentValue.onChange((currentValue) => {
      if (!this.#template.ok) return

      this.#template.forEachSlot('value', (valueSlot) => {
        valueSlot.textContent = currentValue ?? '-'
      })
    })
  }
}
