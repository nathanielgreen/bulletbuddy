<template>
  <div class="item-note">
    <img class="item-note__icon" src="../static/icons/minus.svg" />
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
.item-note {
  display: flex;
  align-items: center;
  justify-content: center;

  &__icon {
    flex: 1;
    height: 30px;
  }
  &__label {
    font-size: 18px;
    margin-left: 10px;
    flex: 8;
  }
}
</style>

