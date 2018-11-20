<template>
  <div class="add-new">
    <button class="add-new__button" v-on:click="addNewDailyLog">
      New Daily Log
    </button>
    <button class="add-new__button" v-on:click="addNewMonthlyLog">
      New Monthly Log
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AddNew',
  computed: {
    ...mapGetters({
      pages: 'getPages',
    }),
  },
  methods: {
    ...mapActions([
      'addNewPage',
    ]),
    async addNewDailyLog() {
      await this.addNewPage('DL');
      this.$router.push(`/pages/${this.pages.length}`);
    },
    async addNewMonthlyLog() {
      await this.addNewPage('ML');
      this.$router.push(`/pages/${this.pages.length}`);
    },
  },
};
</script>

<style lang="scss">
@import '../assets/scss/variables.scss';

.add-new {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  &__button {
    background: none;
    padding: 8px;
    margin: 8px;
    border: solid;
    border-color: $color-black;
    border-width: 2px;
    border-radius: 4px;
    width: 50%;
  }
}
</style>
