<template>
  <div class="item-note">
    {{ data.value }}
  </div>
</template>

<script>
export default {
  name: 'ItemNote',
  props: ['data'],
};
</script>

<style lang="scss">
.item-note {

  &__label {
    padding-left: 10px;
  }
}
</style>

