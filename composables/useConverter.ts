import { marked } from 'marked'

// Configure marked options
marked.setOptions({
  gfm: true,
  breaks: false,
})

export function useConverter() {
  const convert = (markdown: string): string => {
    if (!markdown) return ''
    let html = marked.parse(markdown) as string

    // Unwrap <p> inside <blockquote> to avoid extra line break in Medium
    html = html.replace(/<blockquote>\s*<p>([\s\S]*?)<\/p>\s*<\/blockquote>/gi, '<blockquote>$1</blockquote>')

    return html
  }

  return { convert }
}
