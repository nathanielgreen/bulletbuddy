<template>
  <div class="monthly-list">
    <LogListMonthly
      :logItems="monthlyLogItems"
      @emitToggleTask="catchEmitToggleTask"
    />
    <LogInput class="monthly-list" @emitAddItem="addItem" />
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';

import LogInput from '../components/LogInput.vue';
import LogListMonthly from '../components/LogListMonthly.vue';

export default {
  name: 'LogTypeMonthlyList',
  components: {
    LogInput,
    LogListMonthly,
  },
  computed: {
    ...mapGetters({
      monthlyLogItems: 'logTypeMonthly/getLogItems',
    }),
  },
  methods: {
    ...mapMutations('logTypeMonthly', {
      clearLogItems: 'CLEAR_LOG_ITEMS',
      updateTask: 'UPDATE_TASK',
    }),
    ...mapActions('logTypeMonthly', {
      addLogItem: 'addLogItem',
      setLogItems: 'setLogItems',
    }),
    addItem(emittedvalue) {
      this.addLogItem(emittedvalue);
    },
    catchEmitToggleTask(emittedIndex) {
      this.updateTask(emittedIndex);
    },
  },
  mounted() {
    this.clearLogItems();
    this.setLogItems();
  },
};
</script>

<style lang="scss" scoped>
.monthly-list {
  &__item {
    display: flex;
    margin: 4px;
    align-items: center;
    justify-content: flex-start;

    &__icon {
      flex: 1;
      height: 30px;
      width: 30px;

      &-img {
        height: 30px;
        width: 30px;
      }
    }
    &__label {
      font-size: 18px;
      padding-left: 16px;
      flex: 8;
    }
  }
}
</style>
