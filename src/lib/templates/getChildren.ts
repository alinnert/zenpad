export function getChildren<T extends Element>(
  parent: Element,
  childrenTagName: string,
): T[] {
  return Array.from(parent.children).filter(
    (element): element is T =>
      element.tagName.toLowerCase() === childrenTagName.toLowerCase(),
  ) as T[]
}
