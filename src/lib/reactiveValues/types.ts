import { AutomatedValue } from './createAutomatedValue'
import { ComputedValue } from './createComputedValue'
import { ReactiveValue } from './createValue'

export type ReactiveValueListener<T> = (newValue: T) => void

export type AnyReactiveValue<
  Sources extends unknown[],
  K extends keyof Sources,
> =
  | ReactiveValue<Sources[K]>
  | ComputedValue<Sources[K]>
  | AutomatedValue<Sources[K]>

export type ReactiveSources<Sources extends unknown[]> = {
  [K in keyof Sources]: AnyReactiveValue<Sources, K>
}
