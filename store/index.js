import Vue from 'vue';
import Vuex from 'vuex';

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
    ADD_ITEM(state, value) {
      const size = Object.keys(state.viewedItems).length;
      Vue.set(state.viewedItems, (size + 1), value);
    },
    ADD_NOTE(state, val) {
      const size = Object.keys(state.viewedItems).length;
      const note = {
        index: size,
        type: 'note',
        value: val,
      };
      Vue.set(state.viewedItems, (size + 1), note);
    },
    ADD_NEW_DAILY_LOG(state) {
      const size = Object.keys(state.pages).length;
      Vue.set(state.pages, (size + 1), {});
    },
    UPDATE_VIEWED_ITEMS(state, value) {
      state.viewedItems = state.pages[value];
    },
  },
  actions: {
    addNewDailyLog(state) {
      state.commit('ADD_NEW_DAILY_LOG');
    },
    addItem(state, data) {
      console.log(data);
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
