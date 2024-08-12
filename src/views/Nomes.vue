<script setup>
import { onMounted, ref, watch } from 'vue'
import { useNomesStore } from '@/stores/nomesStore'
import { Chart } from 'highcharts-vue'

const nomesStore = useNomesStore()
const chartOptions = ref({})

const updateChart = (data, decade) => {
  chartOptions.value = {
    chart: {
      type: 'column'
    },
    title: {
      text: `Frequência de Nomes - Década de ${nomesStore.selectedDecade}`
    },
    xAxis: {
      categories: data.map(item => item.nome),
      title: {
        text: 'Nome'
      }
    },
    yAxis: {
      title: {
        text: 'Frequência'
      }
    },
    series: [{
      name: 'Frequência',
      data: data.map(item => item.frequencia)
    }]
  }
}

watch(() => nomesStore.nomesRanking, (newRanking) => {
  if (newRanking.length > 0) {
    const firstDecadeData = newRanking[0].res
    const decade = newRanking[0].periodo
    updateChart(firstDecadeData, decade)
  }
}, { immediate: true })

onMounted(() => {
  nomesStore.fetchNomesRanking()
})
</script>

<template>
  <main>
    <Chart :options="chartOptions" />
    <h1>Ranking de Nomes por Década - Brasil</h1>
   <div class="buttons-container">
      <button 
        @click="nomesStore.updateDecade(1950)" 
        :class="{ active: nomesStore.selectedDecade === 1950 }"
      >
        Década de 1950
      </button>
      <button 
      @click="nomesStore.updateDecade(1980)" 
        :class="{ active: nomesStore.selectedDecade === 1980 }"
      >
        Década de 1980
      </button>
      <button 
        @click="nomesStore.updateDecade(2000)" 
        :class="{ active: nomesStore.selectedDecade === 2000 }"
      >
        Década de 2000
      </button>
      <button 
      @click="nomesStore.updateDecade(2010)"  
        :class="{ active: nomesStore.selectedDecade === 2010 }"
      >
        Década de 2010
      </button>
    </div>

    <div v-if="nomesStore.loading">Carregando...</div>
    <div v-if="nomesStore.error">{{ nomesStore.error }}</div>
    <div v-for="(item, index) in nomesStore.nomesRanking" :key="index" class="ranking-container">
      <table>
        <thead>
          <tr>
            <th class="col-position">Posição</th>
            <th>Nome</th>
            <th>Frequência</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(resItem, resIndex) in item.res" :key="resIndex">
            <td class="col-position">{{ resItem.ranking }}</td>
            <td>{{ resItem.nome }}</td>
            <td>{{ resItem.frequencia }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    
  </main>
</template>


<style scoped>
main {
  padding: 2rem;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #32b46e;
}

.buttons-container {
  text-align: center;
  margin-bottom: 1rem;
}

button {
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #a6d7b6;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 1rem;
}

button.active {
  background-color: #32b46e;
}

button:hover {
  background-color: #28a65c;
}

.ranking-container {
  display: flex;
  justify-content: center;
  margin: auto;
  margin-bottom: 2rem;
}

table {
  width: 60%;
  border-collapse: collapse;
  margin-top: 1rem;
}

th, td {
  padding: 0.75rem;
  border: 1px solid #ddd;
  text-align: center; 
}

th {
  background-color: #32b46e;
  color: white;
}

.col-position {
  width: 80px; 
}

tbody tr:nth-child(odd) {
  background-color: #75727299;
}

tbody tr:hover {
  background-color: #5c5c5c;
}
</style>
