<script setup>
const { path } = useRoute();

const { data: music } = await useAsyncData(
  'music',
  () => queryContent('/music').where({_path: path}).findOne()
);

refreshNuxtData('music');
</script>

<template>
  <div class="page-music-detail">
    <h1>{{ music.title }}</h1>
    <score-chord :music="music" />
  </div>
</template>

<style lang="scss" scoped>
.page-music-detail {
  padding: 50px;

  h1 {
    font-size: 20px;
  }
}
</style>
