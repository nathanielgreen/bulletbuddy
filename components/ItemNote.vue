<template>
  <div class="item-note">
    <img class="item-note" src="../static/icons/square.svg" />
    <div class="item-note__label">{{ data.value }}</div>
  </div>
</template>

<script>
export default {
  name: 'ItemNote',
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

