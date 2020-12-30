import Vue from "vue";
import VueRouter from "vue-router";
import { setItem, getItem } from '@/utils/localStorage';
import store from '@/store/index.js';
Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    component: ()=> import('@/views/i-w')
  },
  {
    path: '/login',
    component: ()=> import('@/views/login')
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
// 忽略登录的路径
const IgnoreLoginPaths = [
	'/login',
	'/register',
	'/forget'
];

/**
 * @param path 页面路由路径
 * @returns {boolean} true or false
 */
let needLogin = path => !IgnoreLoginPaths.includes(path);

router.beforeEach((to, from, next)=> {
  if(!getItem('isLogin') && needLogin(to.path)) {
    next({path: '/login'});
    return;
  }
  next();
});
export default router;
