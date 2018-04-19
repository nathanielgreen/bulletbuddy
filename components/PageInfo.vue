<template>
  <div class="page-info">
    <div class="page-info__month">{{ getViewedMonth }}</div>
    <div class="page-info__page-number">{{ pageNumber }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PageInfo',
  computed: {
    ...mapGetters([
      'getViewedMonth',
    ]),
  },
  props: ['pageNumber'],
};
</script>

<style lang="scss">
.page-info {
  height: 20px;
  width: 100%;
  text-align: right;
  margin-bottom: 8px;

  &__page-number {
    padding: 8px 8px 0 0;
  }
}
</style>
