<template>
  <div class="menu">
    <div class="menu__headway" id="headway">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  head() {
    return {
      script: [
        {
          innerHTML: `
            var HW_config = {
              selector: '.menu__headway',
              account: 'xbgK17',
            };
          `,
          type: 'text/javascript',
          body: true,
          async: true,
        },
        {
          src: 'http://cdn.headwayapp.co/widget.js',
          type: 'text/javascript',
          body: true,
          async: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.menu {
  height: 100%;
  width: 100%;


  &__headway {
    height: 100%;
    width: 100%;
  }
}
</style>
