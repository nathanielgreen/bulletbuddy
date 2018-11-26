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
          @emitToggleTask="toggleTask"
        ></LogList>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import LogList from '../components/LogList.vue';
import helpers from '../assets/js/helpers';

export default {
  name: 'LogTypeMonthlyCalendar',
  components: {
    LogList,
  },
  mixins: [helpers],
  methods: {
    ...mapActions('monthlyLog', [
      'toggleTask',
    ]),
  },
  computed: {
    ...mapGetters('activePage', {
      activePageContent: 'getActivePageContent',
    }),
    returnCalendar() {
      const content = this.activePageContent;
      const calendar = this.createCalendarArray();
      for (let i = 0; i < content.items.length; i += 1) {
        if (content.items[i].day !== '') {
          calendar[Number(content.items[i].day) - 1].items.push(content.items[i]);
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
