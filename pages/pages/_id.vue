<template>
  <div class="page">
    <List class="page__list"></List>
    <Input class="page__input"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import List from '~/components/List.vue';
import Input from '~/components/Input.vue';

export default {
  layout: 'default',
  computed: {
    ...mapGetters([
      'getViewedItems',
    ]),
  },
  components: {
    List,
    Input,
  },
  async validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  async asyncData({ store, params, error }) {
    const pages = await store.getters.getPages;
    const data = pages[params.id];
    if (data == null) {
      error({ message: 'Page not found', statusCode: 404 });
    } else {
      store.commit('UPDATE_VIEWED_ITEMS', params.id);
    }
  },
};
</script>

<style lang="scss">
.page {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  &__list {
  }
  &__input {
    width: 20vw;
  }
}
</style>
