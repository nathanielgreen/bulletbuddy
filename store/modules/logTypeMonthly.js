import Moment from 'moment';

const state = {
  calendar: [],
};

const getters = {
};

const mutations = {
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
        calendar: calendarArr,
      },
    };

    context.commit('CREATE_NEW_PAGE', newPage, { root: true });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

