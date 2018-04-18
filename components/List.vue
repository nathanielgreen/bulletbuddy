<template>
  <div class="list">
    <div class="list__item" v-for="item in items" :key="item.value">
      <ItemTask
        v-if="item.type === 'task'"
        v-bind:data="item"
      ></ItemTask>
      <ItemNote
        v-if="item.type === 'note'"
        v-bind:data="item"
      ></ItemNote>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ItemTask from '~/components/ItemTask.vue';
import ItemNote from '~/components/ItemNote.vue';

export default {
  name: 'List',
  components: {
    ItemTask,
    ItemNote,
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
