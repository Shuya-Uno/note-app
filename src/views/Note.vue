<template>
    <SideMenu ref="sideMenuComponent" @toggle="emitToggle" />

    <NoteArea />

    <div id="create-note-button">
    <img src="../assets/icons/edit_FILL0_wght400_GRAD0_opsz24.svg" alt="create-note-icon" class="icon-bs-size"/>
    </div>
</template>

<script>
    import SideMenu from '../components/SideMenu.vue'
    import NoteArea from '../components/NoteArea.vue'

    export default {
        name: 'Note',
        components: {
            NoteArea,
            SideMenu
        },

        props: ['showSideMenu'],
        emits: ['mountNote', 'toggle'],

        data(){
            return {
            }
        },
        methods: {
            toggleSideMenu(){
                if (!this.showSideMenu){
                    this.$refs.sideMenuComponent.$refs.sideMenu.style.left = "-12rem";
                }

                else {
                    this.$refs.sideMenuComponent.$refs.sideMenu.style.left = 0;
                }
            },
            emitToggle(){
                this.$emit('toggle')
            }
        },
        mounted(){
            this.$emit('mountNote')
        },
        updated(){
            this.toggleSideMenu()
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