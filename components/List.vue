<template>
  <div class="list">
    <ul class="list__list" v-for="item in items" :key="item">
      {{  items }}
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
