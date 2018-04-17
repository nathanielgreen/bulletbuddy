<template>
  <div class="input">
    <form v-on:submit="addNote($event)">
    <input
      class="input__input"
      v-model="item"
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
      item: '',
    };
  },
  methods: {
    addNote(event) {
      event.preventDefault();
      this.$store.commit('ADD_ITEM', this.item);
      this.item = '';
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
