<template>
  <div class="-log">
    <List :items="items"></List>
    <Input />
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
      items: 'getViewedItems',
    }),
  },
};
</script>

<style lang="scss" scoped>
.daily-log {
}
</style>

