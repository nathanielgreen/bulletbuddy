<template>
  <section class="index" v-touch:swipe.left="swipeLeft">
    <h1 class="index__header" v-if="pages.length < 1">No pages yet.</h1>
    <ul class="index__list" v-else>
      <li
        oncontextmenu="return false;"
        class="index__list-item"
        v-for="(page, index) in pages"
        v-bind:key="index"
        v-on:click="goToPage(index)"
      >
        <span class="index__list-item__key">{{ index + 1}} {{ page.type}}</span>
        <span class="index__list-item__value">{{ page.header }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      pages: 'getPages',
    }),
  },
  methods: {
    goToPage(index) {
      this.$router.push(`/pages/${index + 1}`);
    },
    swipeLeft() {
      this.$router.push('/pages/1');
    },
  },
};
</script>

<style lang="scss">
@import '~/assets/global.scss';
@import '~/assets/variables.scss';

.index {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;

  &__list {
    padding: 0;
    width: 70%;
    height: 100%;

    &-item {
      border-left: solid;
      border-width: 2px;
      text-align: center;
      list-style-type: none;
      margin: 12px;
      padding: 4px;
      display: flex;
      justify-content: space-between;
      user-select: none;

      &:hover, active {
        cursor: pointer;
        background: $color-darker-white;
      }
    }
  }
}
</style>
