import { AnyReactiveValue, ReactiveValueListener } from './types'

type ReactiveSources<Sources extends unknown[]> = {
  [K in keyof Sources]: AnyReactiveValue<Sources, K>
}

export type ComputedValue<Result> = {
  readonly value: Result
  onChange: (listener: ReactiveValueListener<Result>) => void
}

/**
 * Creates a reactive computed value that notifies subscribers when its value
 * has changed.
 */
export function createComputedValue<Sources extends unknown[], Result>(
  sources: [...ReactiveSources<Sources>],
  callback: (sources: [...Sources]) => Result,
): ComputedValue<Result> {
  const getValues = () => sources.map((source) => source.value) as Sources
  const target = new EventTarget()
  let value = callback(getValues())

  for (const source of sources) {
    source.onChange(() => {
      const newValue = callback(getValues())
      value = newValue
      const changeEvent = new CustomEvent('change', {
        detail: newValue,
      })
      target.dispatchEvent(changeEvent)
    })
  }

  return {
    get value() {
      return value
    },

    onChange(listener) {
      target.addEventListener('change', (event) => {
        const customEvent = event as CustomEvent<Result>
        listener(customEvent.detail)
      })
      listener(value)
    },
  }
}