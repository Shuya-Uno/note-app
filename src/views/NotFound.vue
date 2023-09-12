<template>
    <div id="not-found-area">
        <p>page not found</p>
    </div>

</template>

<script>
    export default {
        emits: ['mountNotFound'],

        mounted(){
            this.$emit('mountNotFound')
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