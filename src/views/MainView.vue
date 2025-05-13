<template>
    <div class="container-main">
        <Header></Header>
        <RouterView></RouterView>
        <Footer></Footer>
        <Layer v-if="showLayer"></Layer>
    </div>
</template>

<script setup>
import Header from '@/components/modules/mainPages/Header.vue';
import Footer from '@/components/modules/mainPages/Footer.vue';
import { useMoviesStore } from '@/stores/moviesStore/MoviesStore';
import Layer from '@/components/modules/layer/Layer.vue';
import { computed } from 'vue';


const moviesStore = useMoviesStore();


const showLayer = computed(() => moviesStore.getLayer());


</script>

<style scoped>

.container-main {
    position: relative;
    /* background-color: green; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;   
    height: 100%;
    width: 100%;
}

.proof-now {
    position: relative;
    height: 50vh;
    width: 100vw;
    background-color: red;
}


</style>