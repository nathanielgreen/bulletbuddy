<template>
  <div class="log-list">
    <div
      class="log-list__item"
      v-if="logItems.length >= 1"
      v-for="(item, index) in logItems"
      :key="index"
    >
      <div class="log-list__item">
        <div class="log-list__item__icon">
          <img
            v-if="item.type === 'task' && item.checked === false"
            v-on:click="$emit('toggleTask', index, logIndex, item)"
            class="log-list__item__icon-img"
            src="../static/icons/square.svg"
          />
          <img
            v-if="item.type === 'task' && item.checked === true"
            v-on:click="$emit('toggleTask', index, logIndex, item)"
            class="log-list__item__icon-img"
            src="../static/icons/x-square.svg"
          />
          <img
            v-if="item.type === 'note'"
            class="log-list__item__icon-img"
            src="../static/icons/minus.svg"
          />
          <img
            v-if="item.type === 'event'"
            class="log-list__item__icon-img"
            src="../static/icons/circle.svg"
          />
        </div>
        <div
          class="log-list__item__label"
        >
          {{ item.value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogList',
  props: ['logItems', 'logIndex'],
};
</script>

<style lang="scss" scoped>
.log-list {
  width: 100%;

  &__item {
    display: flex;
    margin: 4px;
    align-items: center;
    justify-content: flex-start;

    &__icon {
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
