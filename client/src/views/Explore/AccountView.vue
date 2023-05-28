<script setup>
import Cookies from "js-cookie";
import { reactive, computed } from "vue";
import api from "@/helpers/api";
import { useStore } from "vuex";

const store = useStore();
const loading = computed(() => {
  return store.state.loading;
});

// import { createAvatar } from '@dicebear/core';
// import { initials } from '@dicebear/collection';

// const avatar = createAvatar(initials, {
//   "seed": "Snowball"
// });
// const svg = avatar.toString();

const account = reactive(JSON.parse(Cookies.get("account")));

const updateAccount = async () => {
  store.commit("setLoading", true, { root: true });
  try {
    const res = await api.put(`/accounts/${account._id}`, { account });
    Cookies.remove("account");
    Cookies.set("account", JSON.stringify(res.data.account));

    store.commit("setLoading", false, { root: true });
    store.commit(
      "setToast",
      { show: true, type: "success", msg: res.data.msg },
      { root: true }
    );
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  } catch (error) {
    store.commit("setLoading", false, { root: true });
    store.commit(
      "setToast",
      { show: true, msg: error.message, type: "error" },
      { root: true }
    );
  }
};

// logout
const logOut = () => {
  Cookies.remove("account");
  Cookies.remove("token");
  window.location.reload();
};

// for accout deletions
const deleteAccount = async () => {
  store.commit("setLoading", true, { root: true });
  try {
    const res = await api.delete(`/accounts/${account._id}`);

    Cookies.remove("account");
    Cookies.remove("token");
    store.commit("setLoading", false, { root: true });
    store.commit(
      "setToast",
      { show: true, msg: res.data.msg, type: "success" },
      { root: true }
    );
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  } catch (error) {
    store.commit("setLoading", false, { root: true });
    store.commit(
      "setToast",
      { show: true, msg: error.message, type: "error" },
      { root: true }
    );
  }
};
</script>

<template>
  <div
    class="account-page min-h-screen flex justify-center items-start font-axiforma"
  >
    <div
      class="account flex flex-col justify-center items-center w-[800px] m-10"
    >
      <div
        class="account-image shadow flex flex-col justify-center items-center w-32 rounded-full"
      >
        <img
          class="rounded shadow-lg"
          :src="`https://api.dicebear.com/6.x/initials/svg?seed=${account.username}`"
          alt=""
        />
      </div>

      <div
        class="account-content space-y-6 w-[500px] mt-8 shadow-2xl shadow-violet-700 text-white bg-gradient-to-br from-violet-500 to-violet-700 bg-opacity-50 rounded-lg p-8"
      >
        <div class="input-field flex flex-col items-start space-y-5">
          <label class="text-lg" for="username">Username:</label>
          <input
            type="text"
            v-model="account.username"
            class="outline-none rounded border border-white py-3 px-6 w-full bg-white text-slate-600"
          />
        </div>

        <div class="input-field flex flex-col items-start space-y-5">
          <label class="text-lg" for="password">Password:</label>
          <input
            type="password"
            v-model="account.password"
            class="outline-none rounded border border-white py-3 px-6 w-full bg-white text-slate-600"
          />
        </div>

        <div class="input-field flex flex-col items-start space-y-5">
          <label class="text-lg" for="id">ID:</label>
          <input
            type="text"
            v-model="account.id"
            class="outline-none rounded border border-white py-3 px-6 w-full bg-white text-slate-600"
          />
        </div>

        <div class="input-field flex flex-col items-start space-y-5">
          <label class="text-lg" for="id">SerialNumber:</label>
          <input
            type="text"
            v-model="account.sn"
            class="outline-none rounded border border-white py-3 px-6 w-full bg-white text-slate-600"
          />
        </div>

        <div class="input-field flex flex-col items-start w-full space-y-5">
          <label class="text-lg" for="id">laptopModel:</label>
          <select
            v-model="account.laptopModel"
            class="outline-none rounded border border-white py-3 px-6 w-full bg-white text-slate-600"
          >
            <option :selected="account.laptopModel === 'HP'" value="HP">
              HP
            </option>
            <option :selected="account.laptopModel === 'Dell'" value="Dell">
              Dell
            </option>
            <option :selected="account.laptopModel === 'Asus'" value="Asus">
              Asus
            </option>
            <option :selected="account.laptopModel === 'Acer'" value="Acer">
              Acer
            </option>
            <option :selected="account.laptopModel === 'Lenovo'" value="Lenovo">
              Lenovo
            </option>
            <option
              :selected="account.laptopModel === 'Toshiba'"
              value="Toshiba"
            >
              Toshiba
            </option>
            <option :selected="account.laptopModel === 'Other'" value="Other">
              Other
            </option>
          </select>
        </div>
        <div class="input-field flex flex-col items-start w-full space-y-5">
          <label class="text-lg" for="username">Department:</label>
          <select
            name=""
            id=""
            v-model="account.department"
            class="outline-none rounded border border-white py-3 px-6 w-full bg-white text-slate-600"
          >
            <option
              :selected="account.department === 'Software'"
              value="Software"
            >
              Software
            </option>
            <option :selected="account.department === 'IT'" value="IT">
              IT
            </option>
            <option
              :selected="account.department === 'Electrical'"
              value="Electrical"
            >
              Electrical
            </option>
            <option
              :selected="account.department === 'Mechanical'"
              value="Mechanical"
            >
              Mechanical
            </option>
            <option :selected="account.department === 'Civil'" value="Civil">
              Civil
            </option>
            <option :selected="account.department === 'Hydro'" value="Hydro">
              Hydro
            </option>
            <option
              :selected="account.department === 'Biotechnology'"
              value="Biotechnology"
            >
              Biotechnology
            </option>
            <option
              :selected="account.department === 'Medicine'"
              value="Medicine"
            >
              Medicine
            </option>
            <option
              :selected="account.department === 'Pharmacy'"
              value="Pharmacy"
            >
              Pharmacy
            </option>
            <option :selected="account.department === 'Other'" value="Other">
              Other
            </option>
          </select>
        </div>
      </div>

      <div
        class="account-button w-[500px] mt-7 flex flex-row justify-between items-center"
      >
        <div class="left">
          <button
            @click="updateAccount()"
            :disabled="loading"
            class="save-btn transition hover:bg-green-800 border-green-600 px-8 text-white py-2 bg-green-600 rounded-lg disabled:bg-green-100"
          >
            Save
          </button>
        </div>
        <div class="right space-x-10">
          <button
            @click="logOut()"
            :disabled="loading"
            class="logout-btn border border-gray-600 transition hover:bg-gray-900 hover:border-gray-900 text-white px-4 py-2 bg-gray-600 rounded-lg disabled:bg-gray-100"
          >
            Logout
          </button>
          <button
            @click="deleteAccount()"
            :disabled="loading"
            class="delete-btn border border-red-600 transition hover:bg-red-900 hover:border-red-900 text-white px-4 py-2 bg-red-600 rounded-lg disabled:bg-red-100"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>