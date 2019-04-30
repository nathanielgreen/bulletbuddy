<template>
  <form class="log-input" v-on:submit="emitAddItem($event)">
    <div class="log-input__icon" v-on:click="changeType">
      <img
        class="log-input__icon-img"
        v-if="type === 'task'"
        src="../assets/icons/square.svg" />
      <img
        class="log-input__icon-img"
        v-if="type === 'note'"
        src="../assets/icons/minus.svg" />
      <img
        class="log-input__icon-img"
        v-if="type === 'event'"
        src="../assets/icons/circle.svg" />
    </div>
    <input
      class="log-input__input"
      v-model="value"
      type="text"
      placeholder="Add a task, event, note etc."
    />
    <button
      class="log-input__submit"
      type="submit"
    >
      <img
        class="log-input__submit-icon"
        src="../assets/icons/arrow-right.svg"
      />
    </button>
  </form>
</template>

<script>
export default {
  name: 'LogInput',
  data() {
    return {
      type: 'note',
      value: '',
    };
  },
  methods: {
    emitAddItem(event) {
      event.preventDefault();
      this.$emit('emitAddItem', { ...this.$data });
      this.value = '';
    },
    changeType() {
      switch (this.type) {
        case 'note':
          this.type = 'task';
          break;
        case 'task':
          this.type = 'event';
          break;
        default:
          this.type = 'note';
          break;
      }
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.log-input {
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
  width: 100%;

  &__input {
    background: none;
    border: none;
    border-bottom: 2px solid;
    border-color: rgba(0,0,0,0.5);
    font-size: 18px;
    outline: none;
    width: 65vw;
  }
  &__icon {
    display: inherit;
    justify-content: center;
    height: 30px;
    width: 30px;

    &-img {
      height: 100%;
      width: 100%;
    }
  }

  &__submit {
    background: none;
    border: none;
    height: 30px;
    padding: 0;
    width: 30px;

    &-icon {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
