<template>
  <div class="menu">
    <span class="menu-headway" id="headway"></span>
    <div class="menu__item">
      <h3 v-if="timer.visible">Deleting ALL Pages in {{ timer.count }}</h3>
      <button
        oncontextmenu="return false;"
        class="menu__item-button"
        v-on:mousedown="deleteAllPages"
        v-on:mouseup="stopDeleteAllPages"
        v-on:touchstart="deleteAllPages"
        v-on:touchend="stopDeleteAllPages"
      >Delete ALL Pages</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      delay: '',
      countdown: '',
      timer: {
        visible: false,
        count: 3,
      },
    };
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
  methods: {
    deleteAllPages() {
      this.timer.visible = true;
      this.countdown = setInterval(() => {
        this.timer.count -= 1;
      }, 1000);
      this.delay = setTimeout(() => {
        this.timer.visible = false;
        this.timer.count = 3;
        clearInterval(this.countdown);
        console.log('hi');
      }, 3000);
    },
    stopDeleteAllPages() {
      clearTimeout(this.delay);
      clearInterval(this.countdown);
      this.timer.count = 3;
      this.timer.visible = false;
    },
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

    &-button {
      background: none;
      border: solid;
      border-width: 2px;
      border-radius: 4px;
      margin: 8px;
      padding: 8px;
      user-select: none;
      width: 50%;
    }

  }

}
</style>
