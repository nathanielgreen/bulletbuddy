import { updateDoc } from '~/plugins/pouchdb';

const state = {
  logItems: [],
};

const getters = {
  getLogItems: state => state.logItems,
};

const mutations = {
  CREATE_ITEM(state, item) {
    state.logItems.push(item);
  },
  TOGGLE_TASK(state, index) {
    const task = state.logItems[index];
    task.checked = !task.checked;
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
      case 'note': {
        const item = {
          type: 'note',
          value: data.value,
        };
        state.commit('CREATE_ITEM', item);
        break;
      }
      case 'task': {
        const item = {
          type: 'task',
          value: data.value,
          checked: false,
        };
        state.commit('CREATE_ITEM', item);
        break;
      }
      default: {
        const item = {
          type: 'event',
          value: data.value,
        };
        state.commit('CREATE_ITEM', item);
        break;
      }
    }
  },
  async addNewItem(context, item) {
    context.dispatch('addItem', item);
    const docId = context.rootGetters['page/getViewedPageId'];
    await updateDoc(docId, item);
    if (updateDoc) {
      const content = { key: 'items', content: context.state.logItems };
      context.dispatch('page/addViewedPageContent', content, { root: true });
    }
  },
  setLogItems(context) {
    const content = context.rootGetters['page/getViewedPageContent'];
    const logItems = content.items;
    if (logItems) { context.commit('SET_LOG_ITEMS', logItems); }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

