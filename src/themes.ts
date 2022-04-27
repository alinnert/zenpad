import { writable } from 'svelte/store'

export type Theme = 'white' | 'beige' | 'blue' | 'green'

export const themeStore = writable<Theme>('white')
