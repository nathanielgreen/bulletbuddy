<template>
  <div class="list">
    <ul class="list__list" v-for="(value, index) in items" :key="index">
      <li
        class="list__list-item"
        v-if="value.type != 'checkbox'"
      >{{ value.value }}</li>
      <input
        class="list__list-item"
        v-if="value.type == 'checkbox'"
        value="value.value"
        type="checkbox"
      />
      <label
        v-if="value.type == 'checkbox'"
        for="checkbox"
      >{{ value.value }}</label>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'List',
  computed: {
    ...mapGetters({
      items: 'getItems',
    }),
  },
};
</script>

<style lang="scss">
</style>
