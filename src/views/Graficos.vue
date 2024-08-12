<script setup>
import { ref, onMounted, watch } from 'vue'
import { Chart } from 'highcharts-vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css' 
import jsonData from '../data/index'

const chartOptions = ref({})

const startDate = ref(null)
const endDate = ref(null)

const updateChart = (data) => {
  chartOptions.value = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Gráfico de Valores'
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: 'Data e Hora'
      }
    },
    yAxis: {
      title: {
        text: 'Valor'
      }
    },
    series: [{
      name: 'Valor',
      data: data
    }]
  }
}

const filterData = () => {
  if (startDate.value && endDate.value) {
    const filteredData = jsonData.filter(item => {
      const itemDate = new Date(item.datetime).getTime()
      return itemDate >= new Date(startDate.value).getTime() && itemDate <= new Date(endDate.value).getTime()
    }).map(item => [new Date(item.datetime).getTime(), item.value])
    
    updateChart(filteredData)
  } else {
    const allData = jsonData.map(item => [new Date(item.datetime).getTime(), item.value])
    updateChart(allData)
  }
}

onMounted(() => {
  filterData()
})

watch([startDate, endDate], filterData)
</script>

<template>
  <div>
    <div class="date-filters">
      <label for="start-date">Data de Início:</label>
      <VueDatePicker v-model="startDate" id="start-date" />

      <label for="end-date">Data de Fim:</label>
      <VueDatePicker v-model="endDate" id="end-date" />
    </div>
    
    <Chart :options="chartOptions" />
  </div>
</template>

<style scoped>
.date-filters {
  margin-bottom: 20px;
}

.date-filters label {
  margin-right: 10px;
}
</style>
