<template>
  <section class="future-log">
    <div
      class="future-log__month"
      v-for="(monthObj, index) in months"
      :key="index"
    >
      <h3 class="future-log__month-header">{{ monthObj.month }}</h3>
      <LogList
        :logItems="monthObj.items"
        @emitToggleTask="toggleTask"
      >
      </LogList>
      <LogInput @emitAddItem="addItem({ item: $event, month: monthObj.month })"></LogInput>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import LogInput from '../components/LogInput.vue';
import LogList from '../components/LogList.vue';
import helpers from '../assets/js/helpers';

export default {
  name: 'FutureLog',
  mixins: [helpers],
  components: {
    LogInput,
    LogList,
  },
  computed: {
    ...mapGetters('activePage', {
      activePageContent: 'getActivePageContent',
      activePageCreatedAt: 'getActivePageCreatedAt',
    }),
    months() {
      const content = this.activePageContent;
      const monthsArr = this.createFutureMonthsArray(this.activePageCreatedAt);
      const monthsWithContent = monthsArr.map(monthObj => ({
        month: monthObj.month,
        items: content.items.filter(item => item.month === monthObj.month),
      }));
      return monthsWithContent;
    },
  },
  methods: {
    ...mapActions('futureLog', [
      'addItem',
      'toggleTask',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.future-log {

  &__month {
    min-height: 200px;
    border-bottom: 2px solid #cccccc;

    &-header {
      padding: 4px;
    }
  }
}
</style>
