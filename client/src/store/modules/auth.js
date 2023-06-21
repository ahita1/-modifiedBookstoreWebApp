// ###HEROKU
import { createStore } from "vuex";
import api from "@/helpers/api";
import Cookies from "js-cookie";

const store = createStore();
// Cookies.get('token')
// Cookies.set('token' , "fhfsdhfgdeyjydjshfg")

const authModule = {
  namespaced: true,
  state: {
    account: Cookies.get("account") ? Cookies.get("account") : {},
    token: Cookies.get("token") ? Cookies.get("token") : "",
  },
  getters: {},
  mutations: {
    setAccount(state, payload) {
      state.account = payload;
    },
    setToken(state, payload) {
      state.token = payload;
    },
  },
  actions: {
    //register haha
    async register({ commit }, payload) {
        commit("setLoading", true, { root: true });
      try {
        const res = await api.post("/auth/register", payload);
        if (res.data.status === "bad") {
          commit("setLoading", false, { root: true });
          commit(
            "setToast",
            { show: true, type: "error", msg: res.data.msg },
            { root: true }
          );
        }
        
        
        else {
          Cookies.set("account", JSON.stringify(res.data.user));
          Cookies.set("token", res.data.token);

          console.log(res.data);
          commit("setLoading", false, { root: true });

          commit(
            "setToast", 
            { show: true, type: "success", msg: res.data.msg },
            { root: true }
          );
          setTimeout(() => {
            window.location.href = "/explore"
          },5000)
        }

        
        // commit('setAccount' , res.data.user)
        // commit('setToken' , res.data.token)
      } catch (error) {
        commit("setLoading", false, { root: true });
        commit(
            "setToast",
            { show: true, type: "error", msg: error.message },
            { root: true }
          );
      }
    },

    // login haha
    async login({ commit }, payload) {
      commit("setLoading", true, { root: true });
      try {
        const res = await api.post("/auth/login", payload);
        if (res.data.status === "bad") {
            commit("setLoading", false, { root: true });
            commit(
              "setToast",
              { show: true, type: "error", msg: res.data.msg },
              { root: true }
            );
          } else {
            Cookies.set("account", JSON.stringify(res.data.user));
            Cookies.set("token", res.data.token);
  
            console.log(res.data);
            commit("setLoading", false, { root: true });
  
            commit(
              "setToast",
              { show: true, type: "success", msg: res.data.msg },
              { root: true }
            );
            console.log(res.data)
          setTimeout(() => {
            window.location.href = "/explore"
          } , 5000)
          }
        // console.log(res.data)
        // commit('setAccount' , res.data.user)
        // commit('setToken' , res.data.token)
      } catch (error) {
        commit("setLoading", false, { root: true });
        commit(
            "setToast",
            { show: true, type: "error", msg: error.message },
            { root: true }
          );
        
      }
    },
  },
  modules: {},
};

export default authModule;
