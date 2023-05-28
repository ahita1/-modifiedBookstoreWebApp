<template>
  <div
    class="login w-full min-h-screen flex justify-center items-center bg-violet-600 text-white font-axiforma"
  >
    <div class="text-center text-[20px] mt-10">
      <div
        class="bg-white shadow-2xl shadow-violet-950 w-[500px] p-10 rounded-3xl mb-5"
      >
        <h1 class="text-3xl font-serif font-bold mb-10 text-slate-600">
          Sign Up
        </h1>
        <form @submit="(e) => login(e)" action="">
          <div class="">
            <input
              v-model="user.username"
              class="bg-slate-100 mb-10 border border-violet-400 w-[400px] outline-none white shadow-xl shadow-violet-500 py-4 px-16 rounded-full text-slate-600 items-center"
              type="text"
              placeholder="Username"
              name="username"
            />

            <input
              v-model="user.password"
              class="bg-slate-100 mb-10 border border-violet-400 w-[400px] outline-none white shadow-xl shadow-violet-500 py-4 px-16 rounded-full text-slate-600 items-center"
              type="password"
              placeholder="Password"
              name="password"
            />

            <button
              :disabled="loading"
              class="button hover:bg-violet-950 font-extrabold transition shadow shadow-violet-900 border-violet-800 bg-gradient-to-br from-violet-300 to-violet-700 bg-opacity-50 rounded-full text-center text-white p-4 px-4 w-[200px] disabled:bg-gray-200"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>

        <div class="mb-5 mt-5 text-slate-400">OR</div>

        <div
          class="flex justify-center items-center text-violet-600 text-4xl mb-5 space-x-7"
        >
          <router-link to="https://www.facebook.com">
            <ion-icon name="logo-facebook"></ion-icon
          ></router-link>
          <router-link to=""
            ><ion-icon name="logo-linkedin"></ion-icon
          ></router-link>
          <router-link to=""
            ><ion-icon name="mail-outline"></ion-icon
          ></router-link>
          <router-link to=""
            ><ion-icon name="logo-google"></ion-icon
          ></router-link>
        </div>
      </div>

      <div class="flex flex-row justify-between items-center font-extrabold mb-5">
        <p>Dont have an Account ?</p>
        <router-link class="text-white text-lg ml-5" to="/register">
          <button>SignUp</button>
        </router-link>
      
      </div>
      <div class="mb-10">
        <router-link class="text-white text-lg font-extrabold flex flex-row justify-end" to="/"
        >HomePage</router-link
      >
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, reactive } from "vue";

const store = useStore();

const user = reactive({
  username: "",
  password: "",
});

const loading = computed(() => {
  return store.state.loading;
});

const login = async (e) => {
  e.preventDefault();
  if (!user.username || !user.password) {
    alert("the username and password field couldn't be empty!!!");
  } else {
    store.dispatch("auth/login", user);
  }
};
</script>

<style>
</style>