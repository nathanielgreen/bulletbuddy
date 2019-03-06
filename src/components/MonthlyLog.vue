<template>
  <div class="monthly-log">
    <div class="monthly-log__tabs">
      <div
        class="monthly-log__tabs-tab monthly-log__tabs-tab--calendar"
        :class="{selected: isCalendar}"
        @click="isCalendar = !isCalendar"
      >Calendar View</div>
      <div
        class="monthly-log__tabs-tab
          monthly-log__tabs-tab--list"
        :class="{selected: !isCalendar}"
        @click="isCalendar = !isCalendar"
      >List View</div>
    </div>
    <MonthlyLogList class="monthly-log__list" v-if="!isCalendar" />
    <MonthlyLogCalendar class="monthly-log__calendar" v-if="isCalendar" />
  </div>
</template>

<script>
import MonthlyLogList from '../components/MonthlyLogList.vue';
import MonthlyLogCalendar from '../components/MonthlyLogCalendar.vue';

export default {
  name: 'LogTypeMonthly',
  data() {
    return {
      isCalendar: false,
    };
  },
  components: {
    MonthlyLogList,
    MonthlyLogCalendar,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/global.scss';
@import '@/assets/scss/variables.scss';

.monthly-log {

  &__list {
    margin-top: 53px;
  }
  &__calendar {
    background: $color-darker-white;
    margin-top: 53px;
  }
  &__tabs {
    align-items: center;
    background: white;
    border-radius: 12px;
    justify-content: center;
    text-align: center;
    display: flex;
    padding: 10px;
    position: fixed;
    width: 100%;

    &-tab {
      flex: 1;
      background: $color-darker-white;
      font-weight: bold;
      padding: 6px;
      color: rgba(0,0,0,0.4);
      border-radius: 12px;
    }
  }
}

.selected {
  background: $color-mint-green;
  color: $color-darker-white;
}
</style>

