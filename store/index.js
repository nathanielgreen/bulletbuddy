import Vue from 'vue';
import Vuex from 'vuex';

const store = () => new Vuex.Store({
  state: {
    viewedItems: {
    },
    pages: {
    },
  },
  getters: {
    getViewedItems: state => state.viewedItems,
    getPages: state => state.pages,
  },
  mutations: {
    ADD_ITEM(state, value) {
      const size = Object.keys(state.viewedItems).length;
      Vue.set(state.viewedItems, (size + 1), value);
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
  },
});

export default store;
