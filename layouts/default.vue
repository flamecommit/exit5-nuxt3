<script setup>
const route = useRoute()

useHead({
  meta: [
    { name: 'og:title', content: `App Name - ${route.meta.title}` },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ],
})
</script>

<template>
  <div class="layout-default">
    <the-header />
    <slot />
  </div>
</template>
