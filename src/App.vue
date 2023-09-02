<template>
  <header>
    <img src="./assets/icons/menu_FILL0_wght400_GRAD0_opsz24.svg" alt="menu-icon" id="menu-icon" class="icon-bs-size" @click="toggleSideMenu" />
    <span id="brand-title">くだものパーティー</span>
  </header>
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

      <footer>
        <div id="footer-icon-container">
          <span id="help-icon" class="footer-icons">
            <img src="./assets/icons/help_FILL0_wght400_GRAD0_opsz24.svg" alt="help-icon" class="icon-bs-size">
          </span>
          <span id="contact-icon" class="footer-icons">
            <img src="./assets/icons/contact_mail_FILL0_wght400_GRAD0_opsz24.svg" alt="contact-icon" class="icon-bs-size">
          </span>
        </div>
        <span>Note App</span>
      </footer>
    </section>

    <div id="note-area">
      <div class="note-containers">
        <div class="notes">
          <span class="note-text">ますかっと
          </span>
          <div class="note-icon-container">
            <img src="./assets/icons/edit_square_FILL0_wght400_GRAD0_opsz24.svg" alt="edit-icon" class="edit-icon" />
            <img src="./assets/icons/delete_FILL0_wght400_GRAD0_opsz24.svg" alt="delete-icon" class="delete-icon icon-bs-size" />
          </div>
        </div>
      </div>

      <div class="note-drop-gutter"></div>

      <div class="note-containers">
        <div class="notes">
          <span class="note-text">らいちをたくさん買う。とりわけ美味しそうなものをたくさん。あああああああああああああああああああああああ
          </span>
          <div class="note-icon-container">
            <img src="./assets/icons/edit_square_FILL0_wght400_GRAD0_opsz24.svg" alt="edit-icon" class="edit-icon" />
            <img src="./assets/icons/delete_FILL0_wght400_GRAD0_opsz24.svg" alt="delete-icon" class="delete-icon icon-bs-size" />
          </div>
        </div>
      </div>

      <div class="note-drop-gutter"></div>

      <div class="note-containers">
        <div class="notes">
          <span class="note-text">苺</span>
          <div class="note-icon-container">
            <img src="./assets/icons/edit_square_FILL0_wght400_GRAD0_opsz24.svg" alt="edit-icon" class="edit-icon" />
            <img src="./assets/icons/delete_FILL0_wght400_GRAD0_opsz24.svg" alt="delete-icon" class="delete-icon icon-bs-size" />
          </div>
        </div>
      </div>
    </div>

    <div id="create-note-button">
      <img src="./assets/icons/edit_FILL0_wght400_GRAD0_opsz24.svg" alt="create-note-icon" class="icon-bs-size"/>
    </div>
  </main>
</template>

<script>
export default {
  data(){
    return {
      sideMenuHidden: true
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
:root {
  --color-off-white: #eee;
  --height-note-area: calc(100vh - 56px);

  --icon-size-tablet: calc(24px * 1.125);
  --create-note-btn-padding-tablet: calc(0.5rem * 1.125);
}

.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
  /* max-width: 1260px;
  margin: 0 auto; */
  height: 100vh;

  background-image: linear-gradient(30deg, rgba(38, 32, 144, 1) 0%, rgba(29, 29, 227, 1) 35%, rgba(0, 212, 255, 1) 100%);
  background-repeat: no-repeat;

  font-family: 'Noto Sans JP', sans-serif;
}

header {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-auto-rows: minmax(min-content, max-content);

  padding: 1rem;

  background-color: rgba(38, 32, 144, 0.4);
  color: #fff;
}

#brand-title {
  grid-column: 3 / 7;
  text-align: center;

  font-weight: bold;
}

#menu-icon {
  grid-column: 1 / 2;
}

main {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
}

#backdrop {
  position: fixed;
  width: 100vw;
  height: var(--height-note-area);
  z-index: 1;

  background-color: rgba(0, 0, 0, 0.2);
}

#side-menu {
  grid-column: 1 / 2;
  
width: 12rem;
  height: var(--height-note-area);
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

/* #side-menu:hover {
  translate: -12rem;
} */

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

footer {
  margin-bottom: 0.3rem;
  width: 100%;

  grid-row: 8 / 9;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.footer-icons {
  background-color: var(--color-off-white);
  border-radius: 100%;

  padding: 0.35rem;

  display: inline flex;
  justify-content: center;
  align-items: center;
}

.footer-icons > img {
  width: 1.3rem;
}

#help-icon {
  margin-right: 0.3rem;
}


#note-area {
  grid-column: 2 / 9;

  /* display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-auto-rows: minmax(min-content, max-content); */
}

#note-area > .note-containers:first-child {
    margin-top: 1rem;
}

.note-containers {
  /* grid-column: 2 / 9; */

  display: flex;
  flex-direction: row-reverse;
}

.notes {
  background-color: var(--color-off-white);

  width: fit-content;

  min-width: 6.3rem;

  padding: 2rem 1.75rem 1.5rem 1.75rem;

  margin-right: 0.5rem;

  border-radius: 2.5px;

  position: relative;

}

.note-icon-container {
  position: absolute;
  top: 0.3rem;
  right: 0.5rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 0.02rem;
}

.edit-icon {
  grid-column: 1 / 2;
  width: 1.3rem;
}

.delete-icon {
  grid-column: 2 / 3;
}

.note-drop-gutter {
  grid-column: 1 / 9;
  height: 0.4rem;
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
  }

  #backdrop {
    display: none;
  }

  .icon-bs-size {
    width: var(--icon-size-tablet);
  }

  #menu-icon {
    margin-left: 0.5rem;
  }

  #note-area {
    grid-column: 4 / 9;
  }

  .note-icon-container {
    column-gap: 0;
}

#create-note-button {
  right: 1rem;
  padding: var(--create-note-btn-padding-tablet);
}

}
</style>
