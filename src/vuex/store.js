import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    url: '',
  },
  mutations: {
    setUrl(state, url) {
      state.url = url;
    },
  },
});

// store.commit('setUrl', 'google');
// console.log(store.state.url);

export default store;
