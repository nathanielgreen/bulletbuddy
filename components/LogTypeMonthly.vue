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
      <div class="monthly-log__item-items">
        <LogList :items="item.items" />
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

  &__item {
    align-items: center;
    display: flex;
    font-size: 18px;
    justify-content: space-between;
    margin: 20px;
    padding: 4px;

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

        &:hover {}

        &-img {
          height: 20px;
          width: 20px;
        }
      }
    }

  }
}
</style>
