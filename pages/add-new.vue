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
      this.$store.dispatch('addNewDailyLog')
        .then(() => {
          this.$router.push('/pages/1');
        });
    },
  },
};
</script>

<style lang="scss">
</style>
