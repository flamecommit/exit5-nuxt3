<script setup>
const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation()
});
</script>

<template>
  <div class="page-music-list">
    <ul>
      <li v-for="(music, index) in navigation.find(d => d.title === 'Music').children" :key="index">
        <nuxt-link :to="music._path">{{ music.singer }} - {{ music.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.page-music-list {
  li {
    a {
      display: block;
      padding: 15px;

      &:hover {
        background: #f7f7f7;
      }
    }
  }
}
</style>