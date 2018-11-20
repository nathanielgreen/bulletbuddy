import Vue from 'vue';
import Router from 'vue-router';

import Index from './views/Index.vue';
import AddNew from './views/AddNew.vue';
import Menu from './views/Menu.vue';
import Page from './views/Page.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/add-new',
      name: 'add-new',
      component: AddNew,
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu,
    },
    {
      path: '/pages/:id',
      component: Page,
    },
  ],
});
