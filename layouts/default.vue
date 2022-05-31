<script setup>
const route = useRoute()

useHead({
  title: 'Exit5',
  meta: [
    { name: 'og:title', content: `Exit5` },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ],
})
</script>

<template>
  <div class="layout-default">
    <the-header />
    <main class="the-container">
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.layout-default {
  min-width: 1024px;

  .the-container {
    width: 1024px;
    margin: 0 auto;
  }
}
</style>