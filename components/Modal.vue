<template>
  <div class="modal" v-if="modal.show">
    <div class="modal__background"></div>
    <div class="modal__container">
      <div
        class="modal__container-option
        modal__container-option--edit"
        v-if="!modal.editing"
        v-on:click="editItem()"
      >Edit</div>
      <div
        class="modal__container-option
        modal__container-option--delete"
        v-on:click="deleteItem()"
       >Delete</div>
    </div>
    <div
      class="modal__container"
      v-if="modal.editing"
    >
      <input
        class="modal__container-input"
        type="text"
        v-model="modal.item.value"
      />
      <button v-on:click="toggleModal">Done</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'Modal',
  computed: {
    ...mapGetters({
      modal: 'getModal',
    }),
  },
  methods: {
    ...mapMutations({
      editItem: 'TOGGLE_EDITING_MODAL',
      toggleModal: 'TOGGLE_SHOW_MODAL',
    }),
    ...mapActions([
      'deleteItem',
    ]),
  },
};
</script>

<style lang="scss">
@import '~/assets/global.scss';

.modal {
  position: absolute;
  z-index: 50;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: fadein;
  animation-duration: 0.5s;

  &__background {
    position: absolute;
    background: #000;
    opacity: 0.5;
    height: 100%;
    width: 100%;
  }
  &__container {
    background: #fff;
    border-radius: 4px;
    border-width: 1px;
    border-color: #111111;
    display: flex;
    flex-direction: column;
    height: 25%;
    position: absolute;
    width: 80%;

    &-input {
      display: flex;
    }

    &-option {
      align-items: center;
      border-color: #cccccc;
      border-width: 1px;
      display: flex;
      flex: 1;
      justify-content: center;
      transition: 0.5s;

      &:hover, active {
        border-radius: 4px;
        background: #cccccc;
        transition: 0.5s;
      }

      &--edit {
        border-bottom: solid;
        border-color: #cccccc;
        border-width: 1px;
      }
      &--delete {
        border-top: solid;
        border-color: #cccccc;
        border-width: 1px;
      }
    }
  }
}
</style>
