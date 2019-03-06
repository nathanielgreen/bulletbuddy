<template>
  <div class="page-info">
    <div class="page-info__page-type">{{ pageType }}</div>
    <div class="page-info__header">{{ pageHeader }}</div>
    <div class="page-info__page-number">{{ pageNumber }}</div>
  </div>
</template>

<script>
export default {
  name: 'PageInfo',
  props: ['pageNumber', 'pageHeader', 'pageType'],
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
</style>
