import { defineStore } from 'pinia'

export const usePageNameStore = defineStore('pageNameStore', {
    state: () => ({
        name: {
            note: 'くだものパーティー',
            about: 'About',
            notFound: '404'
          }
    })
})