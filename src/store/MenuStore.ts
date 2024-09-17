import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', {
  state: () => {
    return {
      isOpen: false,
      isMobile: window.innerWidth < 750
    }
  }
})
