<template>
  <nav class="navbar">
    <router-link class="navbar__item" to="/">
      <IconBase class="navbar__item-img"><IconBookmark /></IconBase>
      <label>Index</label>
    </router-link>
    <div class="navbar__item" @click="goToDailyLog($router)">
      <IconBase class="navbar__item-img"><IconClipboard /></IconBase>
      <label>Daily Log</label>
    </div>
    <div class="navbar__item" @click="goToMonthlyLog($router)">
      <IconBase class="navbar__item-img"><IconCalendar /></IconBase>
      <label>Monthly Log</label>
    </div>
    <router-link class="navbar__item" to="/add-new">
      <IconBase class="navbar__item-img"><IconFilePlus /></IconBase>
      <label>New Page</label>
    </router-link>
    <router-link class="navbar__item navbar__item--menu" to="/menu">
      <IconBase class="navbar__item-img"><IconMenu /></IconBase>
      <label style="visibility: hidden;">Settings</label>
    </router-link>
  </nav>
</template>

<script>
import { mapActions } from 'vuex';
import IconBase from './icons/IconBase.vue';
import IconBookmark from './icons/IconBookmark.vue';
import IconCalendar from './icons/IconCalendar.vue';
import IconClipboard from './icons/IconClipboard.vue';
import IconFilePlus from './icons/IconFilePlus.vue';
import IconMenu from './icons/IconMenu.vue';

export default {
  name: 'Navbar',
  components: {
    IconBase,
    IconBookmark,
    IconCalendar,
    IconClipboard,
    IconFilePlus,
    IconMenu,
  },
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
  background: $color-mint-green;
  color: $color-darker-white;
  display: flex;
  height: 10%;
  justify-content: center;
  position: absolute;
  width: 100%;

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    flex-direction: column;
    flex: 1;
    height: 100%;
    text-align: center;
    margin: 0 auto;
    outline: none;
    font-size: 12px;
    font-weight: bold;
    word-wrap: break-word;

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
