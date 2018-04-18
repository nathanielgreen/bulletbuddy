<template>
  <div class="item-task">
    <input
      class="item-task__checkbox"
      type="checkbox"
    />
    <label
      class="item-task__label"
      for="checkbox"
    >{{ data.value }}</label>
  </div>
</template>

<script>
export default {
  name: 'ItemTask',
  props: ['data'],
};
</script>

<style lang="scss">
.item-task {

  &__label {
    padding-left: 10px;
  }
}
</style>

