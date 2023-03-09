import { editorModeState } from '@/states/generalSettingsStates'
import { compareEditorModes, editorModes } from '@/sys/editorModes'
import { computed, reactive, type UnwrapNestedRefs } from 'vue'
import type { EditorName } from './TextEditor.vue'

export type UseEditorModeConditionsOptions = { name: EditorName }

export type EditorModeConditions = UnwrapNestedRefs<{
  shouldLeftDock: boolean
  shouldRightDock: boolean
  shouldLeftDockCenter: boolean
  shouldRightDockCenter: boolean
  shouldLeftDockLeftFixed: boolean
  shouldLeftDockRightFixed: boolean
  shouldRightDockLeftFixed: boolean
  shouldRightDockRightFixed: boolean
  shouldHide: boolean
}>

export function useEditorModeConditions({
  name,
}: UseEditorModeConditionsOptions): EditorModeConditions {
  const shouldLeftDock = computed(() => {
    return name === 'a'
      ? compareEditorModes(editorModeState.value, [
          editorModes.neutralAB,
          editorModes.focusedARight,
          editorModes.focusedBLeft,
          editorModes.singleA,
        ])
      : compareEditorModes(editorModeState.value, [
          editorModes.neutralBA,
          editorModes.focusedALeft,
          editorModes.focusedBRight,
          editorModes.singleB,
        ])
  })

  const shouldRightDock = computed(() => {
    return name === 'a'
      ? compareEditorModes(editorModeState.value, [
          editorModes.neutralBA,
          editorModes.focusedALeft,
          editorModes.focusedBRight,
          editorModes.singleA,
        ])
      : compareEditorModes(editorModeState.value, [
          editorModes.neutralAB,
          editorModes.focusedARight,
          editorModes.focusedBLeft,
          editorModes.singleB,
        ])
  })

  const shouldLeftDockCenter = computed(() => {
    return name === 'a'
      ? compareEditorModes(editorModeState.value, [editorModes.neutralBA])
      : compareEditorModes(editorModeState.value, [editorModes.neutralAB])
  })

  const shouldRightDockCenter = computed(() => {
    return name === 'a'
      ? compareEditorModes(editorModeState.value, [editorModes.neutralAB])
      : compareEditorModes(editorModeState.value, [editorModes.neutralBA])
  })

  const shouldLeftDockLeftFixed = computed(() => {
    return name === 'a'
      ? compareEditorModes(editorModeState.value, [editorModes.focusedALeft])
      : compareEditorModes(editorModeState.value, [editorModes.focusedBLeft])
  })

  const shouldRightDockRightFixed = computed(() => {
    return name === 'a'
      ? compareEditorModes(editorModeState.value, [editorModes.focusedARight])
      : compareEditorModes(editorModeState.value, [editorModes.focusedBRight])
  })

  const shouldLeftDockRightFixed = computed(() => {
    return name === 'a'
      ? compareEditorModes(editorModeState.value, [editorModes.focusedBRight])
      : compareEditorModes(editorModeState.value, [editorModes.focusedARight])
  })

  const shouldRightDockLeftFixed = computed(() => {
    return name === 'a'
      ? compareEditorModes(editorModeState.value, [editorModes.focusedBLeft])
      : compareEditorModes(editorModeState.value, [editorModes.focusedALeft])
  })

  const shouldHide = computed(() => {
    return name === 'a'
      ? compareEditorModes(editorModeState.value, [editorModes.singleB])
      : compareEditorModes(editorModeState.value, [editorModes.singleA])
  })

  return reactive({
    shouldLeftDock,
    shouldRightDock,
    shouldLeftDockCenter,
    shouldRightDockCenter,
    shouldLeftDockLeftFixed,
    shouldLeftDockRightFixed,
    shouldRightDockLeftFixed,
    shouldRightDockRightFixed,
    shouldHide,
  })
}
