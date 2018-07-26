<template>
  <div class="-log">
    <LogList :items="content"></LogList>
    <LogInput />
  </div>
</template>

<script>
import LogList from '~/components/LogList.vue';
import LogInput from '~/components/LogInput.vue';

export default {
  name: 'DailyLog',
  components: { LogList, LogInput },
  props: ['content'],
};
</script>

<style lang="scss" scoped>
.daily-log {
}
</style>

