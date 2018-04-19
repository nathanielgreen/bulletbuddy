import Vue from 'vue';
import Vuex from 'vuex';
import Moment from 'moment';

const store = () => new Vuex.Store({
  state: {
    viewedItems: {},
    pages: {},
  },
  getters: {
    getViewedItems: state => state.viewedItems,
    getPages: state => state.pages,
    getTotalPages: state => Object.keys(state.pages).length,
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
    TOGGLE_TASK(state, data) {
      const task = state.viewedItems[data.index];
      task.checked = !task.checked;
    },
    ADD_NEW_DAILY_LOG(state, currentDate) {
      const size = Object.keys(state.pages).length;
      Vue.set(state.pages, (size + 1), {
        type: 'DL',
        date: currentDate,
        items: {},
      });
    },
    ADD_NEW_MONTHLY_LOG(state, currentMonth) {
      const size = Object.keys(state.pages).length;
      Vue.set(state.pages, (size + 1), {
        type: 'ML',
        month: currentMonth,
        items: {},
      });
    },
    UPDATE_VIEWED_ITEMS(state, value) {
      state.viewedItems = state.pages[value].items;
    },
  },
  actions: {
    addNewDailyLog(state) {
      const currentDate = Moment().format('D/MM/YYYY');
      state.commit('ADD_NEW_DAILY_LOG', currentDate);
    },
    addNewMonthlyLog(state) {
      const currentMonth = Moment().format('MMM');
      state.commit('ADD_NEW_MONTHLY_LOG', currentMonth);
    },
    addItem(state, data) {
      switch (data.type) {
        case 'note':
          state.commit('ADD_NOTE', data.value);
          break;
        case 'task':
          state.commit('ADD_TASK', data.value);
          break;
        default:
          state.commit('ADD_EVENT', data.value);
          break;
      }
    },
  },
});

export default store;
