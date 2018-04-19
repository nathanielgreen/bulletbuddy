<template>
  <div class="item-task">
    <img
      v-if="data.options.checked === false"
      v-on:click="toggleTask(data)"
      class="item-task__icon"
      src="../static/icons/square.svg"
    />
    <img
      v-if="data.options.checked === true"
      v-on:click="toggleTask(data)"
      class="item-task__icon"
      src="../static/icons/x-square.svg"
    />
    <div class="item-task__label">{{ data.value }}</div>
  </div>
</template>

<script>
export default {
  name: 'ItemTask',
  props: ['data'],
  methods: {
    toggleTask(data) {
      // eslint-disable-next-line
      data.options.checked = true;
    },
  },
};
</script>

<style lang="scss">
.item-task {
  display: flex;
  align-items: center;
  &__icon {
    flex: 1;
    height: 30px;
    width: 30px;
  }
  &__label {
    font-size: 18px;
    padding-left: 16px;
    flex: 8;
  }
}
</style>

