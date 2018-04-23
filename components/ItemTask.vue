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
      v-on:click="toggleShowModal(data)"
    >{{ data.value }}</div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'ItemTask',
  props: ['data'],
  methods: {
    ...mapMutations({
      toggleShowModal: 'TOGGLE_SHOW_MODAL',
      toggleTask: 'TOGGLE_TASK',
    }),
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

