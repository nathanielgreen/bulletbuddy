<template>
  <div class="item-task">
    <img
      v-if="data.checked === false"
      v-on:click="toggleTask(data)"
      class="item-task__icon"
      src="../static/icons/square.svg"
    />
    <img
      v-if="data.checked === true"
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
      this.$store.commit('TOGGLE_TASK', data);
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
  }
  &__label {
    font-size: 18px;
    padding-left: 16px;
    flex: 8;
  }
}
</style>

