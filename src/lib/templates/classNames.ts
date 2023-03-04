export function classNames(...classNames: string[]): string[] {
  return classNames.flatMap((item) => item.split(' '))
}
