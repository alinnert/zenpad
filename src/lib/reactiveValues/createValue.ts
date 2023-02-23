import { ReactiveValueListener } from './types'

export type ReactiveValue<T> = {
  readonly value: T
  set: (newValue: T) => void
  onChange: (listener: ReactiveValueListener<T>) => void
}

/**
 * Creates a reactive value that notifies subscribers when its value has
 * changed.
 */
export function createValue<T>(initialValue: T): ReactiveValue<T> {
  const target = new EventTarget()
  let value = initialValue

  return {
    get value() {
      return value
    },

    set(newValue) {
      value = newValue
      const changeEvent = new CustomEvent('change', {
        detail: newValue,
      })
      target.dispatchEvent(changeEvent)
    },

    onChange(listener) {
      target.addEventListener('change', (event) => {
        const customEvent = event as CustomEvent<T>
        listener(customEvent.detail)
      })
      listener(value)
    },
  }
}
