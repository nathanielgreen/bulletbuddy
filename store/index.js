import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';

const store = () => new Vuex.Store({
  state: {
    viewedItems: {},
    viewedHeader: '',
    pages: [],
    modal: {
      show: false,
      item: '',
    },
  },
  getters: {
    getViewedItems: state => state.viewedItems,
    getViewedHeader: state => state.viewedHeader,
    getPages: state => state.pages,
    getModal: state => state.modal,
  },
  mutations: {
    ADD_NOTE(state, val) {
      const size = Object.keys(state.viewedItems).length;
      const note = {
        index: size + 1,
        type: 'note',
        value: val,
      };
      Vue.set(state.viewedItems, (size + 1), note);
    },
    ADD_EVENT(state, val) {
      const size = Object.keys(state.viewedItems).length;
      const event = {
        index: size + 1,
        type: 'event',
        value: val,
      };
      Vue.set(state.viewedItems, (size + 1), event);
    },
    ADD_TASK(state, val) {
      const size = Object.keys(state.viewedItems).length;
      const task = {
        index: size + 1,
        type: 'task',
        value: val,
        checked: false,
      };
      Vue.set(state.viewedItems, (size + 1), task);
    },
    DELETE_ITEM(state) {
      Vue.delete(state.viewedItems, state.modal.item.index);
    },
    DELETE_PAGE(state, index) {
      state.pages.splice(index, 1);
    },
    TOGGLE_TASK(state, data) {
      const task = state.viewedItems[data.index];
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
        items: {},
      };
      state.pages.push(page);
    },
    ADD_NEW_MONTHLY_LOG(state, currentMonth) {
      const page = {
        type: 'ML',
        header: currentMonth,
        items: {},
      };
      state.pages.push(page);
    },
    UPDATE_VIEWED_ITEMS(state, value) {
      state.viewedItems = state.pages[value].items;
    },
    UPDATE_VIEWED_HEADER(state, value) {
      state.viewedHeader = state.pages[value].header;
    },
  },
  actions,
});

export default store;
