import { defineStore } from 'pinia'

export const usePageStore = defineStore('pageStore', {
    state: () => ({
        name: 'a'
    }),
    actions: {
        definePage(name){
            this.name = name
        }
    }
})