const mutations = {
  ADD_NOTE(state, val) {
    const note = {
      type: 'note',
      value: val,
    };
    state.viewedItems.push(note);
  },
  ADD_EVENT(state, val) {
    const event = {
      type: 'event',
      value: val,
    };
    state.viewedItems.push(event);
  },
  ADD_TASK(state, val) {
    const task = {
      type: 'task',
      value: val,
      checked: false,
    };
    state.viewedItems.push(task);
  },
  DELETE_ITEM(state) {
    state.viewedItems.splice(state.modal.itemIndex, 1);
  },
  DELETE_PAGE(state, index) {
    state.pages.splice(index, 1);
  },
  DELETE_ALL_PAGES(state) {
    state.pages = [];
  },
  TOGGLE_TASK(state, index) {
    const task = state.viewedItems[index];
    task.checked = !task.checked;
  },
  CREATE_NEW_PAGE(state, page) {
    state.pages.push(page);
  },
};

export default mutations;
