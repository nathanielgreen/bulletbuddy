<template>
  <div class="log--daily">
    <LogList
      class="log--daily__list"
      :logItems="dailyLogItems"
      @toggleTask="toggleTask"
    ></LogList>
    <LogInput @emitAddItem="addNewItem"/>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import LogList from '../components/LogList.vue';
import LogInput from '../components/LogInput.vue';

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
      addItem: 'addItem',
    }),
    addNewItem(emittedItem) {
      this.addItem(emittedItem);
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
  width: 100%;
}
</style>

