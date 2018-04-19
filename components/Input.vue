<template>
  <form class="input" v-on:submit="addNote($event)">
    <div class="input__icon" v-on:click="changeIcon">
      <img v-if="icon === 'task'" src="../static/icons/square.svg" />
      <img v-if="icon === 'note'" src="../static/icons/minus.svg" />
      <img v-if="icon === 'event'" src="../static/icons/circle.svg" />
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
      selected: '',
      icon: 'note',
    };
  },
  methods: {
    addNote(event) {
      event.preventDefault();
      const itemObj = {
        type: this.selected,
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

  &__input {
    flex: 1;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    border: none;
  }
}
</style>
