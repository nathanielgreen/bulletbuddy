import Vuex from 'vuex';

const store = () => new Vuex.Store({
  state: {
    items: [],
  },
  getters: {
    getItems: state => state.items,
  },
  mutations: {
    ADD_ITEM(state, value) {
      state.items.push(value);
    };
  },
  actions: {
  },
});

export default store;
