<template>
  <nav class="navbar">
    <nuxt-link class="navbar__item" to="/">Index</nuxt-link>
    <nuxt-link class="navbar__item" to="/add-new">New Log</nuxt-link>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style lang="scss">
.navbar {
  display: flex;
  align-items: center;
  justify-content: center;

  &__item {
    flex: 1;
    height: 100%;
    text-align: center;
    margin: 0 auto;
  }
}
</style>
