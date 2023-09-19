<template>
    <div id="not-found-area">
        <p>page not found</p>
    </div>

</template>

<script>
    import { inject, onMounted } from 'vue';

    export default {
        setup(){
            const headerTitleStore = inject('headerTitleStore')

            onMounted(() => {
                headerTitleStore.setTitle('404')
            })
        }
    }
</script>

<style>
    /* #app {
        font-family: 'Seaweed Script', cursive;
    }
    main {
        display: flex;
        justify-content: center;
        align-items: center;
    } */

    #not-found-area {
        grid-column: 6 / 8;
        margin: auto;
    }
</style>