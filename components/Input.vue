<template>
  <form class="input" v-on:submit="addItem($event)">
    <div class="input__icon" v-on:click="changeType">
      <img class="input__icon-img" v-if="type === 'task'" src="../static/icons/square.svg" />
      <img class="input__icon-img" v-if="type === 'note'" src="../static/icons/minus.svg" />
      <img class="input__icon-img" v-if="type === 'event'" src="../static/icons/circle.svg" />
    </div>
    <input
      class="input__input"
      v-model="value"
      type="text"
      placeholder="Type here..."
    />
  </form>
</template>

<script>
export default {
  name: 'Input',
  data() {
    return {
      type: 'note',
      value: '',
    };
  },
  methods: {
    addItem(event) {
      event.preventDefault();
      const data = {
        type: this.type,
        value: this.value,
      };
      this.$store.dispatch('addItem', data);
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
.input {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: solid;
  border-color: #cccccc;
  border-width: 1px;
  padding: 16px;

  &__input {
    flex: 8;
    font-size: 18px;
    border: none;
  }
  &__icon {
    flex: 1;

    &-img {
      height: 30px;
    }
  }
}
</style>
