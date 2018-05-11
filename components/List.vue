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
import { mapGetters } from 'vuex';
import Item from '~/components/Item.vue';

export default {
  name: 'List',
  components: {
    Item,
  },
  computed: {
    ...mapGetters({
      items: 'getViewedItems',
    }),
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
