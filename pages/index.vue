<template>
  <section class="index">
    {{ getPages }}
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
};
</script>

<style style="scss">
.index {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center
}
</style>
