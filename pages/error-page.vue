<template>
  <section class="error-page">
    <h1 class="error-page__header" v-if="logType === 'DL'">
      No existing Daily Log for today.
    </h1>
    <h1 class="error-page__header" v-if="logType === 'ML'">
      No existing Monthly Log for this month.
    </h1>
  </section>
</template>

<script>
export default {
  name: 'ErrorPage',
  data() {
    return {
      logType: this.$route.query.logType,
    };
  },
};
</script>

<style class="scss" scoped>
.error-page {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: #a1a1a1;
}
</style>

