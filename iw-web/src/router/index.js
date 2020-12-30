import Vue from "vue";
import VueRouter from "vue-router";
import { setItem } from '@/utils/localStorage';
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
router.beforeEach((to, from, next)=> {

});
export default router;
