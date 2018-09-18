<template>
  <section class="index" v-touch:swipe.left="swipeLeft">
    <h1 class="index__header" v-if="pages.length < 1">No pages yet.</h1>
    <ul class="index__list" v-else>
      <li
        oncontextmenu="return false;"
        class="index__list-item"
        v-for="(page, index) in pages"
        v-bind:key="index"
      >
        <span class="index__list-item-key" @click="goToPage(index)">
          {{ index + 1}}
        </span>
        <span class="index__list-item-pagetype" @click="goToPage(index)">
          {{ page.type }}
        </span>
        <span class="index__list-item-header" @click="goToPage(index)">
          {{ page.header }}
        </span>
        <span class="index__list-item-menu" @click="toggleOptions(index)">
          <img class="index__list-item-menu-img" src="../static/icons/more-horizontal.svg" />
        </span>
        <transition name="grow-down">
          <span class="index__list-item-options" v-if="showOptions === index">
            <button
              class="index__list-item-options-button"
              @click="deletePage(index)"
            >
              <img src="../static/icons/trash-2.svg" />
            </button>
          </span>
        </transition>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  data() {
    return {
      showOptions: null,
    };
  },
  computed: {
    ...mapGetters({
      pages: 'getPages',
    }),
  },
  methods: {
    ...mapMutations({
      deletePageMutation: 'DELETE_PAGE',
    }),
    deletePage(index) {
      this.deletePageMutation(index);
      this.showOptions = null;
    },
    goToPage(index) {
      this.$router.push(`/pages/${index + 1}`);
    },
    toggleOptions(index) {
      if (this.showOptions === null || index !== this.showOptions) {
        this.showOptions = index;
      } else {
        this.showOptions = null;
      }
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
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    &-item {
      display: grid;
      grid-template-columns: 1fr 8fr 50px;
      grid-template-rows: 24px 12px;
      grid-template-areas:
        "key header menu"
        ". pagetype ."
        ". options ."
      ;
      border-left: solid;
      border-width: 2px;
      text-align: center;
      list-style-type: none;
      margin: 4px 12px;
      padding: 2px;
      user-select: none;

      &-header {
        grid-area: header;
        font-size: 16px;
        text-align: left;
      }
      &-pagetype {
        font-size: 12px;
        grid-area: pagetype;
        text-align: left;
      }
      &-menu {
        grid-area: menu;

        &-img {
          width: 30px;
        }
      }
      &-options {
        grid-area: options;

        &-button {
          background: $color-danger-red;
          border: none;
          border-radius: 4px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
          margin: 8px 0;
          padding: 6px 0px;
          width: 100%;

        }
      }

      &:hover, active {
        cursor: pointer;
        background: $color-darker-white;
      }
    }
  }
}
</style>
