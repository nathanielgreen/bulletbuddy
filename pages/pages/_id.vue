<template>
  <div class="page">
    <List></List>
    <Input />
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
      store.commit('UPDATE_VIEWED_ITEMS', data);
    }
  },
};
</script>

<style lang="scss">
</style>
