export type ParsedTemplateOk = {
  node: DocumentFragment
  slots: Record<string, Element[]>
  forEachSlot: (slotName: string, callback: (slot: Element) => void) => void
  ok: true
}

export type ParsedTemplateError = {
  ok: false
  error: string
}

export type ParsedTemplate = ParsedTemplateOk | ParsedTemplateError

export function parseTemplate(templateId: string): ParsedTemplate {
  const template = document.getElementById(templateId)
  if (template === null) {
    return { ok: false, error: 'template element not found' }
  }
  if (!(template instanceof HTMLTemplateElement)) {
    return { ok: false, error: 'template element not a template element' }
  }

  const node = template.content.cloneNode(true)
  if (!(node instanceof DocumentFragment)) {
    return { ok: false, error: 'cloned template content is not an element' }
  }
  const slots: ParsedTemplateOk['slots'] = {}
  const allSlotElements = Array.from(node.querySelectorAll('[data-slot]'))

  for (const slotElement of allSlotElements) {
    const slotName = slotElement.getAttribute('data-slot')
    if (slotName === null) continue
    if (!Array.isArray(slots[slotName])) {
      slots[slotName] = []
    }
    slots[slotName].push(slotElement)
  }

  return {
    ok: true,
    node,
    slots,
    forEachSlot(slotName, callback) {
      for (const slot of slots[slotName]) {
        callback(slot)
      }
    },
  }
}
