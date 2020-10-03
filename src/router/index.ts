import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Auth from '../views/Auth.vue';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: '/about',
    name: 'About',
    meta: { requiresAuth: true },
    component: About,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeResolve((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // eslint-disable-next-line
    let user;
    Vue.prototype.$Amplify.Auth.currentAuthenticatedUser().then((data) => {
      if (data && data.signInUserSession) {
        user = data;
      }
      next({
        path: '/',
      });
    }).catch((e) => {
      console.log(e);
      next({
        path: '/auth',
      });
    });
  }
  next();
});

export default router;
