import Vuex from 'vuex';
import DayJs from 'dayjs';

import genUID from '../assets/js/helperMethods';
import db from '../assets/js/pouchdb';
import activePage from './modules/activePage';
import dailyLog from './modules/dailyLog';
import monthlyLog from './modules/monthlyLog';

const store = () => new Vuex.Store({
  state: {
    pages: [],
  },
  getters: {
    getPages: state => state.pages,
    getPage: state => index => state.pages[index],
  },
  mutations: {
    DELETE_ALL_PAGES(state) {
      state.pages = [];
    },
    SET_PAGES(state, pages) {
      state.pages = pages;
    },
    CREATE_NEW_PAGE(state, newPage) {
      state.pages.push(newPage);
    },
    DELETE_PAGE(state, pageToDelete) {
      db.remove(pageToDelete).then(() => {
        state.pages.splice(state.pages.indexOf(pageToDelete), 1);
      });
    },
  },
  actions: {
    goToDailyLog(context, router) {
      const currentDate = DayJs().format('DD/MM/YYYY');
      for (let i = 0; i < context.state.pages.length; i += 1) {
        if (currentDate === context.state.pages[i].header) {
          router.push(`/pages/${i + 1}`);
          break;
        }
      }
    },
    goToMonthlyLog(context, router) {
      const currentMonth = DayJs().format('MMMM YYYY');
      for (let i = 0; i < context.state.pages.length; i += 1) {
        if (currentMonth === context.state.pages[i].header) {
          router.push(`/pages/${i + 1}`);
          break;
        }
      }
    },
    deleteAllPages(context) {
      db.destroy().then(() => {
        context.commit('DELETE_ALL_PAGES');
      });
    },
    async addNewPage(context, pageType) {
      let pageHeader;
      if (pageType === 'DL') { pageHeader = DayJs().format('DD/MM/YYYY'); }
      if (pageType === 'ML') { pageHeader = DayJs().format('MMMM YYYY'); }
      const newPage = {
        _id: genUID(),
        type: pageType,
        header: pageHeader,
        content: {
          items: [],
        },
        createdAt: new Date(),
      };
      await db.put(newPage);
      context.commit('CREATE_NEW_PAGE', newPage);
    },
    async getPages(context) {
      await db.allDocs({
        include_docs: true,
        descending: true,
        attachments: true,
      })
        .then((result) => {
          const pages = result.rows.map(row => row.doc);
          pages.sort((a, b) => a.createdAt > b.createdAt);
          context.commit('SET_PAGES', pages);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {
    activePage,
    dailyLog,
    monthlyLog,
  },
});

export default store;
