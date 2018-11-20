<template>
  <div
    class="page"
  >
    <PageInfo
      class="page__info"
      :pageNumber="pageNumber"
      :pageHeader="viewedPageHeader"
    ></PageInfo>
    <DailyLog
      class="page__type"
      v-if="viewedPageType === 'DL'"
    ></DailyLog>
    <MonthlyLog
      class="page__type"
      v-if="viewedPageType === 'ML'"
    ></MonthlyLog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PageInfo from '../components/PageInfo.vue';
import DailyLog from '../components/DailyLog.vue';
import MonthlyLog from '../components/MonthlyLog.vue';

export default {
  layout: 'default',
  data() {
    return {
      pageNumber: '',
    };
  },
  components: {
    DailyLog,
    MonthlyLog,
    PageInfo,
  },
  computed: {
    ...mapGetters({
      pages: 'getPages',
      viewedPageType: 'page/getViewedPageType',
      viewedPageHeader: 'page/getViewedPageHeader',
    }),
  },
  created() {
    this.getPages();
  },
  watch: {
    $route: 'getPages',
  },
  methods: {
    getPages() {
      const { params } = this.$route;
      this.pageNumber = params.id;
      this.$store.dispatch('getPages').then(() => {
        const pages = this.$store.getters.getPages;
        const pageIndex = Number(params.id) - 1;
        const data = pages[pageIndex];
        if (data) {
          this.$store.dispatch('page/updateViewedPage', data);
        } else {
          console.log('404');
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/global.scss';

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
