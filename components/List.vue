<template>
  <div class="list">
    <div
      class="list__item"
      v-for="(item, index) in items"
      :key="index"
    >
      <Item
        v-bind:data="item"
        v-bind:index="index"
      ></Item>
    </div>
  </div>
</template>

<script>
import Item from '~/components/Item.vue';

export default {
  name: 'List',
  props: [
    'items',
  ],
  components: {
    Item,
  },
};
</script>

<style lang="scss">
.list {
  width: 100%;

  &__item {
    padding: 16px;
  }
}
</style>
