import Moment from 'moment';
import DayJs from 'dayjs';

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
  goToDailyLog(context, router) {
    const currentDate = DayJs().format('DD/MM/YYYY');
    console.log(currentDate);
    for (let i = 0; i < context.state.pages.length; i += 1) {
      if (currentDate === context.state.pages[i].header) {
        router.push(`/pages/${i + 1}`);
      } else {
        router.push('/add-new');
      }
    }
  },
};

export default actions;
