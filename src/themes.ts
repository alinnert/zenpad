import { writable } from 'svelte/store'

export type Theme = 'white' | 'slate' | 'blue' | 'green'

export const themeStore = writable<Theme>('white')
