import { createValue } from '../../lib/reactiveValues/createValue'
import { addEvent } from '../../lib/templates/addEvent.js'
import { parseTemplate } from '../../lib/templates/parseTemplate'
import { toggleBooleanAttribute } from '../../lib/templates/toggleBooleanAttribute.js'

export class NumberInput extends HTMLElement {
  #template = parseTemplate('number-input-template')
  #label = this.getAttribute('label')
  #valueId = this.getAttribute('value-id')
  #min = Number.parseFloat(this.getAttribute('min') ?? '0')
  #max = Number.parseFloat(this.getAttribute('max') ?? '0')
  #step = Number.parseFloat(this.getAttribute('step') ?? '1')
  #defaultValue = Number.parseFloat(this.getAttribute('default-value') ?? '0')
  #decimalFactor = this.#getDecimalFactor()
  #currentValue = createValue(this.#defaultValue)

  constructor() {
    super()

    if (!this.#template.ok) return

    addEvent(this.#template.slots['decrease-button'], 'click', () => {
      if (this.#currentValue.value <= this.#min) return
      const currentValueShifted = this.#currentValue.value * this.#decimalFactor
      const stepShifted = this.#step * this.#decimalFactor
      const newValueShifted = currentValueShifted - stepShifted
      this.#currentValue.set(newValueShifted / this.#decimalFactor)
    })

    addEvent(this.#template.slots['increase-button'], 'click', () => {
      if (this.#currentValue.value >= this.#max) return
      const currentValueShifted = this.#currentValue.value * this.#decimalFactor
      const stepShifted = this.#step * this.#decimalFactor
      const newValueShifted = currentValueShifted + stepShifted
      this.#currentValue.set(newValueShifted / this.#decimalFactor)
    })
  }

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
        valueSlot.textContent = currentValue.toString() ?? '-'
      })

      this.#updateButtonState(currentValue)
    })
  }

  #updateButtonState(currentValue: number) {
    if (!this.#template.ok) return

    this.#template.forEachSlot('decrease-button', (decreaseButton) => {
      const cond = () => currentValue <= this.#min
      toggleBooleanAttribute(decreaseButton, 'disabled', cond)
    })

    this.#template.forEachSlot('increase-button', (increaseButton) => {
      const cond = () => currentValue >= this.#max
      toggleBooleanAttribute(increaseButton, 'disabled', cond)
    })
  }

  /**
   * Gets the number of decimal places based off the step property and returns a
   * factor to shift the decimal point by those numbers.
   * `step="1"` returns `1` (`1 * 1 === 1`)
   * `step="0.1"` returns `10` (`0.1 * 10 === 1`)
   * `step="0.01"` returns `100` (`0.01 * 100 === 1`)
   * and so on...
   */
  #getDecimalFactor(): number {
    const stepValue = this.getAttribute('step') ?? '0'
    const match = stepValue.match(/^\d+(\.(\d)+)?$/)
    if (match === null) {
      return 1
    }
    const decimalValue = match[2]
    if (decimalValue === undefined) {
      return 1
    }
    const numberDecimalPlaces = decimalValue.length
    return 1 * 10 ** numberDecimalPlaces
  }
}
