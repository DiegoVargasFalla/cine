<template>
    <div class="container-card" @click="onClick">
        <div class="container-img"  :style="{ backgroundImage: `url(${img})` }">
            <i class="fa-solid fa-camera icon-camera"></i>
        </div>
        <div class="container-info-movie">
            <div class="container-title">
                <h2 class="text-title">
                   {{ title }} 
                </h2>
            </div>
            <div class="container-gener-year">
                <div class="content-scope">
                    <i class="fa-solid fa-star icon"></i>
                    <h3 class="text-scope info">
                        {{ scope }}
                    </h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useMoviesStore } from '@/stores/moviesStore/MoviesStore';
import { usePreviewSotre } from '../previewMovie/previewMovieStore';

const moviesStore = useMoviesStore();
const previewMovie = usePreviewSotre();


const props = defineProps({
    img: String,
    id: Number,
    title: String,
    director: String,
    time: Number,
    gender: Array,
    scope: Number,
    
    description: String,
    backdrop_pat: String,
})

const onClick = async () => {
    moviesStore.setBackdropPath(props.backdrop_pat);

    moviesStore.setTitle(props.title);
    moviesStore.setId(props.id);
    moviesStore.setScope(props.scope);
    moviesStore.setDescription(props.description);

    moviesStore.setLayer(true);
    previewMovie.setShowPreviewMovie(true);

    extractGenders()
    moviesStore.getCredits(props.id)
    moviesStore.getTimeMovie(props.id);
}

function extractGenders() {
    const listGendersMovie = props.gender;
    const newListGenders = []

    listGendersMovie.forEach(g => {
        moviesStore.getAllListGenders().forEach(gender => {
            if (g === gender.id) {
                newListGenders.push(gender.name);
            }
        })
    })
    moviesStore.setListMoviePerMovie(newListGenders);
    console.log(moviesStore.getListGendersPerMovie());
}

function getRunTimeMovie() {
    // 
}

</script>

<style scoped>

.container-card {
    position: relative;
    background-color: rgb(66, 35, 35);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 340px;
    width: 180px;  /* here it had width 180px for cellphones*/
    border-radius: 8px;
    box-shadow: 2px 0px 5px black;
    overflow: hidden;
    transition: 0.3s all ease;
    border: 1px solid rgb(255, 255, 255);
}

.icon-camera {
    font-size: 100px;
    color: rgb(35, 36, 35);
    z-index: -50;
}

.container-card:hover {
    transform: scale(1.04) translateY(-3px);
    cursor: pointer;
    box-shadow: 3px 3px 5px rgba(110, 103, 103, 0.764);
}

.container-img {
    position: relative;
    background-color: gray;
    height: 85%;
    width: 100%;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-position: center;
    background-repeat: no-repeat;
}

.container-info-movie {
    position: relative;
    /* background-color: rgb(53, 50, 50); */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 15%;
    width: 100%;
    padding: 5px;
}

.container-title {
    position: relative;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
}

.text-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 19px;
    text-transform: uppercase;
    color: whitesmoke;
    font-weight: 500;
    /* letter-spacing: 0px; */
}

.container-gener-year {
    position: relative;
    /* background-color: green; */
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    gap: 5px;
}

.hr {
    position: relative;
    height: 100%;
    border: 0.5px solid rgb(255, 255, 255);
}

.info {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: white;
    font-weight: 400;
}

.content-scope {
    position: relative;
    /* background-color: orange; */
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    gap: 5px;
}

.container-director {
    position: relative;
    /* background-color: aqua; */
    align-items: center;
    justify-content: start;
    width: 100%;
}

.icon {
    font-size: 12px;
    color: yellow;
}

</style>