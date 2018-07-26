const state = {
  logItems: [],
};

const getters = {
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
  addNewItem(context) {
    const content = {
      items: ['hello'],
    };
    context.dispatch('page/updateViewedPageContent', content, { root: true });
    context.dispatch('updateViewedPageContent', content, { root: true });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

