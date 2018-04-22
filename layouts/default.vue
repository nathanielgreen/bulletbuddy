<template>
  <div class="layout--default">
    <Modal />
    <nuxt/>
    <Navbar class="layout__navbar" />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import Modal from '~/components/Modal.vue';

export default {
  components: {
    Navbar,
    Modal,
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
a {
  text-decoration: none;
  color: inherit;
}
#__nuxt {
  height: 91%;
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
