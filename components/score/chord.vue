<script setup>
const props = defineProps({
  music: {
    type: Object,
    default: {}
  }
});

const a = 1;
const b = ref(1);
</script>

<template>
  <div class="score-chord" :style="`grid-template-columns: repeat(${8}, 1fr);`">
    <div class="section" v-for="(section, index) in music.score" :key="index">
      <div class="chord">
        <div class="chord-item" v-for="(item, index) in section.chord" :key="index">
          {{ item }}
        </div>
      </div>
      <div class="lyrics">{{ section.lyrics }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.score-chord {
  display: grid;
  

  .section {
    .chord {
      display: flex;

      .chord-item {
        flex-grow: 1;
      }
    }
  }
}
</style>