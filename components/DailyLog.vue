<template>
  <div class="-log">
    <LogList :items="pageContent.items"></LogList>
    <LogInput />
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';
import LogList from '~/components/LogList.vue';
import LogInput from '~/components/LogInput.vue';

export default {
  name: 'DailyLog',
  components: { LogList, LogInput },
  props: ['pageContent'],
  methods: {
    ...mapMutations('dailyLog', {
      clearLogItems: 'CLEAR_LOG_ITEMS',
    }),
    ...mapActions('dailyLog', {
      setLogItems: 'setLogItems',
    }),
  },
  mounted() {
    this.clearLogItems();
    this.setLogItems();
  },
};
</script>

<style lang="scss" scoped>
.daily-log {
}
</style>

