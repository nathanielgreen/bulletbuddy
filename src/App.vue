<template>
  <div id="app">
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view/>
    </transition>
    <Navbar />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  mounted() {
    this.$store.dispatch('getPages');
  },
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
html
{
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
body {
  height: 100%;
  overflow-x: hidden;
  width: 100%;
}
a {
  text-decoration: none;
  color: inherit;
}
#app {
  height: 90%;
  width: 100%;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
