import { editorModeState } from '@/states/generalSettingsStates'
import { compareEditorModes, editorModes } from '@/sys/editorModes'
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
  function swap(): void {
    switch (editorModeState.value.mode) {
      case 'neutral':
        editorModeState.value =
          editorModeState.value.order === 'ab'
            ? editorModes.neutralBA
            : editorModes.neutralAB
        break
      case 'single':
        editorModeState.value =
          editorModeState.value.show === 'a'
            ? editorModes.singleB
            : editorModes.singleA
    }
  }

  function focus(): void {
    editorModeState.value =
      name === 'a' ? editorModes.focusedARight : editorModes.focusedBLeft
  }

  function unfocus(): void {
    editorModeState.value = editorModes.neutralAB
  }

  function maximize(): void {
    editorModeState.value =
      name === 'a' ? editorModes.singleA : editorModes.singleB
  }

  function restore(): void {
    editorModeState.value = editorModes.neutralAB
  }

  function switchSide(): void {
    if (editorModeState.value.mode !== 'focused') return

    const currentMode = editorModeState.value

    if (compareEditorModes(currentMode, [editorModes.focusedALeft])) {
      editorModeState.value = editorModes.focusedARight
    } else if (compareEditorModes(currentMode, [editorModes.focusedARight])) {
      editorModeState.value = editorModes.focusedALeft
    } else if (compareEditorModes(currentMode, [editorModes.focusedBLeft])) {
      editorModeState.value = editorModes.focusedBRight
    } else if (compareEditorModes(currentMode, [editorModes.focusedBRight])) {
      editorModeState.value = editorModes.focusedBLeft
    }
  }

  return { swap, focus, unfocus, maximize, restore, switchSide }
}
