const actions = {
  addItem(context, payload) {
    const item = {
      type: payload.item.type,
      value: payload.item.value,
      month: payload.month,
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
};

export default {
  namespaced: true,
  actions,
};
