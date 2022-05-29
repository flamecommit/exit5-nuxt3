<script setup>
const { path, query } = useRoute();

const { data } = await useAsyncData('music', () => queryContent('/music').where({_path: path}).findOne());

watch(() => path, () => {
  console.log('change path');
  refreshNuxtData('music');
});
const score = data.value.score;

console.log(score, path)
</script>

<template>
  <div class="page-music">
    <score-chord :score="score" />
  </div>
</template>
