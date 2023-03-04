export function debounce<This, Params extends unknown[]>(
  callback: (...args: Params) => void,
  time = 0,
): (this: This, ...args: Params) => void {
  let timeoutID: number

  return function (this: This, ...args: Params): void {
    clearTimeout(timeoutID)
    timeoutID = setTimeout(() => callback.apply(this, args), time)
  }
}
