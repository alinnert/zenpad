<script setup lang="ts">
import { editorModeState } from '@/states/generalSettingsStates'
import UiButton from '../ui/UiButton.vue'
import { useCodeMirror } from './codeMirror'
import { useEditorModeActions } from './editorModeActions'
import { useEditorModeConditions } from './editorModeConditions'

export type EditorName = 'a' | 'b'

const props = defineProps<{ name: EditorName }>()

const editor = useCodeMirror({ name: props.name })
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
      <span>Header</span>
      <UiButton
        @click="modeActions.swap"
        v-if="editorModeState.mode !== 'focused'"
      >
        Swap
      </UiButton>
      <UiButton
        @click="modeActions.focus"
        v-if="
          editorModeState.mode !== 'focused' ||
          (editorModeState.mode === 'focused' &&
            editorModeState.primary !== name)
        "
      >
        Focus
      </UiButton>
      <UiButton
        @click="modeActions.unfocus"
        v-if="editorModeState.mode === 'focused'"
      >
        Unfocus
      </UiButton>
      <UiButton
        @click="modeActions.maximize"
        v-if="editorModeState.mode !== 'single'"
      >
        Maximize
      </UiButton>
      <UiButton
        @click="modeActions.restore"
        v-if="editorModeState.mode === 'single'"
      >
        Restore
      </UiButton>
      <UiButton
        @click="modeActions.switchSide"
        v-if="editorModeState.mode === 'focused'"
      >
        Change side
      </UiButton>
    </div>
    <div class="grid" ref="editor"></div>
    <div>Footer</div>
  </div>
</template>
