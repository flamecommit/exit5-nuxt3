<script setup>
const props = defineProps({
  music: {
    type: Object,
    default: {}
  }
});

const chord = useState('chord', () => null);
const isPopupChord = useState('isPopupChord', () => false);

const openPopupChord = async (name) => {
  const result = await queryContent('/chord').where({name: name}).findOne();
  console.log(result);
  chord.value = result;
  isPopupChord.value = true;
  return;
}
</script>

<template>
  <div class="score-chord" :style="`grid-template-columns: repeat(${music.measure}, 1fr);`">
    <div class="section" v-for="(section, index) in music.score" :key="index">
      <div class="chord">
        <button 
          type="button"
          class="chord-item" 
          v-for="(item, index) in section.chord" 
          :key="index" 
          :style="`--grow: ${item.grow ? item.grow : 1}`"
          @click="openPopupChord(item.name)"
        >{{ item.name }}</button>
      </div>
      <div class="lyrics">{{ section.lyrics }}</div>
    </div>
    <popup-chord
      v-model:isPopupChord="isPopupChord"
      :chord="chord"
    />
  </div>
</template>

<style lang="scss" scoped>
.score-chord {
  display: grid;
  row-gap: 20px;

  .section {
    display: grid;
    row-gap: 5px;

    .chord {
      display: flex;

      .chord-item {
        flex-grow: var(--grow);
        flex-basis: 100%;
        font-size: 16px;
        text-align: left;
        padding: 0 5px;

        &:hover {
          background: #f7f7f7;
        }
      }
    }
    .lyrics {
      font-size: 16px;
    }
  }
}
</style>