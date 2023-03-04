export function toggleBooleanAttribute(
  elements: Element | Element[] | HTMLCollectionOf<Element>,
  attributeName: string,
  condition: (element: Element) => boolean,
): void {
  const elementList =
    elements instanceof EventTarget ? [elements] : Array.from(elements)

  elementList.forEach((element) => {
    if (condition(element)) {
      element.setAttribute(attributeName, '')
    } else {
      element.removeAttribute(attributeName)
    }
  })
}
