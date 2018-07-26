const state = {
  logItems: [],
};

const getters = {
  getLogItems: state => state.logItems,
};

const mutations = {
  CREATE_NEW_DAILY_LOG(state, page) {
    state.pages.push(page);
  },
};

const actions = {
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

