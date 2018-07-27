const state = {
  logItems: [],
};

const getters = {
  getLogItems: state => state.logItems,
};

const mutations = {
  CREATE_NOTE(state, val) {
    const item = {
      type: 'note',
      value: val,
    };
    state.logItems.push(item);
  },
  CREATE_EVENT(state, val) {
    const item = {
      type: 'event',
      value: val,
    };
    state.logItems.push(item);
  },
  CREATE_TASK(state, val) {
    const item = {
      type: 'task',
      value: val,
      checked: false,
    };
    state.logItems.push(item);
  },
  CLEAR_LOG_ITEMS(state) {
    state.logItems = [];
  },
  SET_LOG_ITEMS(state, val) {
    state.logItems = val;
  },
};

const actions = {
  addItem(state, data) {
    switch (data.type) {
      case 'note':
        state.commit('CREATE_NOTE', data.value);
        break;
      case 'task':
        state.commit('CREATE_TASK', data.value);
        break;
      default:
        state.commit('CREATE_EVENT', data.value);
        break;
    }
  },
  addNewItem(context, item) {
    context.dispatch('addItem', item);
    const content = {
      key: 'items',
      content: context.state.logItems,
    };
    context.dispatch('page/addViewedPageContent', content, { root: true });
  },
  setLogItems(context) {
    const content = context.rootGetters['page/getViewedPageContent'];
    context.commit('SET_LOG_ITEMS', content.items);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

