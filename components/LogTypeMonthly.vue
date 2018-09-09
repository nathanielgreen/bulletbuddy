<template>
  <div class="monthly-log">
    <div class="monthly-log__tabs">
      <div
        class="monthly-log__tabs-tab monthly-log__tabs-tab--calendar"
        :class="{selected: isCalendar}"
        @click="isCalendar = !isCalendar"
      >
        Calendar View
      </div>
      <div
        class="monthly-log__tabs-tab
          monthly-log__tabs-tab--list"
        :class="{selected: !isCalendar}"
        @click="isCalendar = !isCalendar"
      >
        List View
      </div>
    </div>
    <LogTypeMonthlyList v-if="!isCalendar" />
    <LogTypeMonthlyCalendar v-if="isCalendar" />
  </div>
</template>

<script>
import LogTypeMonthlyList from '~/components/LogTypeMonthlyList.vue';
import LogTypeMonthlyCalendar from '~/components/LogTypeMonthlyCalendar.vue';

export default {
  name: 'LogTypeMonthly',
  data() {
    return {
      isCalendar: false,
    };
  },
  components: {
    LogTypeMonthlyList,
    LogTypeMonthlyCalendar,
  },
};
</script>

<style lang="scss" scoped>
.monthly-log {

  &__tabs {
    align-items: center;
    justify-content: center;
    text-align: center;
    display: flex;
    margin: 10px;

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

