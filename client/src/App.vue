<script setup>
import theLoading from './components/theLoading.vue';
import theToast from './components/theToast.vue';
import { useStore } from "vuex"
import { computed } from "vue";
import TheToast from './components/theToast.vue';


const store = useStore()


const loading = computed(() => {
  return store.state.loading
})

const toastShow = computed(() => {
  return store.state.toast.show
})

</script>

<template>
<div class="parent">
  <theLoading v-show="loading" />
  <theToast v-show="toastShow"/>
  <router-view> </router-view>
</div>
</template>

<style>

</style>
