import { ref } from 'vue'

export const sidebarOpenState = ref(false)

export function toggleSidebar(state?: boolean): void {
  sidebarOpenState.value = state ?? !sidebarOpenState.value
}

export const showClockState = ref(true)

export function toggleClock(state?: boolean): void {
  showClockState.value = state ?? !showClockState.value
}
