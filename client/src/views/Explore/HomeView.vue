<template>
  <div class="Explore">
    <Bar :data="data" :options="options" />

  </div>
</template>

<script>
import {
  Chart as ChartJS,
  Title , 
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
export default {
  name: 'App',
  components: {
    Bar
  },
  data() {
    return {
      data: {
        labels: ['January', 'February', 'March','April','May' , 'June' , 'July'],
        datasets: [{ data: [40, 20, 12,45,32,90,44] }]
      },
      options: {
        responsive: true
      }
    }
  }
};
</script>

<style>
</style>