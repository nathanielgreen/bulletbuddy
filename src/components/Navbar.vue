<template>
  <nav class="navbar">
    <router-link class="navbar__item" to="/">
      <img
        class="navbar__item-img"
        src="../assets/icons/bookmark.svg"
        alt="Bookmark"
      />
      <label>Index</label>
    </router-link>
    <div class="navbar__item" @click="goToDailyLog($router)">
      <img
        class="navbar__item-img"
        src="../assets/icons/clipboard.svg"
        alt="Clipboard"
      />
      <label>Daily Log</label>
    </div>
    <div class="navbar__item" @click="goToMonthlyLog($router)">
      <img
        class="navbar__item-img"
        src="../assets/icons/calendar.svg"
        alt="Calendar"
      />
      <label>Monthly Log</label>
    </div>
    <router-link class="navbar__item" to="/add-new">
      <img
        class="navbar__item-img"
        src="../assets/icons/file-plus.svg"
        alt="File Plus"
      />
      <label>New Page</label>
    </router-link>
    <router-link class="navbar__item navbar__item--menu" to="/menu">
      <img
        class="navbar__item-img"
        src="../assets/icons/more-vertical.svg"
        alt="More Menu"
      />
      <label>Settings</label>
    </router-link>
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
@import '@/assets/scss/variables.scss';

.navbar {
  align-items: center;
  bottom: 0;
  background: $color-white;
  border-color: $color-grey;
  border-style: dotted none none none;
  border-width: 3px;
  display: flex;
  height: 10%;
  justify-content: center;
  position: absolute;
  width: 100%;

  &__item {
    display: flex;
    justify-content: center;
    cursor: pointer;
    flex-direction: column;
    flex: 1;
    height: 100%;
    text-align: center;
    margin: 0 auto;
    outline: none;
    font-size: 12px;
    word-wrap: break-word;

    & label {
      color: $color-lighter-black;
    }

    &--menu {
      flex: .5;
      & label {
        color: $color-white;
      }
    };

    &:active {
      background-color: $color-white;
    }
  }
}
</style>
