import type { EditorMode } from '@/sys/editorModes'
import { definePersistentSetting } from '../sys/definePersistentSetting'

export const { state: fontSizeState } = definePersistentSetting({
  storageKey: 'font-size',
  defaultValue: 16,
})

export const { state: lineHeightState } = definePersistentSetting({
  storageKey: 'line-height',
  defaultValue: 1.6,
})

export const { state: showClockState } = definePersistentSetting({
  storageKey: 'show-clock',
  defaultValue: true,
})

export const { state: editorModeState } = definePersistentSetting<EditorMode>({
  storageKey: 'editor-mode',
  defaultValue: { mode: 'neutral', order: 'ab' },
})
