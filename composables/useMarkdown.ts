export function useMarkdown() {
  const content = useState<string>('markdown-content', () => '')

  const setContent = (value: string) => {
    content.value = value
  }

  return {
    content,
    setContent
  }
}
