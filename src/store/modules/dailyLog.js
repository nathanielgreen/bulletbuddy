const actions = {
  addItem({ dispatch }, data) {
    switch (data.type) {
      case 'note': {
        const item = {
          type: 'note',
          value: data.value,
        };
        dispatch('updatePage', item);
        break;
      }
      case 'task': {
        const item = {
          type: 'task',
          value: data.value,
          checked: false,
        };
        dispatch('updatePage', item);
        break;
      }
      default: {
        const item = {
          type: 'event',
          value: data.value,
        };
        dispatch('updatePage', item);
        break;
      }
    }
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
  updatePage({ dispatch }, item) {
    dispatch('activePage/addActivePageContentItem', item, { root: true });
  },
};

export default {
  namespaced: true,
  actions,
};

