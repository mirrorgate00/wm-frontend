import { defineStore } from 'pinia'

export const useSearchDataStore = defineStore('searchData', {
  state: () => {
    return {
      searchData: null
    }
  },
  actions: {
    writeData(data) {
      this.searchData = data
    }
  }
})
