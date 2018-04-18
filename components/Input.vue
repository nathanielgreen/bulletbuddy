<template>
  <form class="input" v-on:submit="addNote($event)">
    <select class="input__select" v-model="selected">
      <option value="task" default>Task</option>
      <option value="note">Note</option>
    </select>
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
