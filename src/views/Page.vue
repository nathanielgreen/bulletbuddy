<template>
  <div
    class="page"
  >
    <PageInfo
      class="page__info"
      :pageNumber="activePageIndex + 1"
      :pageHeader="activePageHeader"
    ></PageInfo>
    <DailyLog
      class="page__type"
      v-if="activePageType === 'DL'"
    ></DailyLog>
    <MonthlyLog
      class="page__type"
      v-if="activePageType === 'ML'"
    ></MonthlyLog>
    <FutureLog
      class="page__type"
      v-if="activePageType === 'FL'"
    ></FutureLog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PageInfo from '../components/PageInfo.vue';
import DailyLog from '../components/DailyLog.vue';
import MonthlyLog from '../components/MonthlyLog.vue';
import FutureLog from '../components/FutureLog.vue';

export default {
  layout: 'default',
  components: {
    DailyLog,
    MonthlyLog,
    FutureLog,
    PageInfo,
  },
  computed: {
    ...mapGetters({
      pages: 'getPages',
      activePageType: 'activePage/getActivePageType',
      activePageHeader: 'activePage/getActivePageHeader',
      activePageIndex: 'activePage/getActivePageIndex',
    }),
  },
  created() {
    this.getPages();
  },
  methods: {
    getPages() {
      const { params } = this.$route;
      this.pageNumber = params.id;
      this.$store.dispatch('getPages').then(() => {
        const pages = this.$store.getters.getPages;
        const pageIndex = Number(params.id) - 1;
        const data = {
          ...pages[pageIndex],
          index: pageIndex,
        };
        if (data) {
          this.$store.dispatch('activePage/updateActivePage', data);
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
