import DayJs from 'dayjs';
import UUID from 'uuid-js';

const actions = {
  addItem(context, payload) {
    const monthlyLogDate = context.rootGetters['activePage/getActivePageContent'].date;
    const item = {
      id: UUID.create().toString(),
      type: payload.type,
      value: payload.value,
      day: '',
      monthAndYear: DayJs(monthlyLogDate).format('MM/YY'),
    };
    if (item.type === 'task') { item.checked = false; }

    context.dispatch('activePage/addActivePageContentItem', item, { root: true });
  },
  toggleTask({ dispatch }, item) {
    const patchedItem = {
      ...item,
      checked: !item.checked,
    };
    dispatch('activePage/toggleActivePageContentTask', patchedItem, { root: true });
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
  actions,
};

