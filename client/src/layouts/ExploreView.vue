<template>
  <div class="bg-white font-axiforma">
    <nav
      class="navbar sticky top-0 right-0 flex flex-row items-center justify-between text-white bg-violet-500 shadow-xl shadow-violet-300"
    >
      <router-link to="#" class="text-lg font-extrabold"> Home </router-link>
      <div class="search flex p-4">
        <input
          type="text"
          placeholder=" Search..."
          class="outline-none rounded-lg px-10 py-3 relative text-black"
        />
        <ion-icon
          class="w-6 h-6 absolute py-3 px-4 text-slate-400"
          name="search-outline"
        ></ion-icon>
      </div>
      <div class="lists space-x-4">
        <router-link to="#"
          ><ion-icon class="w-6 h-6 space-x-2" name="cart-outline"></ion-icon
        ></router-link>
        <router-link to="/account"
          ><ion-icon class="w-6 h-6" name="person-outline"></ion-icon
        ></router-link>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>




<script>
</script>




<style>
</style>