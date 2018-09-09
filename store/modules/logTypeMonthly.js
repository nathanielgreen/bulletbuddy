import DayJs from 'dayjs';

const state = {
  logItems: [],
};

const getters = {
  getLogItems: state => state.logItems,
};

const mutations = {
  CLEAR_LOG_ITEMS(state) {
    state.logItems = [];
  },
  SET_LOG_ITEMS(state, val) {
    state.logItems = val;
  },
  CREATE_LOG_ITEM(state, item) {
    state.logItems.push(item);
  },
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
  addLogItem(context, payload) {
    const monthlyLogDate = context.rootGetters['page/getViewedPageContent'].date;
    const data = {
      type: payload.type,
      value: payload.value,
      day: '',
      monthAndYear: DayJs(monthlyLogDate).format('MM/YY'),
    };
    switch (data.type) {
      case 'task':
        data.checked = false;
        context.commit('CREATE_LOG_ITEM', data);
        break;
      default:
        context.commit('CREATE_LOG_ITEM', data);
        break;
    }
    const content = { key: 'items', content: context.state.logItems };
    context.dispatch('page/addViewedPageContent', content, { root: true });
  },
  createCalenderView() {
  },
  createMonthlyLog(context) {
    const newPage = {
      type: 'ML',
      header: DayJs().format('MMMM YYYY'),
      content: {
        date: DayJs(),
        items: [],
      },
    };
    context.commit('CREATE_NEW_PAGE', newPage, { root: true });
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

