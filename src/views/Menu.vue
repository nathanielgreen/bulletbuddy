<template>
  <div class="menu">
    <div class="menu__header">
      <h1 class="menu__header-title">Dangerous Operations</h1>
      <p class="menu__header-label">
        These are dangerous operations and should be used with caution.
      </p>
    </div>
    <DeleteAllPagesButton class="menu__item"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import DeleteAllPagesButton from '../components/DeleteAllPagesButton.vue';

export default {
  name: 'Menu',
  components: {
    DeleteAllPagesButton,
  },
  methods: {
    ...mapActions('activePage', ['updateActivePage']),
  },
  mounted() {
    this.updateActivePage({
      type: 'Bulk page actions and local settings.',
      index: null,
      header: 'Settings',
    });
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

  &__header {
    margin-top: 60px;
    padding: 20px;

    &-title {
      font-size: 18px;
      color: $color-danger-red;
    }
    &-label {
      font-size: 12px;
      color: #676767;
    }
  }

  &__item {
    align-self: center;
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 100%;
  }

}
</style>
