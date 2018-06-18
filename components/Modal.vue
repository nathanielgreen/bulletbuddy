<template>
  <div class="modal" v-if="modal.show">
    <div class="modal__background"></div>
    <div class="modal__container">
      <div
        class="modal__container-option
        modal__container-option--edit"
        v-if="!modal.editing"
        v-on:click="toggleEditingModal()"
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
      <button
        class="modal__container-button"
        v-on:click="toggleModal"
      >Done</button>
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
      toggleEditingModal: 'TOGGLE_EDITING_MODAL',
      toggleShowModal: 'TOGGLE_SHOW_MODAL',
    }),
    ...mapActions([
      'deleteItem',
    ]),
    toggleModal() {
      this.toggleEditingModal();
      this.toggleShowModal('');
    },
  },
};
</script>

<style lang="scss">
@import '~/assets/global.scss';
@import '~/assets/variables.scss';

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
    background: $color-black;
    opacity: 0.5;
    height: 100%;
    width: 100%;
  }
  &__container {
    background: $color-white;
    border-radius: 4px;
    border-width: 1px;
    border-color: $color-lighter-black;
    display: flex;
    flex-direction: column;
    height: 25%;
    justify-content: center;
    position: absolute;
    width: 80%;

    &-input {
      align-self: center;
      border: solid;
      border-color: $color-black;
      border-width: 2px;
      padding: 10px;
      width: 80%;
    }

    &-button {
      align-self: center;
      background: none;
      border: solid;
      border-width: 2px;
      border-radius: 4px;
      margin: 8px;
      padding: 8px;
      width: 50%;
    }

    &-option {
      align-items: center;
      border-color: $color-grey;
      border-width: 1px;
      display: flex;
      flex: 1;
      justify-content: center;
      transition: 0.5s;

      &:hover, active {
        border-radius: 4px;
        background: $color-grey;
        transition: 0.5s;
      }

      &--edit {
        border-bottom: solid;
        border-color: $color-grey;
        border-width: 1px;
      }
      &--delete {
        border-top: solid;
        border-color: $color-grey;
        border-width: 1px;
      }
    }
  }
}
</style>
