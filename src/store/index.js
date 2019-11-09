import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token:localStorage.getItem('token') || '',
    userId:localStorage.getItem('userId') || ''
  },
  mutations: {
    setToken( state, value ){
      state.token = value
      localStorage.setItem('token',value )
    },
    saveUserId( state, value ){
      state.userId = value
      localStorage.setItem('userId',value )
    }
  },
  actions: {},
  modules: {}
});
