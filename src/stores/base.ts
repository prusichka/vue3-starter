import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBaseStore = defineStore('base', () => {
  const state = ref<string>('')

  return {
    state,
  }
})
