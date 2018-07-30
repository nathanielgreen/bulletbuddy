<template>
  <div class="log--monthly">
    <div
      class="log--monthly__item"
      v-for="item in items"
      v-bind:key="item.index"
    >
      <span>{{ item.dayOfMonth }} {{ item.weekday }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'LogTypeMonthly',
  methods: {
    ...mapMutations('logTypeMonthly', {
      clearLogItems: 'CLEAR_LOG_ITEMS',
    }),
    ...mapActions('logTypeMonthly', {
      setLogItems: 'setLogItems',
    }),
  },
  computed: {
    ...mapGetters({
      items: 'logTypeMonthly/getLogItems',
    }),
  },
  mounted() {
    this.clearLogItems();
    this.setLogItems();
  },
};
</script>

<style lang="scss" scoped>
.log--monthly {

  &__item {
    padding: 16px;
    font-size: 18px;
  }
}
</style>
