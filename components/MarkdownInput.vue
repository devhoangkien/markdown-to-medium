<template>
  <textarea
    id="markdown-input"
    class="markdown-input"
    :value="content"
    placeholder="Paste your markdown here..."
    spellcheck="false"
    @input="onInput"
  ></textarea>
</template>

<script setup lang="ts">
const { content, setContent } = useMarkdown()

function onInput(e: Event) {
  const target = e.target as HTMLTextAreaElement
  setContent(target.value)
}
</script>

<style scoped>
.markdown-input {
  flex: 1;
  width: 100%;
  padding: 20px 24px;
  border: none;
  outline: none;
  resize: none;
  font-family: var(--font-mono);
  font-size: 14px;
  line-height: 1.7;
  color: var(--color-text);
  background: var(--color-bg);
  caret-color: var(--color-primary-light);
  tab-size: 2;
}

.markdown-input::placeholder {
  color: var(--color-text-muted);
  opacity: 0.5;
}

.markdown-input:focus {
  background: rgba(15, 15, 26, 0.95);
}
</style>
