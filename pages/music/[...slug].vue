<script setup>
const { path, params } = useRoute();

const state = reactive({
  singer: null,
  score: null,
});

console.log('path : ', path);
console.log('params : ', params);

const { data: music } = await useAsyncData(
  'music',
  () => {
    console.log('use async data')
    return queryContent('/music').where({_path: path}).findOne();
  }
);

refreshNuxtData('music');

// console.log(music.value.singer);

// const { data: music } = await useFetch(() => queryContent('/music').where({_path: path}).findOne());

/*defineExpose({
  ...toRefs(state),
})*/
</script>

<template>
  <div class="page-music-detail">
    <h1>{{ music.title }}</h1>
    <!-- {{ music }} -->
    <!-- <p>가수 : {{ music.singer }}</p> -->
    <score-chord :score="music.score" />
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
