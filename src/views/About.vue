<template>

    <NoteAreaAbout />
</template>

<script>
    import { inject, onMounted } from 'vue'
    import NoteAreaAbout from '../components/NoteAreaAbout.vue'
    export default {
        components: {
            NoteAreaAbout
        },
        setup(){
            const headerTitleStore = inject('headerTitleStore')
            const pageStore = inject('pageStore')
            onMounted(() => {
                pageStore.definePage('about')
                headerTitleStore.setTitle('About')
            })
        }
    }
</script>