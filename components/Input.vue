<template>
  <form class="input" v-on:submit="addNote($event)">
    <div class="input__icon" v-on:click="changeIcon">
      <img class="input__icon-img" v-if="icon === 'task'" src="../static/icons/square.svg" />
      <img class="input__icon-img" v-if="icon === 'note'" src="../static/icons/minus.svg" />
      <img class="input__icon-img" v-if="icon === 'event'" src="../static/icons/circle.svg" />
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
      value: '',
      icon: 'note',
    };
  },
  methods: {
    addNote(event) {
      event.preventDefault();
      const itemObj = {
        icon: this.icon,
        value: this.value,
      };
      this.$store.commit('ADD_ITEM', itemObj);
      this.value = '';
    },
    changeIcon() {
      switch (this.icon) {
        case 'note':
          this.icon = 'task';
          break;
        case 'task':
          this.icon = 'event';
          break;
        default:
          this.icon = 'note';
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
