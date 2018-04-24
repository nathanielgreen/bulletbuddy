<template>
  <div class="menu">
    <div class="menu__item">
      <h1 class="menu__item-header">Latest Changes:</h1>
      <span class="menu__item-headway" id="headway"></span>
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
              selector: '#headway',
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

  &__item {
    border-bottom: solid;
    display: flex;
    aling-items: center;
    justify-content: center;
    border-color: #cccccc;
    border-width: 1px;
    height: 60px;

    &-header {
      display: flex;
      align-items: center;
    }
    &-headway {
      display: flex;
      align-items: center;
    }
  }
}
</style>
