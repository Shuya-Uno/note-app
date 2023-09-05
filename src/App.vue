<template>
  <Header @toggle="toggleSideMenu"/>

  <main>
    <div id="backdrop" v-show="!sideMenuHidden" @click="toggleSideMenu"></div>
    <section id="side-menu" ref="sideMenu">
      <div id="create-tree-btn-area">
        <div id="create-tree-button">
          <img src="./assets/icons/edit_document_FILL0_wght400_GRAD0_opsz24.svg" alt="create-tree-icon" id="create-tree-icon" class="icon-bs-size" />
          <span id="create-tree-text">新規メモ</span>
        </div>
      </div>

      <ul>
        <li>くだものパーティー</li>
        <div class="list-drop-gutter"></div>
        <li>晩御飯</li>
        <div class="list-drop-gutter"></div>
        <li>買い物</li>
        <div class="list-drop-gutter"></div>
        <li>あれ</li>
        <div class="list-drop-gutter"></div>
        <li>旅行プラン</li>
      </ul>

      <Footer />
    </section>

    <NoteArea />

    <div id="create-note-button">
      <img src="./assets/icons/edit_FILL0_wght400_GRAD0_opsz24.svg" alt="create-note-icon" class="icon-bs-size"/>
    </div>
  </main>
</template>

<script>
import Header from './components/Header.vue'
import NoteArea from './components/NoteArea.vue'
import Footer from './components/Footer.vue'

export default {
  name:'App',
  components: {
    Header,
    NoteArea,
    Footer
  },

  data(){
    return {
      sideMenuHidden: true,
      noteTexts: ['くだものパーティー', '晩御飯', '買い物', 'あれ', '旅行プラン']
    }
  },

  methods: {
    toggleSideMenu(){
      if (!this.sideMenuHidden){
        this.$refs.sideMenu.style.left = "-12rem";
      }

      else {
        this.$refs.sideMenu.style.left = 0;
      }

      this.sideMenuHidden = !this.sideMenuHidden;

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
  --height-main-area: calc(100vh - 56px);
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


#app {
  height: 100vh;

  background-image: linear-gradient(30deg, rgba(38, 32, 144, 1) 0%, rgba(29, 29, 227, 1) 35%, rgba(0, 212, 255, 1) 100%);
  background-repeat: no-repeat;

  font-family: 'Noto Sans JP', sans-serif;
}

main {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
}

#backdrop {
  position: fixed;
  width: 100vw;
  height: var(--height-main-area);
  z-index: 1;

  background-color: rgba(0, 0, 0, 0.2);
}

#side-menu {
  grid-column: 1 / 2;
  
  width: 12rem;
  height: var(--height-main-area);
  background-image: linear-gradient(30deg, rgba(80,84,204,1) 0%, rgba(100,106,240,1) 35%, rgba(176,179,255,1) 100%);
  /* opacity: 1; */

  position: fixed;
  left: -12rem;

  z-index: 2;

  transition: left 0.35s;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(8, 1fr);
}

#create-tree-btn-area {
  display: flex;
  justify-content: center;
  align-items: center;
}

#create-tree-button {
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 1.5rem auto;
  padding: 0.5rem;

  width: fit-content;

  border-radius: 4px;

  background-color: var(--color-off-white);
}

#create-tree-icon {
  margin-right: 0.2rem;
}

#create-tree-text {
}

ul {
  grid-row: 2 / 7;

  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(min-content, max-content);

  overflow-y: scroll;
  scrollbar-width: none;
}

ul > li {
  text-align: center;
  padding: 0.25rem 1rem;

  /* background-color: rgba(176,179,255,1); */
  /* background-color: #E07869; */
  /* background-color: #95D7E0; */
  /* background-color: #BA9EFF; */
  /* background-color: #9F72ED; */
  /* background-color: #9A3CFF; */
  /* background-color: #40FACD; */
  /* background-color: #5BF0FA; */
  /* background-color: #8FEDFA; */
  /* background-color: #7EC8FA;
  background-color: #8ACFFA;
  background-color: #9FD4FA; */
  background: linear-gradient(30deg, rgb(111, 191, 244) 0%, rgba(138,207,250,1) 35%, rgb(195, 230, 255) 100%);
}

ul > li:nth-child(1) {
  /* background-color: rgba(80,84,204,1); */
  /* background-color: #62E0B1; */
  /* background-color: #52D4E0; */
  /* background-color: #2B34E0; */
  /* background-color: #263CEB; */
  background-color: #1B33EB;
  /* background-image: linear-gradient(30deg, rgba(80,84,204,1) 0%, #1b2ce5 100%); */
  background-image: none;
  color: var(--color-off-white);
}

.list-drop-gutter {
  height: 1px;
  background-color: #1a2de5;
}

#create-note-button {
  position: fixed;
  bottom: 1.5rem;
  right: 0.8rem;

  padding: 0.5rem;

  background-color: var(--color-off-white);
  border-radius: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}


@media only screen and (min-width: 750px) {
  :root {
    font-size: 18px;
    --height-main-area: calc(100vh - 63px);

    --icon-size-tablet: calc(24px * 1.125);
    --create-note-btn-padding-tablet: calc(0.5rem * 1.125);
  }

  #backdrop {
    display: none;
  }

  .icon-bs-size {
    width: var(--icon-size-tablet);
  }

  #create-note-button {
    right: 1rem;
    padding: var(--create-note-btn-padding-tablet);
  }

}
</style>