const state = {
  viewedPageType: '',
};

const mutations = {
  UPDATE_VIEWED_PAGE_TYPE(state, val) {
    state.viewedPageType = val;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
