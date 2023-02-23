export class AppSidebar extends HTMLElement {
  connectedCallback() {
    const appSidebarClasses =
      'fixed top-0 left-0 bottom-0 w-[30rem] bg-white shadow-xl'
    this.classList.add(...appSidebarClasses.split(' '))
  }
}
