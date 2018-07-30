import Moment from 'moment';

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
};

const actions = {
  createMonthlyLog(context) {
    const calendarArr = [];

    const currentMonth = Moment().format('M-Y');
    const days = Moment().daysInMonth();

    for (let i = 0; i < days; i += 1) {
      const date = Moment(`${i + 1}-${currentMonth}`, 'D-M-Y');
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
      header: Moment().format('MMMM YYYY'),
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

