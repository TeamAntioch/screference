// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto';
import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import VueTouch from 'vue-touch';
import Vuex from 'vuex';
import App from './App';
import router from './router';
// import store from './vuex/store';


Vue.config.productionTip = false;
Vue.use(VueLazyload, {
  loading: '/static/images/loading.png',
});
Vue.use(VueTouch, { name: 'v-touch' });
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
  actions: {
    updateUrl({ commit }, newUrl) {
      commit('setUrl', newUrl);
    },
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>',
});
