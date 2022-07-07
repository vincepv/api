import { defineStore } from 'pinia'


export const useLogInStore = defineStore('LogInStore', {
  state: () => {
    return {
      IsLog: false,
      Name: "VincentPV"
    }
  }
})
