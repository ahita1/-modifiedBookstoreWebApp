<template>
  <div
    class="w-full min-h-screen flex flex-col justify-center items-center bg-slate-800 font-axiforma"
  >
    <div
      class="bg-white rounded-3xl p-5 text-center w-[500px] h-[500px] shadow-2xl shadow-violet-950 flex flex-col"
    >
      <h1 class="text-2xl text-slate-600">
        Welcome To Debremarkos University Student's
        <span class="font-bold text-slate-600">Laptop Registration System</span>
      </h1>
      <p class="mt-4 font-semibold text-slate-800 opacity-70">
        We are dedicated to regulate Student's personal computer from diffrent
        frauds
      </p>
      <h1 class="mt-4 text-green-800"></h1>
      <div class="mt-auto">
        <router-link
          class="bg-slate-600 hover:bg-slate-800 focus:text-red-950 focus:underline border py-3 px-6 rounded-lg text-white"
          to="/register"
          >Sign Up</router-link
        >
        <router-link
          class="bg-slate-600 hover:bg-slate-800 focus:text-red-950 focus:underline border rounded-lg py-3 px-6 text-white ml-5"
          to="/login"
          >login</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {},
};
</script>

<style>
</style>