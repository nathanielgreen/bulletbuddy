<template>
  <div class="log-list">
    <div
      class="log-list__item"
      v-for="(item, index) in items"
      :key="index"
    >
      <LogListItem
        v-bind:data="item"
        v-bind:index="index"
      ></LogListItem>
    </div>
  </div>
</template>

<script>
import LogListItem from '~/components/LogListItem.vue';

export default {
  name: 'LogList',
  props: [
    'items',
  ],
  components: {
    LogListItem,
  },
};
</script>

<style lang="scss">
.log-list {
  width: 100%;

  &__item {
    padding: 16px;
  }
}
</style>
