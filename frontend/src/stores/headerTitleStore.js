import { defineStore } from 'pinia'

export const useHeaderTitleStore = defineStore('headerTitleStore', {
    state: () => ({
        title: null
        // {
        //     note: 'くだものパーティー',
        //     about: 'About',
        //     notFound: '404'
        //   }
    }),

    actions: {
        setTitle(title){
            this.title = title
        }
    }
})