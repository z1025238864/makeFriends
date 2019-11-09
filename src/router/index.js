import Vue from "vue";
import VueRouter from "vue-router";
// import { readdir } from "fs";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    // redirect: "/updateMsg",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: () => import('../views/Login/Login.vue')
  },
  {
    path: "/personalHome",
    name: "personalHome",
    component: () => import('../views/PersonalHome/PersonalHome.vue'),
    redirect: {
      name: 'newdynamic'
    },
    children: [
      {
        path: 'newdynamic',
        name: 'newdynamic',
        component: () => import('../views/PersonalHome/NewDynamic.vue')
      },
      {
        path: 'meet',
        name: 'meet',
        component: () => import('../views/PersonalHome/Meet/Meet.vue')
      },
      {
        path: 'visiter',
        name: 'visiter',
        component: () => import('../views/PersonalHome/Visiter/Visiter.vue')
      },
      {
        path: 'friend',
        name: 'friend',
        component: () => import('../views/PersonalHome/Friend/Friend.vue')
      },
    ]
  },
  {
    path: "/personalDetail",
    name: "personalDetail",
    component: () => import('../views/PersonalDetail/PersonalDetail.vue')
  },
  {
    path: "/updateMsg",
    name: "updateMsg",
    component: () => import('../views/UpdateMsg/UpdateMsg.vue'),
    children:[
      {
        path:'info',
        name:'info',
        component:()=>import('../views/UpdateMsg/Info.vue')
      },
      {
        path:'avatar',
        name:'avatar',
        component:()=>import('../views/UpdateMsg/Avatar.vue')
      },
      {
        path:'pwd',
        name:'pwd',
        component:()=>import('../views/UpdateMsg/Pwd.vue')
      },
    ]
  },
  {
    path:'/chat',
    name:'chat',
    component:()=>import('../views/Chat/Chat.vue')
  }



];

const router = new VueRouter({
  routes
});

export default router;
