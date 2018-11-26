<template>
  <div class="daily-log">
    <LogList
      :logItems="activePageContent ? activePageContent.items : []"
      @emitToggleTask="toggleTask"
    ></LogList>
    <LogInput @emitAddItem="addItem($event)"/>
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
}
</style>

