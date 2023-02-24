import { classNames } from '../../lib/basics/classNames'

export class TabLabel extends HTMLElement {
  connectedCallback() {
    this.classList.add(
      ...classNames([
        'block px-4 py-1.5 rounded',
        'hover:bg-gray-200',
        'is-active:bg-sky-700 is-active:text-white',
      ]),
    )
  }
}
