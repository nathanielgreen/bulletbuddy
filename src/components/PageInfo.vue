<template>
    <div class="page-info">
        <div class="page-info__page-type" v-if="activePageType">
          {{ verbosePageType(activePageType) }}
        </div>
        <div class="page-info__header">{{ activePageHeader }}</div>
        <div
          class="page-info__page-number"
          v-if="activePageIndex >= 0 && Number.isInteger(activePageIndex)"
        >
          {{ activePageIndex + 1 }}
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PageInfo',
  computed: {
    ...mapGetters({
      activePageType: 'activePage/getActivePageType',
      activePageHeader: 'activePage/getActivePageHeader',
      activePageIndex: 'activePage/getActivePageIndex',
    }),
  },
  methods: {
    verbosePageType(pageType) {
      switch (pageType) {
        case 'ML':
          return 'Monthly Log';
        case 'DL':
          return 'Daily Log';
        case 'FL':
          return 'Future Log';
        default:
          return pageType;
      }
    },
  },
};
</script>

<style lang="scss">
@import '../assets/scss/variables.scss';

.page-info {
  background: $color-white;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
  color: $color-black;
  display: grid;
  font-family: 'Noto Sans', sans-serif;
  font-weight: bold;
  grid-template-columns: 8fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "header index"
    "pagetype index"
  ;
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;

  &__header {
    grid-area: header;
    align-self: flex-end;
    padding-left: 16px;
    font-size: 20px;
  }
  &__page-number {
    align-items: center;
    align-self: center;
    background: #e2e2e2;
    border-radius: 180px;
    display: flex;
    font-size: 12px;
    grid-area: index;
    height: 25px;
    justify-content: center;
    justify-self: center;
    width: 25px;
  }
  &__page-type {
    align-self: flex-start;
    grid-area: pagetype;
    font-weight: normal;
    font-size: 16px;
    opacity: 0.5;
    padding-left: 16px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 1s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
