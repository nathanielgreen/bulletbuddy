<template>
  <section class="index" v-touch:swipe.left="swipeLeft">
    <ul class="index__list">
      <li
        oncontextmenu="return false;"
        class="index__list-item"
        v-for="(page, index) in getPages"
        v-bind:key="index"
        v-on:click="goToPage(index)"
        v-on:mousedown="deletePage(index)"
        v-on:mouseup="stopDeletePage"
        v-on:touchstart="deletePage(index)"
        v-on:touchend="stopDeletePage"
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
  data() {
    return {
      delay: '',
    };
  },
  computed: {
    ...mapGetters([
      'getPages',
    ]),
  },
  mounted() {
    if (this.getPages.length === 0) {
      this.$router.push('/add-new');
    }
  },
  methods: {
    goToPage(index) {
      this.$router.push(`/pages/${index + 1}`);
    },
    swipeLeft() {
      this.$router.push('/pages/1');
    },
    deletePage(index) {
      this.delay = setTimeout(() => {
        this.$store.commit('DELETE_PAGE', index);
      }, 1000);
    },
    stopDeletePage() {
      clearTimeout(this.delay);
    },
  },
};
</script>

<style lang="scss">
@import '~/assets/global.scss';

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
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      &:hover, active {
        cursor: pointer;
        background: #f1f1f1;
      }
    }
  }
}
</style>
