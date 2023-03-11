import { definePersistentSetting } from '@/sys/definePersistentSetting'
import { getWordCount } from '@/sys/getWordCount'
import { computed } from 'vue'

export const { state: editorATextState } = definePersistentSetting({
  storageKey: 'editor-text.a',
  defaultValue: '',
})

export const { state: editorBTextState } = definePersistentSetting({
  storageKey: 'editor-text.b',
  defaultValue: '',
})

export const editorATextLengthState = computed(() => {
  return editorATextState.value.length
})

export const editorBTextLengthState = computed(() => {
  return editorBTextState.value.length
})

export const editorAWordCountState = computed(() => {
  return getWordCount(editorATextState.value)
})

export const editorBWordCountState = computed(() => {
  return getWordCount(editorBTextState.value)
})
