export type EditorMode =
  | { mode: 'neutral'; order: 'ab' | 'ba' }
  | { mode: 'focused'; primary: 'a' | 'b'; secondary: 'left' | 'right' }
  | { mode: 'single'; show: 'a' | 'b' }

export const editorModes = {
  neutralAB: { mode: 'neutral', order: 'ab' },
  neutralBA: { mode: 'neutral', order: 'ba' },
  focusedALeft: { mode: 'focused', primary: 'a', secondary: 'left' },
  focusedARight: { mode: 'focused', primary: 'a', secondary: 'right' },
  focusedBLeft: { mode: 'focused', primary: 'b', secondary: 'left' },
  focusedBRight: { mode: 'focused', primary: 'b', secondary: 'right' },
  singleA: { mode: 'single', show: 'a' },
  singleB: { mode: 'single', show: 'b' },
} satisfies Record<string, EditorMode>

export function stringifyEditorMode(editorMode: EditorMode): string {
  if (editorMode.mode === 'neutral') {
    return `${editorMode.mode} ${editorMode.order}`
  }
  if (editorMode.mode === 'focused') {
    return `${editorMode.mode} ${editorMode.primary} ${editorMode.secondary}`
  }
  if (editorMode.mode === 'single') {
    return `${editorMode.mode} ${editorMode.show}`
  }
  return 'invalid editor mode'
}

export function compareEditorModes(
  needle: EditorMode,
  collection: EditorMode[],
): boolean {
  return collection.some((editorMode) => {
    return stringifyEditorMode(editorMode) === stringifyEditorMode(needle)
  })
}
