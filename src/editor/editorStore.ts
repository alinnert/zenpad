import { derived, writable } from 'svelte/store'
import { LocalStorageKey } from '../localStorage/localStorage'

export const leftEditorStore = writable(
  localStorage.getItem(LocalStorageKey.leftText),
)
export const rightEditorStore = writable(
  localStorage.getItem(LocalStorageKey.rightText),
)

leftEditorStore.subscribe((value) => {
  localStorage.setItem(LocalStorageKey.leftText, value)
})
rightEditorStore.subscribe((value) => {
  localStorage.setItem(LocalStorageKey.rightText, value)
})
