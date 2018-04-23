import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';

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
  mutations,
  actions,
});

export default store;
