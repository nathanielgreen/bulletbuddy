<template>
  <div class="layout--default">
    <nuxt/>
    <Navbar class="layout__navbar" />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
html
{
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  height: 100%;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
body {
  height: 100%;
}
#__nuxt {
  height: 90%;
}
#__layout {
  height: 100%;
}
.layout--default {
    height: 100%;
}
.layout__navbar {
  height: 10%;
}
</style>
