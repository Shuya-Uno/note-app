<template>
    <SideMenu ref="sideMenuComponent" />

    <NoteArea />

    <div id="create-note-button">
    <img src="../assets/icons/edit_FILL0_wght400_GRAD0_opsz24.svg" alt="create-note-icon" class="icon-bs-size"/>
    </div>
</template>

<script>
    import SideMenu from '../components/SideMenu.vue'
    import NoteArea from '../components/NoteArea.vue'
    import { inject, onMounted } from 'vue'

    export default {
        name: 'Note',
        components: {
            NoteArea,
            SideMenu
        },

        emits: ['mountNote'],

        setup(){
            const pageStore = inject('pageStore')
            const headerTitleStore = inject('headerTitleStore')

            onMounted(() => {
                pageStore.definePage('note')
                headerTitleStore.setTitle('くだものパーティー')
            })
        }
    }
</script>

<style>
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
        .icon-bs-size {
            width: var(--icon-size-tablet);
        }

        #create-note-button {
            right: 1rem;
            padding: var(--create-note-btn-padding-tablet);
        }
    }
</style>