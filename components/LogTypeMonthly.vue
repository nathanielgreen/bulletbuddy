<template>
  <div class="monthly-log">
    <div
      class="monthly-log__item"
      v-for="item in items"
      v-bind:key="item.index"
    >
      <div class="monthly-log__item-info">
        <span class="monthly-log__item-info-date">
          {{ item.dayOfMonth }} {{ item.weekday }}
        </span>
      </div>
      <div class="monthly-log__item-items">
        <LogList class="monthly-log__item-items-list" :items="item.items" />
      </div>
      <div class="monthly-log__item-options">
        <button
          class="monthly-log__item-options-button"
          @click="showInputForItem(item)"
        >
          <img
            class="monthly-log__item-options-button-img"
            src="../static/icons/plus.svg"
          />
        </button>
      </div>
    </div>
    <LogInput
      v-if="showLogInput"
      @emitAddItem="addItem"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import LogInput from '~/components/LogInput.vue';
import LogList from '~/components/LogList.vue';

export default {
  name: 'LogTypeMonthly',
  data() {
    return {
      showLogInput: false,
      selectedItem: '',
    };
  },
  components: {
    LogInput,
    LogList,
  },
  methods: {
    ...mapMutations('logTypeMonthly', {
      clearLogItems: 'CLEAR_LOG_ITEMS',
    }),
    ...mapActions('logTypeMonthly', {
      setLogItems: 'setLogItems',
    }),
    showInputForItem(item) {
      this.showLogInput = true;
      this.selectedItem = item;
    },
    addItem(emittedItem) {
      this.selectedItem.items.push(emittedItem);
      this.showLogInput = false;
    },
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
  height: auto;
  background: #eeeeee;

  &__item {
    align-items: center;
    background: #ffffff;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    display: flex;
    font-size: 18px;
    margin: 16px;
    padding: 10px;

    &-info {
      align-self: flex-start;
      height: 30px;
      display: flex;

      &-date {
        align-self: center;
      }
    }

    &-items {
      flex: 1;
      display: flex;
    }

    &-options {
      align-self: flex-start;

      &-button {
        border: none;
        border-radius: 6px;
        background: #f1f1f1;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {}

        &-img {
          height: 18px;
          width: 18px;
        }
      }
    }

  }
}
</style>
