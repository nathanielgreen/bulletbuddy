<template>
  <div class="menu">
    <header class="menu__header">
      <h1 class="menu__header-title">Settings</h1>
      <span class="menu__header-headway" id="headway"></span>
    </header>
    <DeleteAllPagesButton class="menu__item"/>
  </div>
</template>

<script>
import DeleteAllPagesButton from '~/components/DeleteAllPagesButton.vue';

export default {
  name: 'Menu',
  components: {
    DeleteAllPagesButton,
  },
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
          src: 'https://cdn.headwayapp.co/widget.js',
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
@import '~/assets/variables.scss';

.menu {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  &__header {
    background: $color-white;
    border-color: $color-grey;
    border-style: none none dotted none;
    border-width: 3px;
    display: flex;
    height: auto;
    justify-content: space-between;
    width: 100%;

    &-title {
      font-size: 18px;
      font-weight: bold;
      padding: 10px;
    }

    &-headway {
      align-items: center;
      display: flex;
      height: 40px;
      justify-content: center;
      position: absolute;
      right: 0;
      top: 0;
      width: 40px;
    }
  }

  &__item {
    align-self: center;
    text-align: center;
    margin: 20px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 100%;
  }

}
</style>
