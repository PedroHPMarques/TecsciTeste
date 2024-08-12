import { defineStore } from 'pinia'
import axios from 'axios'

export const useNomesStore = defineStore('nomes', {
  state: () => ({
    nomesRanking: [],
    loading: false,
    error: null,
    selectedDecade: 2000,
  }),
  actions: {
    async fetchNomesRanking(decade = this.selectedDecade) {
      this.loading = true
      this.error = null
      try {
        const response = await axios.get(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking/?decada=${decade}`)
        this.nomesRanking = response.data
      } catch (error) {
        this.error = 'Erro ao buscar dados'
      } finally {
        this.loading = false
      }
    },
    updateDecade(decade) {
      this.selectedDecade = decade
      this.fetchNomesRanking(decade)
    }
  }
})
