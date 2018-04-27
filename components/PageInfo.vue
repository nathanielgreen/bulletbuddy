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
  background: #ffffff;
  display: flex;
  font-size: 18px;
  font-weight: bold;
  height: auto;
  justify-content: space-between;
  width: 100%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

  &__header {
    padding: 10px;
  }
  &__page-number {
    padding: 10px;
  }
}
</style>
