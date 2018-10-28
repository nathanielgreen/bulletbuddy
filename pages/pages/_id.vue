<template>
  <div
    class="page"
    v-touch:swipe.left="swipeLeft"
    v-touch:swipe.right="swipeRight"
  >
    <PageInfo
      class="page__info"
      :pageNumber="pageNumber"
      :pageHeader="viewedPageHeader"
    ></PageInfo>
    <LogTypeDaily
      class="page__type"
      v-if="viewedPageType === 'DL'"
    ></LogTypeDaily>
    <LogTypeMonthly
      class="page__type"
      v-if="viewedPageType === 'ML'"
    ></LogTypeMonthly>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PageInfo from '~/components/PageInfo.vue';
import LogTypeDaily from '~/components/LogTypeDaily.vue';
import LogTypeMonthly from '~/components/LogTypeMonthly.vue';

export default {
  layout: 'default',
  data() {
    return {
      pageNumber: '',
    };
  },
  components: {
    LogTypeDaily,
    LogTypeMonthly,
    PageInfo,
  },
  computed: {
    ...mapGetters({
      pages: 'getPages',
      viewedPageType: 'page/getViewedPageType',
      viewedPageHeader: 'page/getViewedPageHeader',
    }),
  },
  transition(to, from) {
    if (!from) return 'slide-left';
    if (from.name === 'add-new') return 'slide-right';
    return +to.params.id < +from.params.id ? 'slide-right' : 'slide-left';
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
    await store.dispatch('getPages').then(() => {
      const pages = store.getters.getPages;
      const pageIndex = Number(params.id) - 1;
      const data = pages[pageIndex];
      if (data) {
        setTimeout(() => {
          store.dispatch('page/updateViewedPage', data);
        }, 250);
      } else {
        error({ message: 'Page not found', statusCode: 404 });
      }
    });
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
  &__type {
    margin-top: 40px;
    height: 100%;
    width: 100%;
  }
}
</style>
