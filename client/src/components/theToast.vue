<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const toastOptions = computed(() => {
    return store.state.toast
})
</script>


<template>
  <div class="toast fixed top-0 left-0 w-full flex justify-center items-center">
    <div
      :class="[
        'toast-box shadow-lg border p-3 m-2',
        toastOptions.type === 'error'
          ? 'border-red-500 , bg-red-500 , text-white , rounded-xl'
          : toastOptions.type === 'success'
          ? 'border-blue-300 , bg-gradient-to-br from-blue-500 to-purple-500 bg-opacity-50 , text-white , rounded-xl'
          : 'border-sky-600',
      ]"
    >
      <p class="msg">{{ toastOptions.msg }}</p>
    </div>
  </div>
</template>




<style>
.toast-box {
  animation: fade-up 0.4s ease;
}

@keyframes fade-up {
  0% {
    opacity: 0;
    transform: translateY(-50%);
  }

  100% {
    opacity: 0;

    transform: translateY(0);
  }
}
</style>