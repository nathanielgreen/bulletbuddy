<template>
  <div class="add-new">
    <PageInfo
      pageHeader="Add New Page"
    ></PageInfo>
    <div class="add-new__header">
      <h1 class="add-new__header-title">Classic Pages</h1>
      <p class="add-new__header-label">
        The page types from the original Bullet Journal system created by Ryder Carroll.
      </p>
    </div>
    <button class="add-new__button" v-on:click="addNewDailyLog">
      New Daily Log
    </button>
    <button class="add-new__button" v-on:click="addNewMonthlyLog">
      New Monthly Log
    </button>
    <button class="add-new__button" v-on:click="addNewFutureLog">
      New Future Log
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PageInfo from '../components/PageInfo.vue';

export default {
  name: 'AddNew',
  components: {
    PageInfo,
  },
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
    async addNewFutureLog() {
      await this.addNewPage('FL');
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

  &__header {
    padding: 20px;
    &-title {
      font-size: 18px;
      color: $color-lighter-black;
    }
    &-label {
      font-size: 12px;
      color: #676767;
    }
  }

  &__button {
    background: none;
    cursor: pointer;
    padding: 8px;
    margin: 8px;
    border: solid;
    border-color: $color-black;
    border-width: 2px;
    border-radius: 4px;
    width: 50%;

    &--disabled {
      color: $color-grey;
      border-color: $color-grey;
      cursor: auto;
    }
  }
}
</style>
