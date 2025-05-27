<template>
    <div class="container-layer" @click="onClick">
        <PreviewMovie v-if="showPreviewMovie"></PreviewMovie>
    </div>
</template>

<script setup>
import { useMoviesStore } from '@/stores/moviesStore/MoviesStore';
import { usePreviewSotre } from '../previewMovie/previewMovieStore';
import PreviewMovie from '../previewMovie/PreviewMovie.vue';

const moviesStore = useMoviesStore();
const previewMovie = usePreviewSotre();


const showPreviewMovie = previewMovie.getShowPreviewMovie();

const onClick = () => {
    moviesStore.setLayer(false);
    moviesStore.setBackdropPath("");
}

</script>

<style scoped>

.container-layer {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.777);
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    height: 100vh;
    width: 100%;
    z-index: 200;
}

</style>