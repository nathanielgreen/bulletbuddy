import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import modal from './modules/modal';

const store = () => new Vuex.Store({
  state: {
    viewedItems: [],
    viewedHeader: '',
    pages: [],
  },
  getters: {
    getViewedItems: state => state.viewedItems,
    getViewedHeader: state => state.viewedHeader,
    getPages: state => state.pages,
  },
  mutations,
  actions,
  modules: {
    modal,
  },
});

export default store;
