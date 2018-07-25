import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import modal from './modules/modal';
import page from './modules/page';

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
    page,
  },
});

export default store;
