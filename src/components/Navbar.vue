<template>
  <nav class="navbar">
    <router-link class="navbar__item" to="/">
      <IconBase class="navbar__item-img"><IconBookmark /></IconBase>
    </router-link>
    <div class="navbar__item" @click="goToDailyLog($router)">
      <IconBase class="navbar__item-img"><IconClipboard /></IconBase>
    </div>
    <div class="navbar__item" @click="goToMonthlyLog($router)">
      <IconBase class="navbar__item-img"><IconCalendar /></IconBase>
    </div>
    <router-link class="navbar__item" to="/add-new">
      <IconBase class="navbar__item-img"><IconFilePlus /></IconBase>
    </router-link>
    <router-link class="navbar__item navbar__item" to="/menu">
      <IconBase class="navbar__item-img"><IconSettings /></IconBase>
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
import IconSettings from './icons/IconSettings.vue';

export default {
  name: 'Navbar',
  components: {
    IconBase,
    IconBookmark,
    IconCalendar,
    IconClipboard,
    IconFilePlus,
    IconSettings,
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
  box-shadow: 0px -4px 10px rgba(0,0,0,0.1);
  background: $color-white;
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

    &-img {
      height: 30px;
      width: 30px;
    }
  }
}
</style>
