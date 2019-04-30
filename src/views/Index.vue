<template>
  <section class="index">
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
          <img class="index__list-item-menu-img" src="../assets/icons/more-horizontal.svg" />
        </span>
        <transition name="grow-down">
          <span class="index__list-item-options" v-if="showOptions === index">
            <button
              class="index__list-item-options-button"
              @click="deletePage(page)"
            >
              <img src="../assets/icons/trash-2.svg" />
            </button>
          </span>
        </transition>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';

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
  mounted() {
    this.updateActivePage({
      type: 'All pages in your journal.',
      index: null,
      header: 'Index',
    });
  },
  methods: {
    ...mapActions('activePage', [
      'updateActivePage',
    ]),
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
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';
@import '@/assets/scss/variables.scss';

.index {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
  background: $color-darker-white;

  &__list {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    margin-top: 60px;
    padding: 8px 8px;
    width: 100%;

    &-item {
      box-shadow: 2px 2px 10px rgba(0,0,0,0.1), -2px -2px 10px rgba(0,0,0,0.1);
      background: $color-white;
      border-radius: 12px;
      display: grid;
      font-family: 'Noto Sans', sans-serif;
      min-height: 60px;
      height: auto;
      grid-template-columns: 50px auto  50px;
      grid-template-areas:
        "key header menu"
        "key pagetype menu"
        "options options options"
      ;
      text-align: center;
      list-style-type: none;
      margin: 8px 8px;
      user-select: none;
      width: 90%;
      max-width: 800px;

      &-key {
        align-items: center;
        align-self: center;
        color: #111111;
        display:flex;
        background: #e2e2e2;
        border-radius: 180px;
        font-size: 12px;
        font-weight: bold;
        grid-area: key;
        height: 25px;
        justify-content: center;
        justify-self: center;
        width: 25px;
      }
      &-header {
        align-self: center;
        grid-area: header;
        font-size: 16px;
        font-weight: bold;
        height: auto;
        padding-top: 6px;
        text-align: left;
      }
      &-pagetype {
        align-self: center;
        color: #808080;
        font-size: 12px;
        grid-area: pagetype;
        padding-bottom: 6px;
        text-align: left;
      }
      &-menu {
        display: flex;
        grid-area: menu;
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
        &-img {
          width: 30px;
        }
      }
      &-options {
        grid-area: options;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
        background: none;
        box-shadow: inset 0px 2px 10px rgba(0, 0, 0, 0.2);
        width: 100%;
        display: flex;

        &-button {
          background: $color-danger-red;
          border: none;
          border-radius: 4px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
          margin: 8px 12px;
          padding: 6px 0px;
          flex: 1;

        }
      }

    }
  }
}
</style>
