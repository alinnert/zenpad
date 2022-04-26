const wordCountRegExp = /['";:,.?¿\-!¡]+/g

export function getWordCount(value: string): number {
  return (value.replace(wordCountRegExp, '').match(/\S+/g) || []).length
}
