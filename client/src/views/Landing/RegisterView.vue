<template>
  <div
    class="register w-full min-h-screen flex justify-center items-center text-white bg-violet-500 font-axiforma"
  >
    <div class="text-center">
      <div
        class="flex flex-col display-center items-center bg-white mt-20 shadow-2xl shadow-violet-950 w-[800px] min-h-full pl-10 pr-10 pb-10 pt-10 rounded-3xl border border-5 mb-5 text-white"
      >
        <form @submit="(e) => register(e)" action="">
          <h1 class="text-3xl font-serif font-bold mb-10 mt-10 text-slate-600">
            Sign Up
          </h1>
          <div class="text-[20px]">
            <div class="flex flex-row">
              <input
                v-model="user.username"
                class="relative bg-slate-100 mb-10 border border-violet-400 w-[500px] outline-none white shadow-lg shadow-violet-300 py-4 px-16 rounded-full text-slate-600 items-center"
                type="text"
                name="username"
                placeholder="Username"
              />
              <ion-icon
                class="text-violet-600 w-9 h-9 absolute py-3 px-4"
                name="person-circle-outline"
              ></ion-icon>
            </div>

            <div class="flex">
              <input
                v-model="user.password"
                class="bg-slate-100 mb-10 w-[500px] border border-violet-400 outline-none white shadow-lg shadow-violet-300 py-4 px-16 rounded-full text-slate-600"
                type="password"
                name="password"
                placeholder="Password"
              />

              <ion-icon
                class="text-violet-600 w-8 h-8 absolute py-3 px-4"
                name="lock-closed-outline"
              ></ion-icon>
              <div class="flex flex-row justify-end">
                <ion-icon
                  class="text-violet-600 w-8 h-8 absolute py-3 px-4"
                  name="eye-outline"
                ></ion-icon>
              </div>
            </div>

            <div class="flex">
              <input
                v-model="user.id"
                class="bg-slate-100 mb-10 w-[500px] border border-violet-400 outline-none white shadow-lg shadow-violet-300 py-4 px-16 rounded-full text-slate-600"
                type="text"
                name="studID"
                placeholder="Enter your ID"
              />
              <ion-icon
                class="text-violet-600 w-8 h-8 absolute py-3 px-4"
                name="id-card-outline"
              ></ion-icon>
            </div>

            <div class="flex">
              <input
                v-model="user.sn"
                class="bg-slate-100 mb-10 w-[500px] border border-violet-400 outline-none white shadow-lg shadow-violet-300 py-4 px-16 rounded-full text-slate-600"
                type="text"
                name="serialnumber"
                placeholder="Serial Number"
              />
              <ion-icon
                class="text-violet-600 w-8 h-8 absolute py-3 px-4"
                name="qr-code-outline"
              ></ion-icon>
            </div>

            <div class="text-start w-[400px]">
              <label
                for="laptopModel"
                class="text-start font-extrabold text-slate-600 block mb-5"
                >Laptop Model:</label
              >
              <div class="flex w-[500px]">
                <select
                  aria-placeholder="laptop Model"
                  name="pc"
                  id="laptopModel"
                  v-model="user.laptopModel"
                  class="select-text bg-slate-100 mb-10 w-[500px] border border-violet-400 outline-none white shadow-lg shadow-violet-300 py-4 px-16 rounded-full text-slate-600"
                >
                  <option selected value="HP">HP</option>
                  <option value="Dell">Dell</option>
                  <option value="Asus">Asus</option>
                  <option value="Acer">Acer</option>
                  <option value="Lenovo">Lenovo</option>
                  <option value="Toshiba">Toshiba</option>
                  <option value="Other">Other</option>
                </select>
                <ion-icon
                  class="text-violet-600 w-8 h-8 absolute py-3 px-4"
                  name="laptop-outline"
                ></ion-icon>
              </div>
            </div>

            <div class="text-start w-[400px]">
              <label
                for="laptopModel"
                class="text-start font-extrabold text-slate-600 block mb-5"
                >Department:</label
              >
              <div class="flex w-[500px]">
                <select
                  name="Dep"
                  id="Department"
                  v-model="user.department"
                  class="select-text bg-slate-100 mb-10 w-[500px] border border-violet-400 outline-none white shadow-lg shadow-violet-300 py-4 px-16 rounded-full text-slate-600"
                >
                  <option selected value="Software">Software</option>
                  <option value="IT">IT</option>
                  <option value="Electrical">Electrical</option>
                  <option value="Mechanical">Mechanical</option>
                  <option value="Civil">Civil</option>
                  <option value="Hydro">Hydro</option>
                  <option value="Biotechnology">Biotechnology</option>
                  <option value="Medicine">Medicine</option>
                  <option value="Pharmacy">Pharmacy</option>
                  <option value="Other">Other</option>
                </select>
                <ion-icon
                  class="text-violet-600 w-8 h-8 absolute py-3 px-4"
                  name="albums-outline"
                ></ion-icon>
              </div>
            </div>

            <!-- <input
              v-model="user.laptopModel"
              class="mb-10 w-full focus:border-slate-400 outline-none"
              type="text"
              name="LaptopModel"
              placeholder="Laptop Model"
            /> -->
            <!-- <input
              v-model="user.Department"
              class="mb-10 w-full focus:border-slate-400 outline-none"
              type="text"
              name="Dep"
              placeholder="Department"
            /> -->
            <button
              :disabled="loading"
              type="submit"
              class="button hover:bg-violet-950 font-extrabold transition shadow-2xl shadow-violet-500 border-violet-800 bg-gradient-to-br from-violet-300 to-violet-700 bg-opacity-50 rounded-full text-center text-white p-3 w-[300px] disabled:bg-gray-200 hover:w-[325px] hover:p-4 focus-visible:text-green-700 focus:bg-red-500"
            >
              Submit
            </button>

            <div class="mb-10 mt-10 text-slate-400">OR</div>

            <div
              class="flex justify-center items-center text-violet-600 text-5xl mb-5 space-x-7"
            >
              <router-link to="">
                <ion-icon name="logo-facebook" class=""></ion-icon
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

            <!-- <input
              class="border bg-sky-800 rounded text-center text-white py-2 w-full"
              type="submit"
            /> -->
          </div>
        </form>
      </div>
      <div class="mb-10 mt-10">
        <div
          class="flex flex-row justify-between items-center font-serif text-lg font-extrabold"
        >
          <span>Already Have an Account?</span>
          <p>
            <router-link class="text-white-800 text-lg ml-5" to="/login"
              >Login</router-link
            >
          </p>
        </div>
        <div class="flex flex-row justify-end items-center mt-10 mb-10">
          <router-link class="text-white-800 text-lg font-extrabold" to="/"
            >HomePage</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { reactive, computed } from "vue";

const store = useStore();

const user = reactive({
  username: "",
  password: "",
  id: "",
  sn: "",
  laptopModel: "HP",
  department: "Software",
});

const loading = computed(() => {
  return store.state.loading;
});

const register = async (e) => {
  e.preventDefault();
  if (
    !user.username ||
    !user.password ||
    !user.id ||
    !user.sn ||
    !user.laptopModel ||
    !user.department
  ) {
    alert("Ahhh....username and password field couldn't be empty!!!");
  } else {
    store.dispatch("auth/register", user);
  }
};
</script>

<style>
</style>