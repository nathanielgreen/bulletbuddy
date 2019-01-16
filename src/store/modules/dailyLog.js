import UUID from 'uuid-js';

const actions = {
  addItem({ dispatch }, payload) {
    const item = {
      id: UUID.create().toString(),
      type: payload.type,
      value: payload.value,
    };
    if (item.type === 'task') { item.checked = false; }
    console.log(item);

    dispatch('activePage/addActivePageContentItem', item, { root: true });
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

