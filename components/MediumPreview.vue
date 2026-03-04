<template>
  <div class="preview-wrapper">
    <div
      id="medium-preview"
      class="medium-preview"
      ref="previewRef"
      v-html="htmlOutput"
    ></div>
    <button
      v-if="content"
      class="copy-btn"
      :class="{ 'copy-btn--success': copied }"
      @click="copyToClipboard"
      :title="copied ? 'Copied!' : 'Copy for Medium'"
    >
      <svg v-if="!copied" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </svg>
      <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <span>{{ copied ? 'Copied!' : 'Copy' }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
const { content } = useMarkdown()
const { convert } = useConverter()

const htmlOutput = computed(() => convert(content.value))
const previewRef = ref<HTMLDivElement>()
const copied = ref(false)

async function copyToClipboard() {
  if (!previewRef.value) return

  try {
    // Create a ClipboardItem with both HTML and plain text for Medium compatibility
    const html = previewRef.value.innerHTML
    const blob = new Blob([html], { type: 'text/html' })
    const textBlob = new Blob([previewRef.value.innerText], { type: 'text/plain' })
    const item = new ClipboardItem({
      'text/html': blob,
      'text/plain': textBlob
    })
    await navigator.clipboard.write([item])

    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  } catch {
    // Fallback: select the content for manual copy
    const range = document.createRange()
    range.selectNodeContents(previewRef.value)
    const selection = window.getSelection()
    selection?.removeAllRanges()
    selection?.addRange(range)
  }
}
</script>

<style scoped>
.preview-wrapper {
  position: relative;
  flex: 1;
  display: flex;
  overflow: hidden;
}

.copy-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  background: var(--color-surface-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  color: var(--color-text-muted);
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  opacity: 0.8;
  transition:
    opacity var(--transition-fast),
    background var(--transition-fast),
    color var(--transition-fast),
    border-color var(--transition-fast),
    transform var(--transition-fast);
  z-index: 5;
}

.copy-btn:hover {
  opacity: 1;
  background: var(--color-primary);
  color: #fff;
  border-color: var(--color-primary);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.copy-btn--success {
  opacity: 1;
  background: #10b981;
  color: #fff;
  border-color: #10b981;
}

.copy-btn--success:hover {
  background: #10b981;
  border-color: #10b981;
}
</style>
