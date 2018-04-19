<template>
  <section class="index" v-touch:swipe.left="swipeHandler">
    <ul class="index__list">
      <li
        class="index__list-item"
        v-on:click="goToPage(key)"
        v-for="(value, key) in getPages"
        v-bind:key="key"
      >{{ key }}</li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'getPages',
    ]),
  },
  mounted() {
    if (Object.keys(this.getPages).length === 0) {
      this.$router.push('/add-new');
    }
  },
  methods: {
    goToPage(value) {
      this.$router.push(`/pages/${value}`);
    },
    swipeHandler() {
      this.$router.push('/pages/1');
    },
  },
};
</script>

<style lang="scss">
.index {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &__list {
    padding: 0;

    &-item {
      width: 100px;
      border-left: solid;
      border-width: 2px;
      text-align: center;
      list-style-type: none;
      margin: 12px;
      padding: 4px;
    }
  }
}
</style>
