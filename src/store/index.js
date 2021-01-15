import Vue from "vue";
import Vuex from "vuex";

import messages from "./messages";
import rooms from "./rooms";
import user from "./user";
import utils from "./utils";

import { auth } from "../firebase.js";

import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-default.css";

Vue.use(VueToast, {
  position: "bottom"
});

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    checkAuth({commit}) {
      auth.onAuthStateChanged(function(user) {
        if (user) {
          commit("user/setUser", user);
        } else {
          commit("user/setUser", null);
        }
      });
    }
  },
  
  modules: {
    messages,
    rooms,
    user,
    utils
  }
});

export default store;

// Initial load
store.dispatch("checkAuth");