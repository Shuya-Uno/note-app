import { defineStore } from 'pinia'

export const useNoteStore = defineStore('noteStore', {
    state: () => ({
        noteTexts: [],
        noteTitles: []
    }),

    actions: {
        updateTitles(data){
            console.log(data)
            data.noteList.forEach((element, index) => {
                this.noteTitles[index] = element.title
            })
        },

        updateTexts(data){
            console.log(data)
            data.noteList.forEach((element) => {
                console.log(element.selected)
                if (element.selected){
                    element.notes.forEach((element, index) => {
                        this.noteTexts[index] = element.body
                    })
                }
            })
        }
    }
})