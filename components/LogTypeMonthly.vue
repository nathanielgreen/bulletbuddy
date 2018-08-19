<template>
  <div class="log--monthly">
    <div
      class="log--monthly__item"
      v-for="(item, index) in items"
      v-bind:key="index"
    >
      <div class="log--monthly__item-info">
        <span class="log--monthly__item-info-date">
          {{ item.dayOfMonth }} {{ item.weekday }}
        </span>
      </div>
      <div class="log--monthly__item-items">
        <LogList
          @toggleTask="toggleTask"
          :logItems="item.items"
          :logIndex="index"
        />
      </div>
      <div class="log--monthly__item-options">
        <button
          class="log--monthly__item-options-button"
          @click="showInputForItem(item, index)"
        >
          <img
            class="log--monthly__item-options-button-img"
            src="../static/icons/plus.svg"
          />
        </button>
      </div>
    </div>
    <LogInput
      v-if="showLogInput"
      class="log--monthly__input"
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
      selectedItemIndex: '',
    };
  },
  components: {
    LogInput,
    LogList,
  },
  methods: {
    ...mapMutations('logTypeMonthly', {
      clearLogItems: 'CLEAR_LOG_ITEMS',
      updateTask: 'UPDATE_TASK',
    }),
    ...mapActions('logTypeMonthly', {
      setLogItems: 'setLogItems',
      addLogItem: 'addLogItem',
    }),
    showInputForItem(item, index) {
      this.showLogInput = true;
      this.selectedItem = item;
      this.selectedItemIndex = index;
    },
    addItem(emittedItem) {
      const data = {
        index: this.selectedItemIndex,
        item: emittedItem,
      };
      this.addLogItem(data);
      this.showLogInput = false;
    },
    toggleTask(itemsIndex, monthlyLogIndex) {
      const payload = {
        itemIndex: itemsIndex,
        logIndex: monthlyLogIndex,
      };
      this.updateTask(payload);
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
.log--monthly {
  height: auto;
  background: #eeeeee;
  padding-bottom: 20%;

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
      margin-right: 15px;
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
      margin-left: 15px;

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

  &__input {
    position: absolute;
    bottom: 10%;
  }
}
</style>
