<template>
  <div class="item-task">
    <img class="item-task__icon" src="../static/icons/square.svg" />
    <div
      class="item-task__label"
    >{{ data.value }}</div>
  </div>
</template>

<script>
export default {
  name: 'ItemTask',
  props: ['data'],
};
</script>

<style lang="scss">
.item-task {
  display: flex;
  align-items: center;
  &__icon {
    flex: 1;
    height: 30px;
  }
  &__label {
    font-size: 18px;
    padding-left: 16px;
    flex: 8;


  }

}
</style>

