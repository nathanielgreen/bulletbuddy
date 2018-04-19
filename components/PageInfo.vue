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
  margin-bottom: 8px;

  &__page-number {
    padding: 8px 8px 0 0;
  }
}
</style>
