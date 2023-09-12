<template>

    <NoteAreaAbout />
</template>

<script>
    import NoteAreaAbout from '../components/NoteAreaAbout.vue'
    export default {
        components: {
            NoteAreaAbout
        },
        
        mounted(){
            this.$emit('mountAbout')
        }
    }
</script>