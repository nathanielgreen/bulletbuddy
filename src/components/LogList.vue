<template>
  <div class="log-list">
    <div
      class="log-list__item"
      v-if="logItems.length >= 1"
      v-for="(item, index) in logItems"
      :key="index"
    >
      <div class="log-list__item__icon">
        <img
          v-if="item.type === 'task' && item.checked === false"
          v-on:click="$emit('emitToggleTask', item)"
          class="log-list__item__icon-img"
          src="../assets/icons/square.svg"
        />
        <img
          v-if="item.type === 'task' && item.checked === true"
          v-on:click="$emit('emitToggleTask', item)"
          class="log-list__item__icon-img"
          src="../assets/icons/x-square.svg"
        />
        <img
          v-if="item.type === 'note'"
          class="log-list__item__icon-img"
          src="../assets/icons/minus.svg"
        />
        <img
          v-if="item.type === 'event'"
          class="log-list__item__icon-img"
          src="../assets/icons/circle.svg"
        />
      </div>
      <div
        class="log-list__item__label"
      >
        {{ item.value }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogList',
  props: ['logItems'],
};
</script>

<style lang="scss" scoped>
.log-list {
  width: 100%;
  padding: 20px;

  &__item {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 10px;

    &__icon {
      display: inherit;
      justify-content: center;
      flex: 1;
      height: 30px;
      width: 30px;

      &-img {
        height: 30px;
        width: 30px;
      }
    }
    &__label {
      font-size: 18px;
      padding-left: 16px;
      flex: 8;
    }
  }
}
</style>
