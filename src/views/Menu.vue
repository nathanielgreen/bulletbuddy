<template>
  <div class="menu">
    <DeleteAllPagesButton class="menu__item"/>
  </div>
</template>

<script>
import DeleteAllPagesButton from '../components/DeleteAllPagesButton.vue';

export default {
  name: 'Menu',
  components: {
    DeleteAllPagesButton,
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

.menu {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

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
