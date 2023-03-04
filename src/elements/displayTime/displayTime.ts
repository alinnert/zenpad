import { classNames } from '../../lib/templates/classNames.js'
import { createAutomatedValue } from '../../lib/reactiveValues/createAutomatedValue'

function getTimeString(): string {
  return new Date().toLocaleTimeString(navigator.language, {
    hour: '2-digit',
    minute: '2-digit',
  })
}

export class DisplayTime extends HTMLElement {
  #timer = createAutomatedValue<string>((next) => {
    next(getTimeString())
    setInterval(() => {
      next(getTimeString())
    }, 2000)
  })

  connectedCallback() {
    this.classList.add(
      ...classNames('tabular-nums font-features-[ss01] font-medium px-3'),
    )

    this.#timer.onChange((time) => {
      this.textContent = time
    })
  }
}
