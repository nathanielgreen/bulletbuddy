<template>
  <div class="daily-log">
    <List :items="items"></List>
    <Input />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import List from '~/components/List.vue';
import Input from '~/components/Input.vue';

export default {
  name: 'DailyLog',
  components: { List, Input },
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

