import Moment from 'moment';

const actions = {
  addNewDailyLog(state) {
    const currentDate = Moment().format('D/MM/YYYY');
    state.commit('ADD_NEW_DAILY_LOG', currentDate);
  },
  addNewMonthlyLog(state) {
    const currentMonth = Moment().format('MMM');
    state.commit('ADD_NEW_MONTHLY_LOG', currentMonth);
  },
  addItem(state, data) {
    switch (data.type) {
      case 'note':
        state.commit('ADD_NOTE', data.value);
        break;
      case 'task':
        state.commit('ADD_TASK', data.value);
        break;
      default:
        state.commit('ADD_EVENT', data.value);
        break;
    }
  },
};

export default actions;
