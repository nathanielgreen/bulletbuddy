<template>
  <section class="index">
    <PageInfo
      pageHeader="Index"
    ></PageInfo>
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
import { mapGetters, mapMutations } from 'vuex';
import PageInfo from '../components/PageInfo.vue';

export default {
  data() {
    return {
      showOptions: null,
    };
  },
  components: {
    PageInfo,
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
  background: $color-mint-green;

  &__list {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-top: 60px;
    padding: 0;
    width: 100%;
    background: $color-darker-white;
    border-radius: 20px;

    &-item {
      display: grid;
      grid-template-columns: 1fr 8fr 50px;
      grid-template-areas:
        "key header menu"
        "key pagetype menu"
        "options options options"
      ;
      border-radius: 12px;
      color: rgba(0,0,0,0.9);
      text-align: center;
      background: none;
      height: auto;
      list-style-type: none;
      margin: 8px 8px;
      box-shadow: 2px 2px 10px rgba(0,0,0,0.1), -2px -2px 10px rgba(0,0,0,0.1);
      user-select: none;

      &-key {
        border-radius: 12px;
        margin: 6px;
        background: $color-mint-green;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        grid-area: key;
        color: $color-darker-white;
      }
      &-header {
        grid-area: header;
        font-size: 16px;
        height: auto;
        font-weight: bold;
        text-align: left;
        padding: 4px 10px;
      }
      &-pagetype {
        font-size: 12px;
        grid-area: pagetype;
        text-align: left;
        padding: 4px 10px;
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
