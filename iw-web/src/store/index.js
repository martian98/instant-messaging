import Vue from "vue";
import Vuex from "vuex";
import { setItem, getItem } from '@/utils/localStorage';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      isLogin: false
    }
  },
  mutations: {
    setIsLogin(state, params) {
      state.user.isLogin = params;
      setItem('isLogin', params);
    },
    load(state) {
      console.log(this, state);
      // getItem('isLogin');
    }
  },
  actions: {},
  modules: {}
});
