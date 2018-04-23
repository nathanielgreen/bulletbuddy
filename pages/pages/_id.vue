<template>
  <div
    class="page"
    v-touch:swipe.left="swipeLeft"
    v-touch:swipe.right="swipeRight"
  >
    <PageInfo :pageNumber="pageNumber"></PageInfo>
    <List class="page__list"></List>
    <Input class="page__input"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import anime from 'animejs';
import List from '~/components/List.vue';
import Input from '~/components/Input.vue';
import PageInfo from '~/components/PageInfo.vue';

export default {
  layout: 'default',
  data() {
    return {
      pageNumber: '',
    };
  },
  computed: {
    ...mapGetters([
      'getPages',
      'getFadeClass',
    ]),
  },
  components: {
    List,
    Input,
    PageInfo,
  },
  mounted() {
    const URL = window.location.href;
    this.pageNumber = Number(URL.substr(URL.lastIndexOf('/') + 1));
  },
  methods: {
    swipeLeft() {
      anime({
        targets: '.page',
        translateX: -80,
        opacity: 0,
        duration: 300,
        complete: () => {
          if (this.pageNumber === this.getPages.length) {
            this.$router.push('/add-new');
          } else {
            this.$router.push(`/pages/${this.pageNumber + 1}`);
          }
        },
      });
    },
    swipeRight() {
      anime({
        targets: '.page',
        translateX: 80,
        opacity: 0,
        duration: 300,
        complete: () => {
          if (this.pageNumber === 1) {
            this.$router.push('/');
          } else {
            this.$router.push(`/pages/${this.pageNumber - 1}`);
          }
        },
      });
    },
  },
  async validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  async asyncData({ store, params, error }) {
    const pages = await store.getters.getPages;
    const index = Number(params.id) - 1;
    const data = pages[index];
    if (data == null) {
      error({ message: 'Page not found', statusCode: 404 });
    } else {
      store.commit('UPDATE_VIEWED_ITEMS', index);
      store.commit('UPDATE_VIEWED_HEADER', index);
    }
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/global.scss';

.page {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-y: scroll;
  animation-name: fadeinfromleft;
  animation-duration: 0.2;

  &__list {
  }
  &__input {
    width: 100%;
  }
}
</style>
