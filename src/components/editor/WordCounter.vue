<script setup lang="ts">
import {
  editorATextLengthState,
  editorAWordCountState,
  editorBTextLengthState,
  editorBWordCountState,
} from '@/states/editorStates'
import { inject } from 'vue'
import type { EditorName } from './TextEditor.vue'

const editorName = inject<EditorName>('editor-name')

const editorTextLengthState =
  editorName === 'a' ? editorATextLengthState : editorBTextLengthState

const editorWordCountState =
  editorName === 'a' ? editorAWordCountState : editorBWordCountState
</script>

<template>
  <div class="flex gap-x-4 text-sm">
    <div>
      {{ editorWordCountState }}
      {{ editorWordCountState === 1 ? 'word' : 'words' }}
    </div>
    <div>
      {{ editorTextLengthState }}
      {{ editorTextLengthState === 1 ? 'character' : 'characters' }}
    </div>
  </div>
</template>
