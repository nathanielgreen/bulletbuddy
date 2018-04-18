import createPersistedState from 'vuex-persistedstate';

export default ({ store }) => {
  createPersistedState({
    key: 'bujo',
    paths: ['pages'],
  })(store);
};
