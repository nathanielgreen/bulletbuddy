<template>
  <div class="log--daily">
    <LogList :items="items"></LogList>
    <LogInput />
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
    }),
    ...mapActions('logTypeDaily', {
      setLogItems: 'setLogItems',
    }),
  },
  computed: {
    ...mapGetters({
      items: 'logTypeDaily/getLogItems',
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
}
</style>

