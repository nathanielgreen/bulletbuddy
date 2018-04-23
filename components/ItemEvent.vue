<template>
  <div class="item-event">
    <div class="item-event__icon">
      <img class="item-event__icon-img" src="../static/icons/circle.svg" />
    </div>
    <div
      class="item-event__label"
      v-on:click="toggleShowModal(data)"
    >{{ data.value }}</div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'ItemEvent',
  props: ['data'],
  methods: {
    ...mapMutations({
      toggleShowModal: 'TOGGLE_SHOW_MODAL',
    }),
  },
};
</script>

<style lang="scss">
.item-event {
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

