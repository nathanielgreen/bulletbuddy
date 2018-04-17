<template>
  <div class="list">
    <ul class="list__list" v-for="(value, index) in items" :key="index">
      <li class="list__list-item">{{ value }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'List',
  computed: {
    ...mapGetters({
      items: 'getItems',
    }),
  },
};
</script>

<style lang="scss">
</style>
