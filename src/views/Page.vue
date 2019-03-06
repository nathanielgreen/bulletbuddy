<template>
  <div
    class="page"
  >
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
import { mapGetters, mapActions } from 'vuex';
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
  mounted() {
    this.updateActivePage({
      type: this.activePageType,
      index: this.activePageIndex,
      header: this.activePageHeader,
    });
  },
  methods: {
    ...mapActions('activePage', ['updateActivePage']),
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
@import '../assets/scss/variables.scss';

.page {
  align-items: center;
  background: $color-mint-green;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: scroll;
  width: 100%;

  &__info {
    position: fixed;
  }
  &__list {
    margin-top: 60px;
  }
  &__input {
    width: 100%;
  }
  &__type {
    margin-top: 60px;
    background: $color-darker-white;
    border-radius: 12px;
    height: 100%;
    width: 100%;
  }
}
</style>
