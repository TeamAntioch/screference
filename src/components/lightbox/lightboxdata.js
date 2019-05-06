import Vuex from 'vuex';

const lightBoxData = new Vuex.Store({
  state: {
    url: '',
  },
  mutations: {
    set(state, url) {
      state.url = url;
    },
  },
});

export default lightBoxData;
