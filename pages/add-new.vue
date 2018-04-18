<template>
  <div class="add-new">
    <button
      class="add-new__button"
      v-on:click="addNewDailyLog"
    >New Daily Log</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AddNew',
  computed: {
    ...mapGetters([
      'getTotalPages',
    ]),
  },
  methods: {
    addNewDailyLog() {
      this.$store.dispatch('addNewDailyLog')
        .then(() => {
          this.$router.push(`/pages/${this.getTotalPages}`);
        });
    },
  },
};
</script>

<style lang="scss">
</style>
