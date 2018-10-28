<template>
  <div class="log--daily">
    <LogList
      class="log--daily__list"
      :logItems="dailyLogItems"
      @toggleTask="toggleTask"
    ></LogList>
    <LogInput @emitAddItem="addItem"/>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import LogList from '~/components/LogList.vue';
import LogInput from '~/components/LogInput.vue';

export default {
  name: 'LogTypeDaily',
  components: { LogList, LogInput },
  methods: {
    ...mapMutations('logTypeDaily', {
      clearLogItems: 'CLEAR_LOG_ITEMS',
      toggleTask: 'TOGGLE_TASK',
    }),
    ...mapActions('logTypeDaily', {
      setLogItems: 'setLogItems',
      addNewItem: 'addNewItem',
    }),
    addItem(emittedItem) {
      this.addNewItem(emittedItem);
    },
  },
  computed: {
    ...mapGetters({
      dailyLogItems: 'logTypeDaily/getLogItems',
    }),
  },
  mounted() {
    this.clearLogItems();
    this.setLogItems();
  },
};
</script>

<style lang="scss" scoped>
.log--daily {
  &__list {
    padding: 16px;
  }
}
</style>

