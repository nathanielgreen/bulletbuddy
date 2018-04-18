<template>
  <div class="list">
    <div class="list__item" v-for="item in items" :key="item.value">
      <ItemTask
        v-if="item.type === 'checkbox'"
        v-bind:data="item"
      ></ItemTask>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ItemTask from '~/components/ItemTask.vue';

export default {
  name: 'List',
  components: {
    ItemTask,
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
    padding: 16px 16px 16px 16px;

    &-square {
      display: inline-block;
      width: 16px;
      vertical-align: center;
      height: 2px;
      background: black;
    }
  }
}
</style>
