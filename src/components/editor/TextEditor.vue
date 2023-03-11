<script setup lang="ts">
import { editorATextState, editorBTextState } from '@/states/editorStates'
import { editorModeState } from '@/states/generalSettingsStates'
import { provide } from 'vue'
import UiButton from '../ui/UiButton.vue'
import UiButtonGroup from '../ui/UiButtonGroup.vue'
import { useCodeMirror } from './codeMirror'
import { useEditorModeActions } from './editorModeActions'
import { useEditorModeConditions } from './editorModeConditions'
import WordCounter from './WordCounter.vue'

export type EditorName = 'a' | 'b'

const props = defineProps<{ name: EditorName }>()
provide('editor-name', props.name)

const editorTextState = props.name === 'a' ? editorATextState : editorBTextState

const editor = useCodeMirror({ name: props.name, textState: editorTextState })
const conditions = useEditorModeConditions({ name: props.name })
const modeActions = useEditorModeActions({ name: props.name })
</script>

<template>
  <div
    class="p-2 grid grid-rows-[auto,1fr,auto] absolute top-0 bottom-0 transition-[left,right] duration-300"
    :class="{
      'bg-teal-700/30': name === 'a',
      'bg-rose-700/30': name === 'b',
      'left-0': conditions.shouldLeftDock,
      'right-0': conditions.shouldRightDock,
      'left-1/2': conditions.shouldLeftDockCenter,
      'right-1/2': conditions.shouldRightDockCenter,
      'left-96': conditions.shouldLeftDockLeftFixed,
      'right-96': conditions.shouldRightDockRightFixed,
      'left-[calc(100%-theme(spacing.96))]':
        conditions.shouldLeftDockRightFixed,
      'right-[calc(100%-theme(spacing.96))]':
        conditions.shouldRightDockLeftFixed,
      hidden: conditions.shouldHide,
    }"
  >
    <div>
      <span>Header {{ name }}</span>
      <UiButtonGroup>
        <UiButton
          @click="modeActions.swap"
          v-if="editorModeState.mode !== 'focused'"
        >
          []&lt;-&gt;[]
        </UiButton>
        <UiButton
          @click="modeActions.focus"
          v-if="
            editorModeState.mode !== 'focused' ||
            (editorModeState.mode === 'focused' &&
              editorModeState.primary !== name)
          "
        >
          <template v-if="name === 'a'">[-][]</template>
          <template v-else>[][-]</template>
        </UiButton>
        <UiButton
          @click="modeActions.unfocus"
          v-if="editorModeState.mode === 'focused'"
        >
          [][]
        </UiButton>
        <UiButton
          @click="modeActions.maximize"
          v-if="editorModeState.mode !== 'single'"
        >
          [---]
        </UiButton>
        <UiButton
          @click="modeActions.restore"
          v-if="editorModeState.mode === 'single'"
        >
          [][]
        </UiButton>
        <UiButton
          @click="modeActions.switchSide"
          v-if="editorModeState.mode === 'focused'"
        >
          &lt;-&gt;
        </UiButton>
      </UiButtonGroup>
    </div>
    <div class="grid" ref="editor"></div>
    <WordCounter></WordCounter>
  </div>
</template>
