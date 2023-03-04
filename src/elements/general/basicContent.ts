import { classNames } from '../../lib/templates/classNames.js';

export class BasicContent extends HTMLElement {
  connectedCallback() {
    this.classList.add(...classNames('block', 'px-6 py-4'))
  }
}
