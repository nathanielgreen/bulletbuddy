<template>
  <div class="item-event">
    <img class="item-event__icon" src="../static/icons/circle.svg" />
    <div class="item-event__label">{{ data.value }}</div>
  </div>
</template>

<script>
export default {
  name: 'ItemEvent',
  props: ['data'],
};
</script>

<style lang="scss">
.item-event {
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

