const state = {
  viewedPageType: '',
  viewedPageHeader: '',
  viewedPageContent: '',
};

const getters = {
  getViewedPageType: state => state.viewedPageType,
  getViewedPageHeader: state => state.viewedPageHeader,
  getViewedPageContent: state => state.viewedPageContent,
};

const mutations = {
  UPDATE_VIEWED_PAGE_TYPE(state, val) {
    state.viewedPageType = val;
  },
  UPDATE_VIEWED_PAGE_HEADER(state, val) {
    state.viewedPageHeader = val;
  },
  UPDATE_VIEWED_PAGE_CONTENT(state, val) {
    state.viewedPageContent = val;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
