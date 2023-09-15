import { defineStore } from 'pinia'

export const useShowSideMenuStore = defineStore('showSideMenuStore', {
    state: () => ({
        showSideMenu: false
    })
})