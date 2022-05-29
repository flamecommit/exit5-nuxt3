<script setup>
const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation()
});

console.log(navigation);
</script>

<template>
  <div class="page-music-list">
    <ul>
      <li v-for="(music, index) in navigation.find(d => d.title === 'Music').children" :key="index">
        <nuxt-link :to="music._path">{{ music.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
