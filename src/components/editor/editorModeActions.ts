import { editorModeState } from '@/states/generalSettingsStates'
import {
  editorModes,
  useIsOneOfEditorModes,
  type EditorMode,
} from '@/sys/editorModes'
import type { EditorName } from './TextEditor.vue'

export type UseEditorModeActionsOptions = { name: EditorName }

export type EditorModeActions = {
  swap: () => void
  focus: () => void
  unfocus: () => void
  maximize: () => void
  restore: () => void
  switchSide: () => void
}

export function useEditorModeActions({
  name,
}: UseEditorModeActionsOptions): EditorModeActions {
  const isOneOfEditorModes = useIsOneOfEditorModes(editorModeState)

  function setEditorMode(editorMode: EditorMode): void {
    editorModeState.value = editorMode
  }

  function swap(): void {
    switch (editorModeState.value.mode) {
      case 'neutral':
        setEditorMode(
          editorModeState.value.order === 'ab'
            ? editorModes.neutralBA
            : editorModes.neutralAB,
        )
        break
      case 'single':
        setEditorMode(
          editorModeState.value.show === 'a'
            ? editorModes.singleB
            : editorModes.singleA,
        )
    }
  }

  function focus(): void {
    if (name === 'a') {
      if (isOneOfEditorModes([editorModes.neutralAB])) {
        setEditorMode(editorModes.focusedARight)
      } else if (isOneOfEditorModes([editorModes.neutralBA])) {
        setEditorMode(editorModes.focusedALeft)
      } else if (isOneOfEditorModes([editorModes.focusedBLeft])) {
        setEditorMode(editorModes.focusedARight)
      } else if (isOneOfEditorModes([editorModes.focusedBRight])) {
        setEditorMode(editorModes.focusedALeft)
      }
    } else if (name === 'b') {
      if (isOneOfEditorModes([editorModes.neutralAB])) {
        setEditorMode(editorModes.focusedBLeft)
      } else if (isOneOfEditorModes([editorModes.neutralBA])) {
        setEditorMode(editorModes.focusedBRight)
      } else if (isOneOfEditorModes([editorModes.focusedALeft])) {
        setEditorMode(editorModes.focusedBRight)
      } else if (isOneOfEditorModes([editorModes.focusedARight])) {
        setEditorMode(editorModes.focusedBLeft)
      }
    }
  }

  function unfocus(): void {
    if (editorModeState.value.mode !== 'focused') return

    if (
      isOneOfEditorModes([editorModes.focusedARight, editorModes.focusedBLeft])
    ) {
      setEditorMode(editorModes.neutralAB)
    } else {
      setEditorMode(editorModes.neutralBA)
    }
  }

  function maximize(): void {
    setEditorMode(name === 'a' ? editorModes.singleA : editorModes.singleB)
  }

  function restore(): void {
    setEditorMode(editorModes.neutralAB)
  }

  function switchSide(): void {
    if (editorModeState.value.mode !== 'focused') return

    if (isOneOfEditorModes([editorModes.focusedALeft])) {
      setEditorMode(editorModes.focusedARight)
    } else if (isOneOfEditorModes([editorModes.focusedARight])) {
      setEditorMode(editorModes.focusedALeft)
    } else if (isOneOfEditorModes([editorModes.focusedBLeft])) {
      setEditorMode(editorModes.focusedBRight)
    } else if (isOneOfEditorModes([editorModes.focusedBRight])) {
      setEditorMode(editorModes.focusedBLeft)
    }
  }

  return { swap, focus, unfocus, maximize, restore, switchSide }
}
