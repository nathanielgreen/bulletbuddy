<template>
  <div class="page-info">
    <div class="page-info__page-number">{{ pageNumber }}</div>
  </div>
</template>

<script>
export default {
  name: 'PageInfo',
  props: ['pageNumber'],
};
</script>

<style lang="scss">
.page-info {
  height: 20px;
  width: 100%;
  text-align: right;

  &__page-number {
    padding: 8px;
  }
}
</style>
