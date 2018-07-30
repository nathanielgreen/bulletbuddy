<template>
  <div class="page-info">
    <div class="page-info__header">{{ pageHeader }}</div>
    <div class="page-info__page-number">{{ pageNumber }}</div>
  </div>
</template>

<script>
export default {
  name: 'PageInfo',
  props: ['pageNumber', 'pageHeader'],
};
</script>

<style lang="scss">
@import '~/assets/variables.scss';

.page-info {
  background: $color-white;
  border-color: $color-grey;
  border-style: none none dotted none;
  border-width: 3px;
  display: flex;
  font-size: 18px;
  font-weight: bold;
  height: 40px;
  justify-content: space-between;
  width: 100%;

  &__header {
    padding: 10px;
  }
  &__page-number {
    padding: 10px;
  }
}
</style>
