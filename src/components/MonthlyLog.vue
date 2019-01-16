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
.monthly-log {

  &__list {
    margin-top: 53px;
  }
  &__calendar {
    margin-top: 53px;
  }
  &__tabs {
    align-items: center;
    background: white;
    justify-content: center;
    text-align: center;
    display: flex;
    padding: 10px;
    position: fixed;
    width: 100%;

    &-tab {
      flex: 1;
      border: solid 3px;
      padding: 3px;

      &--calendar {
        border-radius: 4px 0px 0px 4px;
        border-right: solid 1px;
      }
      &--list {
        border-radius: 0px 4px 4px 0px;
        border-left: solid 1px;
      }
    }
  }
}

.selected {
  background: #000000;
  border: solid;
  border-color: #000000;
  color: #ffffff;
}
</style>

