import DayJs from 'dayjs';

const mutations = {
  UPDATE_TASK(state, index) {
    state
      .logItems[index]
      .checked = !state
        .logItems[index]
        .checked;
  },
  UPDATE_LOG_ITEM_DAY(state, data) {
    state.logItems[data.index].day = data.item.day;
  },
};

const actions = {
  addItem(context, payload) {
    const monthlyLogDate = context.rootGetters['activePage/getActivePageContent'].date;
    const item = {
      type: payload.type,
      value: payload.value,
      day: '',
      monthAndYear: DayJs(monthlyLogDate).format('MM/YY'),
    };
    if (item.type === 'task') { item.checked = false; }

    context.dispatch('activePage/addActivePageContentItem', item, { root: true });
  },
  toggleTask({ dispatch }, { item, index }) {
    const patchedItem = {
      ...item,
      checked: !item.checked,
    };
    const payload = {
      patchedItem,
      itemIndex: index,
    };
    dispatch('activePage/toggleActivePageContentTask', payload, { root: true });
  },
  updateDay({ dispatch }, { item, index }) {
    const payload = {
      patchedItem: item,
      itemIndex: index,
    };
    dispatch('activePage/updateActivePageContentItemDay', payload, { root: true });
  },
};

export default {
  namespaced: true,
  mutations,
  actions,
};

