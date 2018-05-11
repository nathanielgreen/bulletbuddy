import Vue from 'vue';

const mutations = {
  ADD_NOTE(state, val) {
    const note = {
      type: 'note',
      value: val,
    };
    state.viewedItems.push(note);
  },
  ADD_EVENT(state, val) {
    const event = {
      type: 'event',
      value: val,
    };
    state.viewedItems.push(event);
  },
  ADD_TASK(state, val) {
    const task = {
      type: 'task',
      value: val,
      checked: false,
    };
    state.viewedItems.push(task);
  },
  DELETE_ITEM(state) {
    Vue.delete(state.viewedItems, state.modal.item.index);
  },
  DELETE_PAGE(state, index) {
    state.pages.splice(index, 1);
  },
  DELETE_ALL_PAGES(state) {
    state.pages = [];
  },
  TOGGLE_TASK(state, index) {
    console.log(index);
    const task = state.viewedItems[index];
    task.checked = !task.checked;
  },
  TOGGLE_SHOW_MODAL(state, value) {
    state.modal.show = !state.modal.show;
    state.modal.item = value;
  },
  ADD_NEW_DAILY_LOG(state, currentDate) {
    const page = {
      type: 'DL',
      header: currentDate,
      items: [],
    };
    state.pages.push(page);
  },
  ADD_NEW_MONTHLY_LOG(state, currentMonth) {
    const page = {
      type: 'ML',
      header: currentMonth,
      items: [],
    };
    state.pages.push(page);
  },
  UPDATE_VIEWED_ITEMS(state, value) {
    state.viewedItems = state.pages[value].items;
  },
  UPDATE_VIEWED_HEADER(state, value) {
    state.viewedHeader = state.pages[value].header;
  },
};

export default mutations;
