<template>
  <div class="add-new">
    <button
      class="add-new__button"
      v-on:click="addNewDailyLog"
    >New Daily Log</button>
  </div>
</template>

<script>
export default {
  name: 'AddNew',
  methods: {
    addNewDailyLog() {
      this.$store.commit('ADD_NEW_DAILY_LOG');
    },
  },
};
</script>

<style lang="scss">
</style>
