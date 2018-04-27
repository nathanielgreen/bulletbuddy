<template>
  <div class="menu">
    <span class="menu-headway" id="headway"></span>
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
.menu {
  display: flex;
  height: 100%;
  width: 100%;

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
