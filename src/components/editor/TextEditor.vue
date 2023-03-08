<script setup lang="ts">
import { editorModeState } from '@/states/generalSettingsStates'
import { compareEditorModes, editorModes } from '@/sys/editorModes'
import { insertTab } from '@codemirror/commands'
import { EditorView, keymap } from '@codemirror/view'
import { computed, onMounted, ref } from 'vue'
import UiButton from '../ui/UiButton.vue'

const props = defineProps<{ name: 'a' | 'b' }>()

const editor = ref<HTMLDivElement | null>(null)

onMounted(() => {
  if (editor.value === null) return

  new EditorView({
    doc: '',
    extensions: [
      keymap.of([{ key: 'Tab', run: insertTab }]),
      EditorView.updateListener.of((update) => {
        if (!update.docChanged) return
        console.log(
          `saving ${props.name} editor, text: ${String(update.state.doc)}`,
        )
      }),
    ],
    parent: editor.value,
  })
})

const shouldDockLeft = computed(() => {
  return props.name === 'a'
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

const shouldDockRight = computed(() => {
  return props.name === 'a'
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

const shouldDockLeftHalf = computed(() => {
  return props.name === 'a'
    ? compareEditorModes(editorModeState.value, [editorModes.neutralBA])
    : compareEditorModes(editorModeState.value, [editorModes.neutralAB])
})

const shouldDockRightHalf = computed(() => {
  return props.name === 'a'
    ? compareEditorModes(editorModeState.value, [editorModes.neutralAB])
    : compareEditorModes(editorModeState.value, [editorModes.neutralBA])
})

function swap(): void {
  editorModeState.value =
    editorModeState.value.mode === 'neutral' &&
    editorModeState.value.order === 'ab'
      ? editorModes.neutralBA
      : editorModes.neutralAB
}
</script>

<template>
  <div
    class="p-2 grid grid-rows-[auto,1fr,auto] absolute top-0 bottom-0 transition-[left,right] duration-300"
    :class="{
      'bg-teal-700/30': name === 'a',
      'bg-rose-700/30': name === 'b',
      'left-0': shouldDockLeft,
      'right-0': shouldDockRight,
      'left-1/2': shouldDockLeftHalf,
      'right-1/2': shouldDockRightHalf,
    }"
  >
    <div>
      <span>Header</span>
      <UiButton @click="swap">Swap</UiButton>
    </div>
    <div class="grid" ref="editor"></div>
    <div>Footer</div>
  </div>
</template>
