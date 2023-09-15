import { defineStore } from 'pinia'

export const useNoteStore = defineStore('noteStore', {
    state: () => ({
        noteTexts: ['ますかっと', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore saepe quam dignissimos placeat repellat itaque libero nemo voluptas! Provident, at!', '苺'],
        noteTitles: [ 'くだものパーティー', '晩御飯', '買い物', 'あれ', '旅行プラン']
    })
})