<template>
  <nav class="navbar">
    <nuxt-link class="navbar__item" to="/">
      <img class="navbar__item-img" src="../static/icons/bookmark.svg" />
      <label>Index</label>
    </nuxt-link>
    <div class="navbar__item" @click="goToDailyLog($router)">
      <img class="navbar__item-img" src="../static/icons/clipboard.svg" />
      <label>Daily Log</label>
    </div>
    <div class="navbar__item" @click="goToMonthlyLog($router)">
      <img class="navbar__item-img" src="../static/icons/calendar.svg" />
      <label>Monthly Log</label>
    </div>
    <nuxt-link class="navbar__item" to="/add-new">
      <img class="navbar__item-img" src="../static/icons/file-plus.svg" />
      <label>New Page</label>
    </nuxt-link>
    <nuxt-link class="navbar__item navbar__item--menu" to="/menu">
      <img class="navbar__item-img" src="../static/icons/more-vertical.svg" />
      <label>More</label>
    </nuxt-link>
  </nav>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Navbar',
  methods: {
    ...mapActions([
      'goToDailyLog',
      'goToMonthlyLog',
    ]),
  },
};
</script>

<style lang="scss">
.navbar {
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;

  &__item {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    height: 100%;
    text-align: center;
    margin: 0 auto;
    outline: none;
    font-size: 12px;
    word-wrap: break-word;

    &--menu {
      color: #ffffff;
      flex: .5;
    };

    &:active {
      background-color: #f1f1f1;
    }
  }
}
</style>
