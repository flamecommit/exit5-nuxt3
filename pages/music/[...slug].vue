<script setup>
const { path, query, params } = useRoute();

const state = reactive({
  singer: null,
  score: null,
});

/*const { data: music } = await useAsyncData('music', async () => queryContent('/music').where({_path: path}).findOne());

console.log(music);*/

// console.log(music.value.singer);

const { data: music } = await useFetch(() => queryContent('/music').where({_path: path}).findOne());

/*defineExpose({
  ...toRefs(state),
})*/
</script>

<template>
  <div class="page-music">
    {{ music }}
    <!-- <p>가수 : {{ music.singer }}</p>
    <score-chord :score="music.score" /> -->
  </div>
</template>
