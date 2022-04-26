import { writable } from 'svelte/store'

export type MenuItem = { id: string; label: string }

export const menuItems: MenuItem[] = [
  { id: 'data', label: 'Data' },
  { id: 'font', label: 'Font' },
  { id: 'layout', label: 'Layout' },
  { id: 'background', label: 'Background' },
  { id: 'about', label: 'About' },
]

export const menuStateStore = writable<MenuItem['id'] | null>(null)
