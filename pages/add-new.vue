<template>
  <div class="add-new" v-touch:swipe.right="swipeRight">
    <button
      class="add-new__button"
      v-on:click="addNewDailyLog"
    >New Daily Log</button>
    <button
      class="add-new__button"
      v-on:click="addNewMonthlyLog"
    >New Monthly Log</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AddNew',
  computed: {
    ...mapGetters([
      'getPages',
    ]),
  },
  methods: {
    addNewDailyLog() {
      this.$store.dispatch('addNewDailyLog')
        .then(() => {
          this.$router.push(`/pages/${this.getPages.length}`);
        });
    },
    addNewMonthlyLog() {
      this.$store.dispatch('addNewMonthlyLog')
        .then(() => {
          this.$router.push(`/pages/${this.getPages.length}`);
        });
    },
    swipeRight() {
      this.$router.push(`/pages/${this.getPages.length}`);
    },
  },
};
</script>

<style lang="scss">
.add-new {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  &__button {
    background: none;
    padding: 8px;
    margin: 8px;
    border: solid;
    border-width: 2px;
    border-radius: 4px;
    width: 50%;
  }
}
</style>
