<template>
  <section class="index" v-touch:swipe.left="swipeLeft">
    <ul class="index__list">
      <li
        oncontextmenu="return false;"
        class="index__list-item"
        v-on:click="goToPage(key)"
        v-on:mousedown="deletePage(key)"
        v-on:mouseup="stop"
        v-on:touchdown="deletePage"
        v-for="(value, key) in getPages"
        v-bind:key="key"
        >
        <span class="index__list-item__key">{{ key }} {{ value.type}}</span>
        <span class="index__list-item__value">{{ value.header }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
import anime from 'animejs';
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
    if (Object.keys(this.getPages).length === 0) {
      this.$router.push('/add-new');
    }
  },
  methods: {
    goToPage(value) {
      this.$router.push(`/pages/${value}`);
    },
    swipeLeft() {
      anime({
        targets: '.index',
        translateX: -80,
        opacity: 0,
        duration: 300,
        complete: () => {
          this.$router.push('/pages/1');
        },
      });
    },
    deletePage(key) {
      this.delay = setTimeout(() => {
        this.$store.dispatch('deletePage', key);
      }, 1000);
    },
    stop() {
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
  animation-name: fadeinfromleft;
  animation-duration: 0.2s;

  &__list {
    padding: 0;
    width: 70%;

    &-item {
      border-left: solid;
      border-width: 2px;
      text-align: center;
      list-style-type: none;
      margin: 12px;
      padding: 4px;
      display: flex;
      justify-content: space-between;

      &--deleting {
        background-color: #ff7f7f !important;
      }

      &:hover, active {
        cursor: pointer;
        background: #f1f1f1;
      }
    }
  }
}
</style>
