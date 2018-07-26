<template>
  <div class="-log">
    <LogList :items="items"></LogList>
    <LogInput />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import LogList from '~/components/LogList.vue';
import LogInput from '~/components/LogInput.vue';

export default {
  name: 'DailyLog',
  components: { LogList, LogInput },
  computed: {
    ...mapGetters({
      items: 'dailyLog/getLogItems',
    }),
  },
};
</script>

<style lang="scss" scoped>
.daily-log {
}
</style>

