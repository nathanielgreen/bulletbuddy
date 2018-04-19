<template>
  <div class="page-info">
    <div class="page-info__header">{{ getViewedHeader }}</div>
    <div class="page-info__page-number">{{ pageNumber }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PageInfo',
  computed: {
    ...mapGetters([
      'getViewedHeader',
    ]),
  },
  props: ['pageNumber'],
};
</script>

<style lang="scss">
.page-info {
  display: flex;
  height: 20px;
  width: 100%;
  margin-bottom: 8px;
  justify-content: space-between;

  &__header {
    padding: 8px 0 0 8px;
  }
  &__page-number {
    padding: 8px 8px 0 0;
  }
}
</style>
