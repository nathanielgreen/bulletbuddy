<template>
  <div class="list">
    <ul class="list__list" v-for="item in items" :key="item">
      <li v-if="item.type !== 'checkbox'">{{ item.value }}</li>
      <input
        v-if="item.type === 'checkbox'"
        type="checkbox"
        value="item.value"
      />
      <label
        v-if="item.type === 'checkbox'"
        for="checkbox"
        value="item.value"
      >{{ item.value }}</label>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'List',
  computed: {
    ...mapGetters({
      items: 'getViewedItems',
    }),
  },
};
</script>

<style lang="scss">
</style>
