const state = {
  viewedPageType: '',
  viewedPageIndex: '',
  viewedPageHeader: '',
  viewedPageContent: {},
};

const getters = {
  getViewedPageType: state => state.viewedPageType,
  getViewedPageIndex: state => state.viewedPageIndex,
  getViewedPageHeader: state => state.viewedPageHeader,
  getViewedPageContent: state => state.viewedPageContent,
};

const mutations = {
  UPDATE_VIEWED_PAGE_TYPE(state, val) {
    state.viewedPageType = val;
  },
  UPDATE_VIEWED_PAGE_INDEX(state, val) {
    state.viewedPageIndex = val;
  },
  UPDATE_VIEWED_PAGE_HEADER(state, val) {
    state.viewedPageHeader = val;
  },
  UPDATE_VIEWED_PAGE_CONTENT(state, val) {
    state.viewedPageContent = val;
  },
};

const actions = {
  updateViewedPage(context, data) {
    context.commit('UPDATE_VIEWED_PAGE_TYPE', data.type);
    context.commit('UPDATE_VIEWED_PAGE_INDEX', data.index);
    context.commit('UPDATE_VIEWED_PAGE_HEADER', data.header);
    context.commit('UPDATE_VIEWED_PAGE_CONTENT', data.content);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
