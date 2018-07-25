const state = {
  show: false,
  editing: false,
  item: null,
  itemIndex: null,
};

const getters = {
  getModal: state => state,
};

const mutations = {
  TOGGLE_SHOW_MODAL(state, item) {
    state.show = !state.show;
    state.item = item.data;
    state.itemIndex = item.index;
  },
  TOGGLE_EDITING_MODAL(state) {
    state.editing = !state.editing;
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
