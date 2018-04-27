<template>
  <div class="delete-all-pages-button">
    <h3 v-if="timer.visible">Deleting ALL Pages in {{ timer.count }}</h3>
    <button
      oncontextmenu="return false;"
      class="delete-all-pages-button__button"
      v-on:mousedown="deleteAllPages"
      v-on:mouseup="clearTimerAndIntervals"
      v-on:touchstart="deleteAllPages"
      v-on:touchend="clearTimerAndIntervals"
    >Delete ALL Pages</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Menu',
  data() {
    return {
      delay: '',
      countdown: '',
      timer: {
        visible: false,
        count: 3,
      },
    };
  },
  methods: {
    ...mapMutations({
      deleteAllPagesMutation: 'DELETE_ALL_PAGES',
    }),
    clearTimerAndIntervals() {
      clearTimeout(this.delay);
      clearInterval(this.countdown);
      this.timer.visible = false;
      this.timer.count = 3;
    },
    deleteAllPages() {
      this.timer.visible = true;
      this.countdown = setInterval(() => {
        this.timer.count -= 1;
      }, 1000);
      this.delay = setTimeout(() => {
        this.clearTimerAndIntervals();
        this.deleteAllPagesMutation();
      }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
.delete-all-pages-button {
  &__button {
    background: none;
    border: solid;
    border-width: 2px;
    border-radius: 4px;
    margin: 8px;
    padding: 8px;
    user-select: none;
    width: 50%;
  }
}
</style>
