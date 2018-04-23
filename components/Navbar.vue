<template>
  <nav class="navbar">
    <nuxt-link class="navbar__item" to="/">
      <img class="navbar__item-img" src="../static/icons/bookmark.svg" />
      <label>Index</label>
    </nuxt-link>
    <nuxt-link class="navbar__item" to="/add-new">
      <img class="navbar__item-img" src="../static/icons/file-plus.svg" />
      <label>New Page</label>
    </nuxt-link>
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
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    height: 100%;
    text-align: center;
    margin: 0 auto;
    outline: none;

    &:hover {
      background-color: #f1f1f1;
    }
  }
}
</style>
