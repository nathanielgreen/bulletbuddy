<template>
  <div class="monthly-list">
    <LogListMonthly
      :logItems="activePageContent ? activePageContent.items : []"
      @emitToggleTask="toggleTask($event)"
      @emitUpdateDay="updateDay($event)"
    />
    <LogInput class="monthly-list" @emitAddItem="addItem($event)" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import LogInput from '../components/LogInput.vue';
import LogListMonthly from '../components/LogListMonthly.vue';

export default {
  name: 'LogTypeMonthlyList',
  components: {
    LogInput,
    LogListMonthly,
  },
  computed: {
    ...mapGetters('activePage', {
      activePageContent: 'getActivePageContent',
    }),
  },
  methods: {
    ...mapActions('monthlyLog', [
      'addItem',
      'toggleTask',
      'updateDay',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.monthly-list {
  &__item {
    display: flex;
    margin: 4px;
    align-items: center;
    justify-content: flex-start;

    &__icon {
      flex: 1;
      height: 30px;
      width: 30px;

      &-img {
        height: 30px;
        width: 30px;
      }
    }
    &__label {
      font-size: 18px;
      padding-left: 16px;
      flex: 8;
    }
  }
}
</style>
