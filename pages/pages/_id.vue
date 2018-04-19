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
      'getTotalPages',
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
    console.log(this.pageNumber);
  },
  methods: {
    swipeLeft() {
      const URL = window.location.href;
      const pageNumber = Number(URL.substr(URL.lastIndexOf('/') + 1));
      if (pageNumber === this.getTotalPages) {
        this.$router.push('/add-new');
      } else {
        this.$router.push(`/pages/${pageNumber + 1}`);
      }
    },
    swipeRight() {
      const URL = window.location.href;
      const pageNumber = Number(URL.substr(URL.lastIndexOf('/') + 1));
      if (pageNumber === 1) {
        this.$router.push('/');
      } else {
        this.$router.push(`/pages/${pageNumber - 1}`);
      }
    },
  },
  async validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  async asyncData({ store, params, error }) {
    const pages = await store.getters.getPages;
    const data = pages[params.id];
    if (data == null) {
      error({ message: 'Page not found', statusCode: 404 });
    } else {
      store.commit('UPDATE_VIEWED_ITEMS', params.id);
    }
  },
};
</script>

<style lang="scss">
.page {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  &__list {
  }
  &__input {
    width: 20vw;
  }
}
</style>
