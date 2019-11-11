import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token:localStorage.getItem('token') || '',
    userId:localStorage.getItem('userId') || '',
    messagenumber:0,
    usermessage:"",
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
    },
    usermessageList(state,value){
      state.usermessage=value
      localStorage.setItem(state.userId,JSON.stringify(value));
    },
    ReadusermessageList(state,value){
      var a=JSON.parse(localStorage.getItem(state.userId));
        a[value]=0;
      state.usermessage=value
      localStorage.setItem(state.userId,JSON.stringify(a));
    }
  },
  actions: {},
  modules: {},
  message:"",
  websocket:""
});
