<template>
  <header>
    <span id="menu-icon" class="material-symbols-outlined" @click="toggleSideMenu">menu</span>
    <span id="brand-title">くだものパーティー</span>
  </header>
  <main>
    <div id="backdrop" v-show="!sideMenuHidden" @click="toggleSideMenu"></div>
    <section id="side-menu" ref="sideMenu">
      <div id="create-tree-button">
        <span id="create-tree-icon" class="material-symbols-outlined">edit_document</span>
        <span id="create-tree-text">新規メモ</span>
      </div>

      <ul>
        <li>くだものパーティー
        </li>
        <li>晩御飯</li>
        <li>買い物</li>
        <li>あれ</li>
        <li>旅行プラン</li>
      </ul>

      <footer>
        <div id="footer-icon-container">
          <span id="help-icon" class="material-symbols-outlined">help</span>
          <span id="contact-icon" class="material-symbols-outlined">contact_mail</span>
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
            <span class="material-symbols-outlined edit-icon">edit_square</span>
            <span class="material-symbols-outlined delete-icon">delete</span>
          </div>
        </div>
      </div>

      <div class="drop-gutter"></div>

      <div class="note-containers">
        <div class="notes">
          <span class="note-text">らいちをたくさん買う。とりわけ美味しそうなものをたくさん。
          </span>
          <div class="note-icon-container">
            <span class="material-symbols-outlined edit-icon">edit_square</span>
            <span class="material-symbols-outlined delete-icon">delete</span>
          </div>
        </div>
      </div>

      <div class="drop-gutter"></div>

      <div class="note-containers">
        <div class="notes">
          <span class="note-text">苺</span>
          <div class="note-icon-container">
            <span class="material-symbols-outlined edit-icon">edit_square</span>
            <span class="material-symbols-outlined delete-icon">delete</span>
          </div>
        </div>
      </div>
    </div>

    <div id="create-note-button" class="material-symbols-outlined">
      edit
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

#app {
  /* max-width: 1260px;
  margin: 0 auto; */
  height: 100vh;

  background: linear-gradient(30deg, rgba(38, 32, 144, 1) 0%, rgba(29, 29, 227, 1) 35%, rgba(0, 212, 255, 1) 100%);
  background-repeat: no-repeat;
}

header {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-auto-rows: minmax(min-content, max-content);

  padding: 1rem;

  background-color: rgba(38, 32, 144, 0.4);
  color: white;
}

#brand-title {
  grid-column: 3 / 7;
  text-align: center;

  font-weight: bold;
}

#menu-icon {
  grid-column: 1 / 2;
}

#backdrop {
  position: fixed;
  width: 100vw;
  height: var(--height-note-area);
  z-index: 1;

  background-color: rgba(0, 0, 0, 0.2);
}

#side-menu {
  height: var(--height-note-area);
  width: 12rem;
  background-image: linear-gradient(30deg, rgba(80,84,204,1) 0%, rgba(100,106,240,1) 35%, rgba(176,179,255,1) 100%);
  /* opacity: 1; */

  position: fixed;
  left: -12rem;

  z-index: 2;

  transition: left 0.35s;
}

/* #side-menu:hover {
  translate: -12rem;
} */

#create-tree-button {
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 1.5rem auto;
  background-color: var(--color-off-white);
  padding: 0.5rem;

  width: fit-content;

  border-radius: 4px;
}

#create-tree-icon {
  margin-right: 0.2rem;
}

#create-tree-text {
}

ul {
  display: grid;
  grid-auto-columns: 100%;
  row-gap: 1px;
  background-color: #1a2de5;

  max-height: 19.5rem;

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
  background-color: #9A3CFF;
}

ul > li:nth-child(1) {
  /* background-color: rgba(80,84,204,1); */
  /* background-color: #62E0B1; */
  /* background-color: #52D4E0; */
  /* background-color: #2B34E0; */
  /* background-color: #263CEB; */
  background-color: #1B33EB;
  /* background-image: linear-gradient(30deg, rgba(80,84,204,1) 0%, #1b2ce5 100%); */
  color: var(--color-off-white);
}

footer {
  position: absolute;
  bottom: 0;
  margin-bottom: 0.3rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
}

#footer-icon-container > .material-symbols-outlined {
  background-color: var(--color-off-white);
  border-radius: 100%;

  padding: 0.35rem;

  text-align: center;

  font-size: 1.3rem;
}

#help-icon {
  margin-right: 0.3rem;
}

#note-area {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-auto-rows: minmax(min-content, max-content);
}

#note-area > .note-containers:first-child {
    margin-top: 1rem;
}

.note-containers {
  grid-column: 2 / 9;

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
  font-size: 1.3rem
}

.delete-icon {
  grid-column: 2 / 3;
}

.drop-gutter {
  grid-column: 1 / 9;
  height: 0.4rem;
}

#create-note-button {
  position: fixed;
  bottom: 1.5rem;
  right: 0.8rem;

  padding: 0.5em;

  background-color: var(--color-off-white);
  border-radius: 100%;

  text-align: center;
}
</style>
