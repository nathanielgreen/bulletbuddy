<template>
  <div class="calendar">
    <div
      class="calendar__day"
      v-for="(day, index) in days"
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
  mixins: [helpers],
  components: {
    LogList,
  },
  methods: {
    ...mapActions('monthlyLog', [
      'toggleTask',
    ]),
  },
  computed: {
    ...mapGetters('activePage', {
      activePageContent: 'getActivePageContent',
      activePageCreatedAt: 'getActivePageCreatedAt',
    }),
    days() {
      const content = this.activePageContent;
      const dayArr = this.createMonthlyLogCalendarArray(this.activePageCreatedAt);
      const daysWithContent = dayArr.map(dayObj => ({
        weekday: dayObj.weekday,
        dayOfMonth: dayObj.dayOfMonth,
        items: content.items.filter(item => item.dayOfMonth === dayObj.dayOfMonth),
      }));
      return daysWithContent;
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

    &-label {
      font-weight: bold;
      color: rgba(0,0,0,0.7);

    }
  }
}
</style>
