<template>
    <header>
        <img src="../assets/icons/menu_FILL0_wght400_GRAD0_opsz24.svg" alt="menu-icon" id="menu-icon" class="icon-bs-size" v-if="pageStore.name == 'note'" @click="toggleShowMenu" />
        <!-- <img src="../assets/icons/undo_FILL0_wght400_GRAD0_opsz24.svg" alt="back-icon" id="back-icon" class="icon-bs-size" v-if="page == 'about'" @click="emitToggle" /> -->
        <!-- <img src="../assets/icons/arrow_back_ios_new_FILL0_wght400_GRAD0_opsz24.svg" alt="back-icon" id="back-icon" class="icon-bs-size" v-if="page == 'about'" @click="emitToggle" /> -->
        <router-link :to="{ name: 'Note' }" id="back-home">
            <img src="../assets/icons/arrow_back_FILL0_wght400_GRAD0_opsz24.svg" alt="back-icon" id="back-icon" class="icon-bs-size" v-if="pageStore.name == 'about'" @click="emitToggle" />
        </router-link>

        <span id="header-title">{{ headerTitle }}</span>
    </header>
</template>

<script>
    import { inject, ref, watchEffect } from 'vue'

    export default {
        setup(){
            const headerTitle = ref('null')
            
            const headerTitleStore = inject('headerTitleStore')
            const pageStore = inject('pageStore')
            const toggleShowMenu = inject('toggleShowMenu')

            function changePageTitle(title){
                headerTitle.value = title
            }

            watchEffect(() => {
                changePageTitle(headerTitleStore.title)
            })

            return {
                headerTitle,
                toggleShowMenu,
                pageStore
            }
        }
    }
</script>

<style>
    header {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-auto-rows: minmax(min-content, max-content);

        padding: 1rem;
        min-height: 60.8px;
        /* setting because of the difference of heights of two icons */

        background-color: rgba(38, 32, 144, 0.4);
        color: #fff;
    }

    #header-title {
        grid-column: 3 / 7;
        text-align: center;

        font-weight: bold;
    }

    #menu-icon,
    #back-icon {
        grid-column: 1 / 2;
    }
    #back-home {
        width: fit-content;
    }

    @media only screen and (min-width: 750px) {
        header {
            min-height: 67.8px;
        }

        #menu-icon,
        #back-icon {
            margin-left: 0.5rem;
        }
        
        .icon-bs-size {
            width: var(--icon-size-tablet);
        }
    }

    @media only screen and (min-width: 1200px) {
        header {
            grid-template-columns: repeat(12, 1fr);
        }

        #header-title {
            grid-column: 5 / 9;
        }
        #menu-icon {
            display: none;
        }
    }
</style>