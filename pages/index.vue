<template>
  <div class="home-page">
    <HalfPage header="Markdown">
      <MarkdownInput />
    </HalfPage>
    <HalfPage header="Preview" subheader="copy and paste to Medium">
      <MediumPreview />
    </HalfPage>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Markdown to Medium – Convert Markdown for Medium Publishing'
})
</script>

<style scoped>
.home-page {
  display: flex;
  flex: 1;
  width: 100%;
  overflow: hidden;
}

@media (max-width: 768px) {
  .home-page {
    flex-direction: column;
  }

  .home-page :deep(.halfpage) {
    width: 100%;
    height: 50%;
  }
}
</style>
