<template>
    <div class="container-preview">
        <div class="background-image" :style="{backgroundImage: `url(${url})`}"></div>
        <div class="container-info-preview-moview">
            <div class="content-info-movie">
                <div class="container-end-info-movie">
                    <h1 class="title">{{ moviesStore.getTitle() }}</h1>

                    <ul class="details">
                        <li class="text-li"><strong class="font-text-strong">Genero:</strong>
                        <itemGender
                            v-for="(item, index) in moviesStore.getListGendersPerMovie()"
                            :gender="item"
                        ></itemGender>
                        </li>
                        <li class="text-li"><strong class="font-text-strong">Duración:</strong>{{ moviesStore.getTime() }} min</li>
                        <li class="text-li"><strong class="font-text-strong">Clasificación:</strong><i class="fa-solid fa-star icon"></i>  {{ moviesStore.getScope() }}</li>
                        <li class="text-li"><strong class="font-text-strong">Director:</strong> {{ moviesStore.getDirector() }}</li>
                        </ul>
                    <div class="container-descripton">
                        <p class="description">{{ moviesStore.getDescription() }}</p>
                    </div>
                </div>
                <RouterLink to="/tickets" class="container-button-buy text-buy">Comprar Entradas</RouterLink>
            </div>
            
        </div>
    </div>
</template>

<script setup>
import itemGender from '../itemsGenders/itemGender.vue';
import { useMoviesStore } from '@/stores/moviesStore/MoviesStore';
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const moviesStore = useMoviesStore();

const url = computed(() =>  'https://image.tmdb.org/t/p/w500' + moviesStore.getBackdropPath());

</script>

<style scoped>

.container-preview {
    position: relative;
    background-color: gray;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* height: 80%; */
    aspect-ratio: 16 / 9;
    width: 70%;
    z-index: 250;
    border-radius: 40px;
    overflow: hidden;
    border: solid 0.5px white;
    color: white;
}

.background-image {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    top: 0;
    height: 100%;
    width: 100%;
}

.container-info-preview-moview {
    position: relative;
    background: linear-gradient(to right, rgb(0, 0, 0) , rgba(0, 0, 0, 0.751), rgba(0, 0, 0, 0.514),transparent, transparent);
    display: flex;
    align-items: center;
    justify-content: end;
    flex-direction: column;
    height: 100%;
    width: 100%;
}

@media screen and (max-width: 1200px) {
    .container-preview {
        width: 90%;
    }
}

.content-info-movie {
    position: relative;
    /* background-color: green; */
    display: flex;
    align-items: start;
    justify-content: space-evenly;
    flex-direction: column;
    height: 72%;
    width: 100%;
    padding-left: 30px;
}

.container-end-info-movie {
    position: relative;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    width: 100%;
}

.movie-info {
  width: 100%;
  max-width: 400px;
  padding: 24px;
  background-color: #1a1a1a;
  border-radius: 12px;
  color: white;
  font-family: "Cal Sans", sans-serif;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 1px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
}

.title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 4vw;
    text-transform: uppercase;
    color: whitesmoke;
    font-weight: 700;
    letter-spacing: 3px;
}

.details {
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
}

.details li {
  margin-bottom: 5px;
}

.description {
    line-height: 1.1;
    color: #dddddd;
    margin-top: -8px;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 400;
}

.font-text-strong {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    color: white;
    font-weight: 600;
}

.text-li {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: left;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 300;
    gap: 8px;
}

.container-descripton {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: red; */
    width: 60%;
}

.icon {
    color: rgb(191, 191, 15);
    font-size: 14px;
}

.container-button-buy {
    position: relative;
    background-color: #8e0b0b;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 60%;
    border-radius: 20px;
    transition: all 0.3s ease;
    box-shadow: inset 3px 3px 5px rgba(168, 132, 132, 0.463);
}

.container-button-buy:hover {
    transform: translateY(-1px) scale(1.01);
    box-shadow: inset 3px 3px 4px rgba(168, 132, 132, 0.463),
    0px 2px 8px rgba(72, 70, 70, 0.378);
    background-color: #7c0a0a;
}

.text-buy {
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    color: white;
    font-weight: 700;
    text-decoration: none;
}

@media screen and (max-width: 1000px) {
    .content-info-movie {
        height: 100%;
    }
}

@media screen and (max-width: 100px) {
    .container-descripton {
        width: 98%;
    }
}

@media screen and (max-width: 700px) {
    .container-preview {
        aspect-ratio: 4 / 5;
    }

    .description {
        font-size: 4vw;
    }

    .title {
        font-size: 6vw;
    }

    .font-text-strong {
        font-size: 3.5vw;
    }

    .container-button-buy {
        width: 90%;
    }
}

</style>