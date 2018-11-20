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
      placeholder="Type here..."
    />
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
.log-input {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 100%;

  &__input {
    border: none;
    font-size: 18px;
    flex: 8;
    padding-left: 16px;
    outline: none;
  }
  &__icon {
    display: inherit;
    justify-content: center;
    flex: 1;
    height: 30px;
    width: 30px;

    &-img {
      height: 30px;
      width: 30px;
    }
  }
}
</style>
