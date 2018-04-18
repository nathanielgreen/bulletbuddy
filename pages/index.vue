<template>
  <section class="index">
    <ul v-for="(key, value) in getPages" v-bind:key="key">
      <li v-on:click="goToPage(value)">{{ value }}</li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'getPages',
    ]),
  },
  methods: {
    goToPage(value) {
      this.$router.push(`/pages/${value}`);
    },
  },
};
</script>

<style style="scss">
.index {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
