import { classNames } from '../../lib/templates/classNames'

export const tabTypes = ['underline', 'pills'] as const
export type TabType = typeof tabTypes[number]

export class TabLabel extends HTMLElement {
  get #tabType(): TabType | null {
    const tabType = this.getAttribute('type') as TabType
    return tabTypes.includes(tabType) ? tabType : null
  }

  connectedCallback() {
    if (this.#tabType === null) return

    switch (this.#tabType) {
      case 'pills':
        this.classList.add(
          ...classNames(
            'block px-4 py-1.5 rounded',
            'hover:bg-gray-200',
            'is-active:bg-sky-700 is-active:text-white',
          ),
        )
        break
      case 'underline':
        this.classList.add(
          ...classNames(
            'px-4 py-2 -mb-px',
            'is-active:border-b-2',
            'is-active:border-b-sky-700',
          ),
        )
        break
    }
  }
}
