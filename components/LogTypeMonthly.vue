<template>
  <div class="monthly-log">
    <div
      class="monthly-log__item"
      v-for="item in items"
      v-bind:key="item.index"
    >
      <div class="monthly-log__item-date">
        <span>{{ item.dayOfMonth }} {{ item.weekday }}</span>
      </div>
      <div class="monthly-log__item-options">
        <button class="monthly-log__item-options-button">
          <img
            class="monthly-log__item-options-button-img"
            src="../static/icons/plus.svg"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'LogTypeMonthly',
  methods: {
    ...mapMutations('logTypeMonthly', {
      clearLogItems: 'CLEAR_LOG_ITEMS',
    }),
    ...mapActions('logTypeMonthly', {
      setLogItems: 'setLogItems',
    }),
  },
  computed: {
    ...mapGetters({
      items: 'logTypeMonthly/getLogItems',
    }),
  },
  mounted() {
    this.clearLogItems();
    this.setLogItems();
  },
};
</script>

<style lang="scss" scoped>
.monthly-log {

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    font-size: 18px;

    &-options {
      &-button {
        border: none;
        border-radius: 6px;
        background: #eeeeee;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
        }

        &-img {
          height: 20px;
          width: 20px;
        }
      }

    }
  }
}
</style>
