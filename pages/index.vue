<template>
  <section class="index">
    <ul v-for="(value, key) in getPages" v-bind:key="key">
      <li v-on:click="goToPage(key)">{{ key }}</li>
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
  mounted() {
    if (Object.keys(this.getPages).length === 0) {
      this.$router.push('/add-new');
    }
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
