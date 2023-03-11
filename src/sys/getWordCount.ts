export function getWordCount(text: string): number {
  return (text.replace(/['";:,.?¿\-!¡]+/g, '').match(/\S+/g) || []).length
}
