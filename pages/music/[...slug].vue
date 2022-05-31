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
    <h1>{{ music.singer }} - {{ music.title }}</h1>
    <score-chord :music="music" />
  </div>
</template>

<style lang="scss" scoped>
.page-music-detail {
  padding: 50px 20px;

  h1 {
    margin-bottom: 30px;
    font-size: 20px;
  }
}
</style>
