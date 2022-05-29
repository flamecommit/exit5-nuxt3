<script setup>
const props = defineProps({
  score: {
    type: Array,
    default: []
  }
});
</script>

<template>
  <div class="score-chord">
    <div class="section" v-for="(section, index) in score" :key="index">
      <div class="chord">{{ section.chord }}</div>
      <div class="lyrics">{{ section.lyrics }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.score-chord {
  .section {

  }
}
</style>