import { createRouter, createWebHistory } from 'vue-router'
import Cookies from 'js-cookie'
// parent divs haha
import ExploreView from '../layouts/ExploreView.vue'

import LandingView from '../layouts/LandingView.vue'


import HomeView from "../views/Explore/HomeView.vue"
import RegisterView from "../views/Landing/RegisterView.vue"
import LoginView from "../views/Landing/LoginView.vue"
import IndexView from "../views/Landing/IndexView.vue"
import AccountView from '../views/Explore/AccountView.vue'
const routes = [
  { 
   path : "/",
   name : "Landing",
   component : LandingView,
   children : [
    {
      path : "/",
      name : "Index",
      component : IndexView
    },

    {
      //  /home/register
      path : "register",
      name : "Register",
      component : RegisterView
    },
    {
      //  /home/login
      path : "login",
      name : "Login",
      component : LoginView
    }

   ],
   beforeEnter: (to , from , next) => {
    if (Cookies.get("token")) {
      window.location.href = "/explore"
    }
    else {
      next()
    }
   } 
  },
  {
  path : "/explore",
  name : "Explore" ,
  component : ExploreView,
  children : [
    {
      path: "" ,
      name : "Home" ,
      component : HomeView
    },
    {
      path: "/account" ,
      name : "account" ,
      component : AccountView,
    }
  ],
  beforeEnter: (to , from , next) => {
    if (!Cookies.get("token")) {
      window.location.href = "/"
    }
    else {
      next()
    }
   }
  }
] 

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
