<template>
  <Header @toggle="toggleSideMenu"/>

  <main>

    <SideMenu ref="sideMenuComponent" :sideMenuHidden="sideMenuHidden"/>

    <NoteArea />

    <div id="create-note-button">
      <img src="./assets/icons/edit_FILL0_wght400_GRAD0_opsz24.svg" alt="create-note-icon" class="icon-bs-size"/>
    </div>
  </main>
</template>

<script>
import Header from './components/Header.vue'
import SideMenu from './components/SideMenu.vue'
import NoteArea from './components/NoteArea.vue'

export default {
  name:'App',
  components: {
    Header,
    NoteArea,
    SideMenu
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
        this.$refs.sideMenuComponent.$refs.sideMenu.style.left = "-12rem";
      }

      else {
        this.$refs.sideMenuComponent.$refs.sideMenu.style.left = 0;
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

#create-note-button {
  position: absolute;
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

@media only screen and (min-width: 1200px) {
  #app {
    margin: 0 auto;
  }
  
  main {
    grid-template-columns: repeat(12, 1fr);
  }
}
</style>