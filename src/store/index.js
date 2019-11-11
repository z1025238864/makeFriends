import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token:localStorage.getItem('token') || '',
    userId:localStorage.getItem('userId') || '',
    messagenumber:0,
  },
  mutations: {
    setToken( state, value ){
      state.token = value
      localStorage.setItem('token',value )
    },
    saveUserId( state, value ){
      state.userId = value
      localStorage.setItem('userId',value )
    },
    test( state, value ){
      state.messagenumber=state.messagenumber+1
      alert(2222)
    },
  },
  actions: {},
  modules: {},
  message:"",
  websocket:""
});
