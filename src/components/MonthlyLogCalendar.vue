<template>
  <div class="calendar">
    <div
      class="calendar__day"
      v-for="(day, index) in returnCalendar"
      :key="index"
    >
      <div class="calendar__day-label">
        {{ day.dayOfMonth }} {{ day.weekday }}
      </div>
      <div class="calendar__day-contents">
        <LogList
          class="calendar__day-item"
          :logItems="day.items"
          :logIndex="index"
          @toggleTask="toggleTask"
        ></LogList>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

import LogList from '../components/LogList.vue';
import helpers from '../assets/js/helpers';

export default {
  name: 'LogTypeMonthlyCalendar',
  components: {
    LogList,
  },
  mixins: [helpers],
  methods: {
    ...mapMutations('logTypeMonthly', {
      updateTask: 'UPDATE_TASK',
    }),
    toggleTask(emittedIndex, emittedLogIndex, emittedItem) {
      const itemIndex = this.logItems.indexOf(emittedItem);
      this.updateTask(itemIndex);
    },
  },
  computed: {
    ...mapGetters('logTypeMonthly', {
      logItems: 'getLogItems',
    }),
    returnCalendar() {
      const calendar = this.createCalendarArray();
      for (let i = 0; i < this.logItems.length; i += 1) {
        if (this.logItems[i].day !== '') {
          calendar[Number(this.logItems[i].day) - 1].items.push(this.logItems[i]);
        }
      }
      return calendar;
    },
  },
};
</script>

<style lang="scss" scoped>
.calendar {
  &__day {
    background: #ffffff;
    margin: 8px;
    padding: 12px;
    width: auto;
  }
}
</style>
