<template>
    <div id="backdrop" v-show="!sideMenuHidden" @click="toggleSideMenu"></div>
    <section id="side-menu" ref="sideMenu">
      <div id="create-tree-btn-area">
        <div id="create-tree-button">
          <img src="../assets/icons/edit_document_FILL0_wght400_GRAD0_opsz24.svg" alt="create-tree-icon" id="create-tree-icon" class="icon-bs-size" />
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

</template>

<script>
    import Footer from './Footer.vue'

    export default {
        props: ['sideMenuHidden'],
        components: {
            Footer
        }
    }
</script>

<style>
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

        position: absolute;
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

    @media only screen and (min-width: 750px) {
        .icon-bs-size {
            width: var(--icon-size-tablet);
        }
    }
    @media only screen and (min-width: 1200px) {
        #side-menu {
            width: 18rem;

            left: 0rem;
        }
    }
</style>