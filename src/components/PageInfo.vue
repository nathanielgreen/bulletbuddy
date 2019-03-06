<template>
    <div class="page-info">
        <div class="page-info__page-type" v-if="activePageType">
          {{ activePageType }}
        </div>
        <div class="page-info__header">{{ activePageHeader }}</div>
        <div class="page-info__page-number" v-if="activePageIndex">
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
};
</script>

<style lang="scss">
@import '../assets/scss/variables.scss';

.page-info {
  align-items: center;
  background: $color-mint-green;
  color: $color-darker-white;
  height: 60px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  font-weight: bold;

  &__header {
    padding: 10px;
    font-size: 24px;
  }
  &__page-number {
    font-size: 18px;
    padding: 10px;
  }
  &__page-type {
    font-size: 18;
    padding: 10px;
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
