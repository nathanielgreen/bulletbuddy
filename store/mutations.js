const mutations = {
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
