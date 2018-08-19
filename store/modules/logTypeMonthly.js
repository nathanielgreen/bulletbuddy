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
  CREATE_LOG_ITEM(state, data) {
    state.logItems[data.index].items.push(data.item);
  },
};

const actions = {
  addLogItem(context, payload) {
    const data = {
      item: {
        type: payload.item.type,
        value: payload.item.value,
      },
      index: payload.index,
    };
    switch (data.item.type) {
      case 'task':
        data.item.checked = false;
        context.commit('CREATE_LOG_ITEM', data);
        break;
      default:
        context.commit('CREATE_LOG_ITEM', data);
        break;
    }
  },
  createMonthlyLog(context) {
    const calendarArr = [];

    const currentYear = DayJs().format('YYYY');
    const currentMonth = DayJs().format('MM');
    const days = DayJs().daysInMonth();

    for (let i = 0; i < days; i += 1) {
      const date = DayJs(`${currentYear}-${currentMonth}-${i + 1}`);
      const dayLetter = date.format('ddd').substring(0, 1);
      const dayObj = {
        weekday: dayLetter,
        dayOfMonth: i + 1,
        items: [],
      };
      calendarArr.push(dayObj);
    }

    const newPage = {
      type: 'ML',
      header: DayJs().format('MMMM YYYY'),
      content: {
        items: calendarArr,
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

