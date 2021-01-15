import Vue from "vue";
import VueRouter from "vue-router";
import RoomsView from "../views/RoomsView.vue";
import AuthView from "../views/AuthView.vue";
import UserProfileView from "../views/UserProfileView.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: RoomsView,
    meta: {
      requiresAuth:true,
    }
  },
  {
    path: "/auth",
    name: "auth",
    component: AuthView
  },
  {
    path: "/profile",
    name: "profile",
    component: UserProfileView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  // Requires auth & no user
  if (requiresAuth && !(await store.dispatch("user/getCurrentUser"))) {
    next({ name: "auth" });
    // No requires auth and user (auth)
  } else if (!requiresAuth && (await store.dispatch("user/getCurrentUser"))) {
    next({ name: "home" });
  } else {
    // Anything else
    next();
  }
}); 

export default router;
