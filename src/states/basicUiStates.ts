import { ref } from 'vue'

export const sidebarOpenState = ref(false)
export function toggleSidebar(state?: boolean): void {
  sidebarOpenState.value = state ?? !sidebarOpenState.value
}

export const currentThemeTabState = ref(0)
export function setCurrentThemeTab(tab = 0): void {
  currentThemeTabState.value = tab
}
