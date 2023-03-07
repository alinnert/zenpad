import {
  createValue,
  ReactiveValue,
} from '../../lib/reactiveValues/createValue.js'

export type FontFamily = 'Inter' | 'Cursive' | 'OpenDyslexic'

export type ThemePalette =
  | 'red'
  | 'orange'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'teal'
  | 'cyan'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink'

export type ThemeBrightness = 'light' | 'medium' | 'dark'

export type ThemePattern = 'none' | 'dots'

export type TextEditorPosition =
  | 'default'
  | 'focus-left'
  | 'only-left'
  | 'focus-right'
  | 'only-right'

type State<T> = {
  value: ReactiveValue<T>
  storageKey: string
}
  
export const states: State[] = [
  {
    value: createValue<FontFamily>('Inter'),
    storageKey: 'font-family',
  },
  {
    value: createValue(16),
    storageKey: 'font-size',
  },
  {
    value: createValue(1.6),
    storageKey: 'line-height',
  },
  {
    value: createValue<ThemePalette>('blue'),
    storageKey: 'light-theme-palette',
  },
  {
    value: createValue<ThemeBrightness>('light'),
    storageKey: 'light-theme-brightness',
  },
  {
    value: createValue<ThemePattern>('none'),
    storageKey: 'light-theme-pattern',
  },
  {
    value: createValue<ThemePalette>('blue'),
    storageKey: 'dark-theme-palette',
  },
  {
    value: createValue<ThemeBrightness>('dark'),
    storageKey: 'dark-theme-brightness',
  },
  {
    value: createValue<ThemePattern>('none'),
    storageKey: 'dark-theme-pattern',
  },
  {
    value: createValue<TextEditorPosition>('default'),
    storageKey: 'text-editor-position',
  },
]
