<template>
  <div class="item-note">
    <div class="item-note__icon">
      <img class="item-note__icon-img" src="../static/icons/minus.svg" />
    </div>
    <div
      class="item-note__label"
      v-on:click="toggleShowModal(data)"
    >{{ data.value }}</div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'ItemNote',
  props: ['data', 'index'],
  methods: {
    ...mapMutations({
      toggleShowModal: 'TOGGLE_SHOW_MODAL',
    }),
  },
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

