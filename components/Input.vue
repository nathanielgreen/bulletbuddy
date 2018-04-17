<template>
  <div class="input">
    <form v-on:submit="addNote($event)">
    <input
      class="input__input"
      type="text"
      placeholder="Type here..."
    />
    </form>
  </div>
</template>

<script>
export default {
  name: 'Input',
  methods: {
    addNote(event) {
      event.preventDefault();
      console.log('hi');
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
