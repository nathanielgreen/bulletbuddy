<template>
  <div class="list">
    <div class="list__item"
      v-if="logItems.length >= 1"
      v-for="(item, index) in logItems"
      :key="index"
    >
      <div class="list__icon">
        <img
          src="../static/icons/square.svg"
          v-if="item.type === 'task' && item.checked === false"
          v-on:click="$emit('emitToggleTask', index)"
        />
        <img
          src="../static/icons/x-square.svg"
          v-if="item.type === 'task' && item.checked === true"
          v-on:click="$emit('emitToggleTask', index)"
        />
        <img
          v-if="item.type === 'note'"
          src="../static/icons/minus.svg"
        />
        <img
          v-if="item.type === 'event'"
          src="../static/icons/circle.svg"
        />
      </div>
      <div class="list__value">
        {{ item.value }}
      </div>
      <div class="list__date" v-if="item.options">
        {{ item.options.date }}
      </div>
      <form class="list__options" @submit.prevent="updateDay(item, index)">
        <input
          class="list__input"
          placeholder="DD"
          v-model="item.day"
        />
        <span class="list__suffix">/{{ item.monthAndYear }}</span>
      </form>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'LogListMonthly',
  props: ['logItems'],
  methods: {
    ...mapMutations({
      updateLogItemDay: 'logTypeMonthly/UPDATE_LOG_ITEM_DAY',
    }),
    updateDay(item, index) {
      this.updateLogItemDay({ item, index });
    },
  },
};
</script>

<style scoped>
.list {
  width: 100%;
  padding: 4px;
}
.list__item {
  display: grid;
  grid-template-areas:
    "icon value"
    ". options";
  grid-template-columns: 10% 90%;
  grid-template-rows: 80% 20%;
}
.list__value {
  grid-area: value;
  display: flex;
  margin: 4px;
  align-items: center;
}
.list__date {
  grid-area: date;
}
.list__icon {
  grid-area: icon;
  display: flex;
  align-items: center;
  justify-content: center;
}
.list__options {
  grid-area: options;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.list__input {
  border: none;
  font-size: 14px;
  width: 22px;
}
  .list__input:focus {
    border: solid;
    width: 40px;
    border-width: 2px;
    border-radius: 4px;
  }
.list__suffix {
  font-size: 14px;
}
</style>
