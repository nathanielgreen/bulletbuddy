import UUID from 'uuid-js';

const actions = {
  addItem(context, payload) {
    const item = {
      id: UUID.create().toString(),
      type: payload.item.type,
      value: payload.item.value,
      month: payload.month,
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
};

export default {
  namespaced: true,
  actions,
};
