import Vuex from 'vuex';
import Moment from 'moment';
import modal from './modules/modal';
import page from './modules/page';
import logTypeDaily from './modules/logTypeDaily';

const store = () => new Vuex.Store({
  state: {
    pages: [],
  },
  getters: {
    getPages: state => state.pages,
  },
  mutations: {
    DELETE_ALL_PAGES(state) {
      state.pages = [];
    },
    CREATE_NEW_PAGE(state, newPage) {
      state.pages.push(newPage);
    },
  },
  actions: {
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
    addNewPage(context, pageType) {
      let pageHeader;
      if (pageType === 'DL') { pageHeader = Moment().format('DD/MM/YYYY'); }
      if (pageType === 'ML') { pageHeader = Moment().format('MMMM YYYY'); }
      const newPage = {
        type: pageType,
        header: pageHeader,
        content: {},
      };
      context.commit('CREATE_NEW_PAGE', newPage);
    },
  },
  modules: {
    modal,
    page,
    logTypeDaily,
  },
});

export default store;
