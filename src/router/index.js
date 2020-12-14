import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
  {
    path: "/",
    redirect: '/index',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue'),
  },
  {
    path: "/index",
    redirect: '/homes',
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/index.vue'),
    beforeEnter: function (to, from, next) {
      if (sessionStorage.getItem('token')) {
        next()
      } else {
        alert('请先登录')
        next('/login')
      }
    },
    children: [
      {
        path: '/homes',
        name: 'homes',
        component: () => import('../views/homes.vue'),
      },
      {
        path: '/goods',
        name: 'goods',
        component: () => import('../views/goods.vue'),
      },
      {
        path: '/order',
        name: 'order',
        component: () => import('../views/order.vue'),
      },
      {
        path: '/vip',
        name: 'vip',
        component: () => import('../views/vip.vue'),
      },
      {
        path: '/set',
        name: 'set',
        component: () => import('../views/set.vue'),
      },
    ]
  },
];

const router = new VueRouter({
  routes
});

export default router;
