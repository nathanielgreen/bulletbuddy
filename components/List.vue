<template>
  <div class="list">
    <div
      class="list__item"
      v-for="item in items"
      :key="item.index"
    >
      <ItemTask
        v-if="item.type === 'task'"
        v-bind:data="item"
      ></ItemTask>
      <ItemNote
        v-if="item.type === 'note'"
        v-bind:data="item"
      ></ItemNote>
      <ItemEvent
        v-if="item.type === 'event'"
        v-bind:data="item"
      ></ItemEvent>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ItemTask from '~/components/ItemTask.vue';
import ItemNote from '~/components/ItemNote.vue';
import ItemEvent from '~/components/ItemEvent.vue';

export default {
  name: 'List',
  components: {
    ItemTask,
    ItemNote,
    ItemEvent,
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
