<template>
  <div
    class="page"
    v-touch:swipe.left="swipeLeft"
    v-touch:swipe.right="swipeRight"
  >
    <DailyLog v-if="viewedPageType === 'DL'"></DailyLog>
    <PageInfo class="page__info" :pageNumber="pageNumber"></PageInfo>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PageInfo from '~/components/PageInfo.vue';
import DailyLog from '~/components/DailyLog.vue';

export default {
  layout: 'default',
  data() {
    return {
      pageNumber: '',
    };
  },
  computed: {
    ...mapGetters({
      pages: 'getPages',
      viewedPageType: 'page/getViewedPageType',
    }),
  },
  transition(to, from) {
    if (!from) return 'slide-left';
    if (from.name === 'add-new') return 'slide-right';
    return +to.params.id < +from.params.id ? 'slide-right' : 'slide-left';
  },
  components: {
    DailyLog,
    PageInfo,
  },
  mounted() {
    const URL = window.location.href;
    this.pageNumber = Number(URL.substr(URL.lastIndexOf('/') + 1));
  },
  methods: {
    swipeLeft() {
      if (this.pageNumber === this.pages.length) {
        this.$router.push('/add-new');
      } else {
        this.$router.push(`/pages/${this.pageNumber + 1}`);
      }
    },
    swipeRight() {
      if (this.pageNumber === 1) {
        this.$router.push('/');
      } else {
        this.$router.push(`/pages/${this.pageNumber - 1}`);
      }
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
      setTimeout(() => {
        store.commit('UPDATE_VIEWED_ITEMS', index);
        store.commit('UPDATE_VIEWED_HEADER', index);
        store.commit('page/UPDATE_VIEWED_PAGE_TYPE', data.type);
      }, 250);
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

  &__info {
    position: fixed;
  }
  &__list {
    margin-top: 40px;
  }
  &__input {
    width: 100%;
  }
}
</style>
