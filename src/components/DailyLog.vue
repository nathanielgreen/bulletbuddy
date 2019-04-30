<template>
  <div class="daily-log">
    <LogList
      class="daily-log__list"
      :logItems="activePageContent ? activePageContent.items : []"
      @emitToggleTask="toggleTask"
    ></LogList>
    <LogInput class="daily-log__input" @emitAddItem="addItem($event)"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import LogList from '../components/LogList.vue';
import LogInput from '../components/LogInput.vue';

export default {
  name: 'DailyLog',
  components: { LogList, LogInput },
  computed: {
    ...mapGetters('activePage', {
      activePageContent: 'getActivePageContent',
    }),
  },
  methods: {
    ...mapActions('dailyLog', {
      addItem: 'addItem',
      toggleTask: 'toggleTask',
    }),
  },
};
</script>

<style lang="scss" scoped>
.daily-log {
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  &__list {
    height: 100%;
  }

  &__input {
    position: absolute;
    bottom: 0;
    z-index: 10;
    width: 100%;
  }
}
</style>

