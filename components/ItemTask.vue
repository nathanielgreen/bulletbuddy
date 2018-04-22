<template>
  <div class="item-task">
    <div class="item-task__icon">
      <img
        v-if="data.checked === false"
        v-on:click="toggleTask(data)"
        class="item-task__icon-img"
        src="../static/icons/square.svg"
      />
      <img
        v-if="data.checked === true"
        v-on:click="toggleTask(data)"
        class="item-task__icon-img"
        src="../static/icons/x-square.svg"
      />
    </div>
    <div
      class="item-task__label"
      v-on:click="showModal(data)"
    >{{ data.value }}</div>
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
    showModal(item) {
      this.$store.commit('TOGGLE_SHOW_MODAL', item);
    },
  },
};
</script>

<style lang="scss">
.item-task {
  display: flex;
  align-items: center;
  justify-content: center;

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
</style>

