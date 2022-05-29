<script setup>
const { path } = useRoute();

const { data } = await useAsyncData('music', () => queryContent('/music').where({_path: path}).findOne());
const score = data.value.score;
</script>

<template>
  <div class="page-music">
    <score-chord :score="score" />
  </div>
</template>
