import { definePersistentSetting } from './definePersistentSetting'

export const { state: fontSizeState, setValue: setFontSize } =
  definePersistentSetting({ storageKey: 'font-size', defaultValue: 16 })

export const { state: lineHeightState, setValue: setLineHeight } =
  definePersistentSetting({ storageKey: 'line-height', defaultValue: 1.6 })

export const { state: showClockState, setValue: setShowClock } =
  definePersistentSetting({ storageKey: 'show-clock', defaultValue: true })
