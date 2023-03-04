import { classNames } from '../../lib/templates/classNames.js';

export class ThemeItemList extends HTMLElement {
  constructor() {
    super()

    this.classList.add(...classNames('grid grid-cols-10 gap-2'))
  }
}