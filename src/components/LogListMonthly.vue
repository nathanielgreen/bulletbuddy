<template>
  <div class="list">
    <div class="list__item"
      v-if="logItems.length >= 1"
      v-for="(item, index) in logItems"
      :key="index"
    >
      <div class="list__icon">
        <img
          class="list__icon-img"
          src="../assets/icons/square.svg"
          v-if="item.type === 'task' && item.checked === false"
          v-on:click="$emit('emitToggleTask', item)"
        />
        <img
          class="list__icon-img"
          src="../assets/icons/x-square.svg"
          v-if="item.type === 'task' && item.checked === true"
          v-on:click="$emit('emitToggleTask', item)"
        />
        <img
          class="list__icon-img"
          v-if="item.type === 'note'"
          src="../assets/icons/minus.svg"
        />
        <img
          class="list__icon-img"
          v-if="item.type === 'event'"
          src="../assets/icons/circle.svg"
        />
      </div>
      <div class="list__value">
        {{ item.value }}
      </div>
      <div class="list__date" v-if="item.options">
        {{ item.options.date }}
      </div>
      <form
        class="list__options"
        @submit.prevent="$emit('emitUpdateDay', { item, index })"
      >
        <input
          class="list__options-input"
          placeholder="...."
          v-model="item.day"
        />
        <span class="list__options-suffix">/{{ item.monthAndYear }}</span>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogListMonthly',
  props: ['logItems'],
};
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
}
.list__item {
  display: grid;
  grid-template-areas:
    "icon value"
    ". options";
  grid-template-columns: 1fr 8fr;
  grid-template-rows: 80% 20%;
  padding: 10px 20px 0 20px;
}
.list__value {
  grid-area: value;
  display: flex;
  align-items: center;
}
.list__date {
  grid-area: date;
}
.list__icon {
  align-items: center;
  display: flex;
  grid-area: icon;
  justify-content: center;

  &-img {
    height: 30px;
    width: 30px;
  }
}
.list__options {
  grid-area: options;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &-input {
    background: none;
    border: solid;
    border-width: 2px;
    border-color: rgba(0,0,0,0);
    color: #000000;
    font-size: 14px;
    width: 23px;

    &:focus {
      border: solid;
      width: 40px;
      border-width: 2px;
      border-radius: 4px;
    }
  }
  &-suffix {
    font-size: 14px;
  }
}
</style>
