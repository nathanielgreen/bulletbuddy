import Moment from 'moment';

const actions = {
  addNewDailyLog(state) {
    const currentDate = Moment().format('DD/MM/YYYY');
    state.commit('ADD_NEW_DAILY_LOG', currentDate);
  },
  addNewMonthlyLog(state) {
    const currentMonth = Moment().format('MMMM YYYY');
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
  goToDailyLog(context, router) {
    const currentDate = Moment().format('DD/MM/YYYY');
    for (let i = 0; i < context.state.pages.length; i += 1) {
      if (currentDate === context.state.pages[i].header) {
        router.push(`/pages/${i + 1}`);
        break;
      } else {
        router.push('/add-new');
      }
    }
  },
  goToMonthlyLog(context, router) {
    const currentMonth = Moment().format('MMMM YYYY');
    for (let i = 0; i < context.state.pages.length; i += 1) {
      if (currentMonth === context.state.pages[i].header) {
        router.push(`/pages/${i + 1}`);
        break;
      } else {
        router.push('/add-new');
      }
    }
  },
};

export default actions;
