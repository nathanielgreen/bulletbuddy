<template>
  <div class="input">
    <form v-on:submit="addNote($event)">
      <select class="input__select" v-model="selected">
        <option value="checkbox" default>Task</option>
        <option value="note">Note</option>
      </select>
      <input
        class="input__input"
        v-model="value"
        type="text"
        placeholder="Type here..."
      />
    </form>
  </div>
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
  &__input {
    font-size:18px;
    padding:10px 10px 10px 5px;
    display:block;
    width:300px;
    border:none;
  }
}
</style>
