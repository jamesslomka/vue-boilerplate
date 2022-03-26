import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('@/views/NotFound'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: '/',
  scrollBehavior: (to, from, savedPosition) => savedPosition || { x: 0, y: 0 },
  routes,
});

export default router;
