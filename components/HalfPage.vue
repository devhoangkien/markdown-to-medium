<template>
  <section class="halfpage" :style="{ background: background }">
    <div class="halfpage__header">
      <span class="halfpage__label">{{ header }}</span>
      <span v-if="subheader" class="halfpage__subheader">{{ subheader }}</span>
    </div>
    <div class="halfpage__content">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  header: string
  subheader?: string
  background?: string
}>()
</script>

<style scoped>
.halfpage {
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 50%;
  min-width: 0;
  overflow: hidden;
  position: relative;
}

.halfpage + .halfpage {
  border-left: 1px solid var(--color-border);
}

.halfpage__header {
  padding: 12px 20px;
  display: flex;
  align-items: baseline;
  gap: 8px;
  border-bottom: 1px solid var(--color-border);
  flex-shrink: 0;
  background: var(--color-surface);
}

.halfpage__label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: var(--color-text-muted);
}

.halfpage__subheader {
  font-size: 11px;
  color: var(--color-text-muted);
  opacity: 0.6;
}

.halfpage__content {
  flex: 1;
  display: flex;
  overflow: hidden;
  position: relative;
}
</style>
