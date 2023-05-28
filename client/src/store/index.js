import { createStore } from 'vuex'
import authModule from './modules/auth'
import { Toast } from 'vue-toastification';
import { useToast } from 'vue-toastification';
// import api from '@/src/helpers/api'


// api.post("/register")
const toast = useToast();
export default createStore({
  state: {
    loading : false,
    toast : {
      show : false,
      type : "",
      msg : ""
    }
  },
  getters: {},
  mutations: {
    setLoading(state , payload){
      state.loading = payload
      setTimeout(() => {
         state.loading = false
      },5000)
    },
    setToast (state , payload){
      state.toast = payload

      setTimeout(() => {
      state.toast.show = false
      state.toast.type = ""
      state.toast.msg = ""
      } , 3000)
    }
  },
  actions: {},
  modules: {
    auth : authModule
  },
})



