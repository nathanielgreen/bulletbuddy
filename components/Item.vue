<template>
  <div class="item">
    <div class="item__icon">
      <img
        v-if="data.type === 'task' && data.checked === false"
        v-on:click="toggleTask(index)"
        class="item__icon-img"
        src="../static/icons/square.svg"
      />
      <img
        v-if="data.type === 'task' && data.checked === true"
        v-on:click="toggleTask(index)"
        class="item__icon-img"
        src="../static/icons/x-square.svg"
      />
      <img
        v-if="data.type === 'note'"
        class="item__icon-img"
        src="../static/icons/minus.svg"
      />
      <img
        v-if="data.type === 'event'"
        class="item__icon-img"
        src="../static/icons/circle.svg"
      />
    </div>
    <div
      class="item__label"
      v-on:click="toggleShowModal(item)"
    >
      {{ data.value }}
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Item',
  props: ['data', 'index'],
  computed: {
    item(props) {
      return {
        data: props.data,
        index: props.index,
      };
    },
  },
  methods: {
    ...mapMutations({
      toggleShowModal: 'modal/TOGGLE_SHOW_MODAL',
      toggleTask: 'TOGGLE_TASK',
    }),
  },
};
</script>

<style lang="scss" scoped>
.item {
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
