<template>
    <header>
        <img src="../assets/icons/menu_FILL0_wght400_GRAD0_opsz24.svg" alt="menu-icon" id="menu-icon" class="icon-bs-size" @click="emitToggle" />
        <span id="brand-title">くだものパーティー</span>
    </header>
</template>

<script>
    export default {
        methods: {
            emitToggle(){
                this.$emit('toggle')
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

    @media only screen and (min-width: 750px) {
        #menu-icon {
            margin-left: 0.5rem;
        }
    }
</style>