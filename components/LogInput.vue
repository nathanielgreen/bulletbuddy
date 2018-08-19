<template>
  <form class="log-list-input" v-on:submit="emitAddItem($event)">
    <div class="log-list-input__icon" v-on:click="changeType">
      <img
        class="log-list-input__icon-img"
        v-if="type === 'task'"
        src="../static/icons/square.svg" />
      <img
        class="log-list-input__icon-img"
        v-if="type === 'note'"
        src="../static/icons/minus.svg" />
      <img
        class="log-list-input__icon-img"
        v-if="type === 'event'"
        src="../static/icons/circle.svg" />
    </div>
    <input
      class="log-list-input__input"
      v-model="value"
      type="text"
      placeholder="Type here..."
    />
  </form>
</template>

<script>
export default {
  name: 'LogListInput',
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
.log-list-input {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: auto;
  padding: 16px;
  width: 100%;

  &__input {
    flex: 8;
    font-size: 18px;
    border: none;
    outline: none;
  }
  &__icon {
    flex: 1;
    justify-content: center;

    &-img {
      height: 30px;
      width: 30px;
    }
  }
}
</style>
