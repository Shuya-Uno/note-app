<template>
  <Header />

  <main>
    <router-view />
  </main>
</template>

<script>
import { onMounted, provide, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useNoteStore } from './stores/noteStore.js'
import { usePageStore } from './stores/pageStore.js'
import { useHeaderTitleStore } from './stores/headerTitleStore.js'
import { useShowSideMenuStore } from './stores/showSideMenuStore.js'

import Header from './components/Header.vue'

export default {
  name:'App',
  components: {
    Header
  },

  setup(){

    const noteStore = useNoteStore()

    const pageStore = usePageStore()

    const showSideMenuStore = useShowSideMenuStore()

    const headerTitleStore = useHeaderTitleStore()

    const { showSideMenu } = storeToRefs(showSideMenuStore)

    const allNotes = ref()

    function toggleShowMenu(){
      showSideMenu.value = !showSideMenu.value;
    }

    onMounted(() => {
      fetch('http://localhost:50000/api/app/')
        .then(res => res.json())
          .then(data => {
            const [ d ]  = data
            // destructuring array
            
            console.log(d)
            allNotes.value = d

            console.log(allNotes.value)
            noteStore.updateTitles(d)

            noteStore.updateTexts(d)

            console.log(noteStore.noteTitles)
            console.log(noteStore.noteTexts)
          })
        .catch(err => console.log(err))
    })

    // watch(allNotes, () => {
    //   noteStore.updateTitles(allNotes.value)
    // })

    provide('noteStore', noteStore)
    provide('showSideMenu', showSideMenu)
    provide('toggleShowMenu', toggleShowMenu)
    provide('pageStore', pageStore)
    provide('headerTitleStore', headerTitleStore)

    return {
      showSideMenu,
      headerTitleStore,
      pageStore
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --color-off-white: #eee;
  --height-main-area: calc(100vh - 60.8px);
}

@font-face {
  font-family: "Noto Sans JP";
  src: url("./assets/fonts/NotoSansJP-Regular.ttf") format("opentype");
  font-style: normal;
  font-weight: 400;
}

@font-face {
  font-family: "Noto Sans JP";
  src: url("./assets/fonts/NotoSansJP-Bold.ttf") format("opentype");
  font-style: normal;
  font-weight: 700;
}

body {
  /* background-color:seashell; */
  /* background-color:#e9aaa9; */
  background-color:#ededeb;
  background-color: #daa767;
  /* background-image: linear-gradient(30deg, #daa767 0%, #e9aaa9 35%, #ededeb 100%); */
  background-image: linear-gradient(120deg, rgba(218,167,103,1) 0%, rgba(233,170,169,1) 70%, rgba(241, 230, 243, 1) 100%);
  /* 120 degrees with #app gradiant */
}

#app {
  height: 100vh;

  max-width: 1200px;

  background-image: linear-gradient(30deg, rgba(38, 32, 144, 1) 0%, rgba(29, 29, 227, 1) 35%, rgba(0, 212, 255, 1) 100%);
  background-repeat: no-repeat;

  font-family: 'Noto Sans JP', sans-serif;
}

main {
  display: grid;
  grid-template-columns: repeat(8, 1fr);

  position: relative;

  height: var(--height-main-area);

  overflow: hidden;
}

a {
  text-decoration-line: none;
  color: rgba(29, 29, 227, 1);
}


@media only screen and (min-width: 750px) {
  :root {
    font-size: 18px;
    --height-main-area: calc(100vh - 67.8px);

    --icon-size-tablet: calc(24px * 1.125);
    --create-note-btn-padding-tablet: calc(0.5rem * 1.125);
  }
}

@media only screen and (min-width: 1200px) {
  #app {
    margin: 0 auto;
  }
  
  main {
    grid-template-columns: repeat(12, 1fr);
  }
}
</style>