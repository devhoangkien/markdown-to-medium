<template>
  <header class="appbar">
    <div class="appbar__inner">
      <div class="appbar__logo">
        <svg class="appbar__icon" viewBox="0 0 208 128" fill="currentColor">
          <rect x="5" y="5" width="198" height="118" rx="15" ry="15" stroke="currentColor" stroke-width="10" fill="none" />
          <path d="M30 98V30h20l28 40 28-40h20v68h-20V59L82 93 58 59v39H30zm125 0l-30-33h20V30h20v35h20l-30 33z" />
        </svg>
        <h1 class="appbar__title">
          Markdown
          <span class="appbar__title-accent">to</span>
          Medium
        </h1>
      </div>
      <div class="appbar__badge">
        <span class="appbar__badge-dot"></span>
        Nuxt 4
      </div>
    </div>
  </header>
</template>

<style scoped>
.appbar {
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  padding: 0 24px;
  height: 56px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  backdrop-filter: blur(12px);
  position: relative;
  z-index: 10;
}

.appbar::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg,
    transparent,
    var(--color-gradient-start),
    var(--color-gradient-end),
    transparent
  );
  opacity: 0.5;
}

.appbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 100%;
}

.appbar__logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.appbar__icon {
  width: 22px;
  height: 22px;
  color: var(--color-primary-light);
  flex-shrink: 0;
}

.appbar__title {
  font-size: 17px;
  font-weight: 600;
  color: var(--color-text-heading);
  letter-spacing: -0.3px;
}

.appbar__title-accent {
  color: var(--color-text-muted);
  font-weight: 400;
  margin: 0 4px;
  font-size: 14px;
}

.appbar__badge {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 500;
  color: var(--color-accent);
  background: var(--color-accent-glow);
  padding: 4px 10px;
  border-radius: 20px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.appbar__badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-accent);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
}
</style>
