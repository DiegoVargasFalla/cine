<template>
    <div class="container-main-page">
      <div class="container-promotions">
        <Promotion
        v-for="(item, index) in promotionsImg"
        :key="index"
        :img="item.img"
        :color="item.color"
        ></Promotion>
      </div>
      <div class="content-cards-movies">
        <CardMovie
        v-for="(item, key) in moviesStore.getListMovie()"
        :key="key"
        :img="url + item.poster_path"
        :id="item.id"
        :title="item.title"
        :gender="item.genre_ids"
        :scope="item.vote_average"
        :description="item.overview"
        :backdrop_pat="item.backdrop_path"
        ></CardMovie>
      </div>
    </div>
</template>

<script setup>
import CardMovie from '../cardMovie/CardMovie.vue';
import Promotion from '../promotions/Promotion.vue';


import promoCine1 from '@/assets/img/promoCine.jpg'
import promoCine2 from '@/assets/img/promoCine2.jpg'
import promoCine3 from '@/assets/img/promoCine3.jpg'
import promoCine4 from '@/assets/img/promoCine4.jpg'

import { useMoviesStore } from '@/stores/moviesStore/MoviesStore';
import { computed } from 'vue';


const moviesStore = useMoviesStore();

moviesStore.getMoviesInfo();
moviesStore.getGenders();

const url = 'https://image.tmdb.org/t/p/w300/'
const promotionsImg = [
  {
    img: promoCine1,
    color: 'red'
  },
  {
    img: promoCine2,
    color: 'green'
  },
  {
    img: promoCine3,
    color: 'orange'
  },
  {
    img: promoCine4,
    color: 'yellow'
  },
]

</script>

<style scoped>

.container-promotions {
  position: relative;
  background-color: #12100D;
  display: flex;
  align-items: center;
  height: 50vh;
  width: 80%;
  border-radius: 30px;
  /* background: linear-gradient(to right, #7c2727, #a44949 , #c65656); */
  
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;

  scrollbar-width: none;
  -ms-overflow-style: none;

  /* mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%); */
  /* -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%); */
}

.container-promotions::-webkit-scrollbar {
  display: none;
}

.container-main-page {
    position: relative;
    /* background-color: black; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* height: 76vh; */
    width: 100%;
    margin-top: 10vh;
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

.content-cards-movies {
    position: relative;
    background: url(prop.img);
    /* background-color: green; */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    width: 80%; /* here it had width 100% for cellphones -> in 1170px screen*/
    gap: 15px;
    flex-wrap: wrap;
    margin: 20px 0 ;
}

@media screen and (max-width: 1170px) {
  .content-cards-movies {
    width: 100%;
    padding: 5px;
  }

  .container-promotions {
    width: 100%;
  }
}
</style>