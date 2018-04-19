<template>
  <div class="add-new">
    <button
      class="add-new__button"
      v-on:click="addNewDailyLog"
    >New Daily Log</button>
    <button
      class="add-new__button"
      v-on:click="addNewMonthlyLog"
    >New Monthly Log</button>
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
    addNewMonthlyLog() {
      this.$store.dispatch('addNewMonthlyLog')
        .then(() => {
          this.$router.push(`/pages/${this.getTotalPages}`);
        });
    },
  },
};
</script>

<style lang="scss">
.add-new {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  &__button {
    background: none;
    padding: 18px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }
}
</style>
