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
  margin-bottom: 16px;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;

  &__header {
    padding: 10px 0 0 10px;
  }
  &__page-number {
    padding: 10px 10px 0 0;
  }
}
</style>
