<template>
    <div class="container-main-page">
      <div class="container-first-promotions">
        <div class="container-promotions" id="container-scroll">
          <Promotion
          v-for="(item, index) in promotionsImg"
          :key="index"
          :img="item.img"
          :color="item.color"
          :list-images="promotionsImg"
          ></Promotion>
        </div>
        <div class="buttons-previus-next">
          <div class="button-previus arrow" @click="prev"><i class="fa-solid fa-arrow-left"></i></div>
          <div class="button-next arrow" @click="next"><i class="fa-solid fa-arrow-right"></i></div>
        </div>
      </div>
      <div class="indicators">
        <span class="current-img-item"
          v-for="( img, index ) in promotionsImg"
          :key="index"
          :class="{ active: index === currentImg }"
          @click="goTo(index)"
        ></span>
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
import { computed, onMounted, ref } from 'vue'

const moviesStore = useMoviesStore();

moviesStore.getMoviesInfo();
moviesStore.getGenders();

const currentImg = ref(0);
const scroll = ref(0);

onMounted(() => {
  const container = document.getElementById('container-scroll');
  container.addEventListener('scroll', handleScroll)
})

function handleScroll(event) {
  const scroll = event.target.scrollLeft;

  console.log("-> scroll: "  + scroll)
  if (scroll % 1228.800048828125 === 0) {
    const valor = Math.trunc(scroll / 1200);
    console.log("valor: " + scroll / 1200);
    currentImg.value = valor
  } 
}

const prev = () => {
  const containerScroll = document.getElementById('container-scroll');

  if(scroll.value > 0 && scroll.value <= (promotionsImg.length - 1) * 1228.800048828125) {

    scroll.value -= 1228.800048828125;
    containerScroll.scrollLeft = scroll.value;
    currentImg.value = currentImg.value -1;
  }
}

const next = () => {

  const containerScroll = document.getElementById('container-scroll');

  if(scroll.value >= 0 && scroll.value < (promotionsImg.length - 1) * 1228.800048828125) {

    scroll.value += 1228.800048828125;
    containerScroll.scrollLeft = scroll.value;
    currentImg.value = currentImg.value + 1;
    console.log("-> scroll: " + scroll.value)
    console.log("-> num img: " + currentImg.value)
  }
}


const goTo = (index) => {
  const containerScroll = document.getElementById('container-scroll');
  currentImg.value = index;
  scroll.value = index * 1200;
  containerScroll.scrollLeft = scroll.value;
}

const url = 'https://image.tmdb.org/t/p/w300/'
const promotionsImg = [
  {
    img: promoCine1,
    color: 'gray'
  },
  {
    img: promoCine2,
    color: 'gray'
  },
  {
    img: promoCine3,
    color: 'gray'
  },
  {
    img: promoCine4,
    color: 'gray'
  },
]

</script>

<style scoped>

.container-first-promotions {
  position: relative;
  background-color: #12100D;
  height: 50vh;
  width: 80%;
  border-radius: 30px;
}

.indicators {
  position: relative;
  /* background-color: green; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  gap: 8px;
}

.current-img-item {
  position: relative;
  background-color: gray;
  height: 4px;
  width: 50px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.1s ease-in;
}

.buttons-previus-next{
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 20px;
  right: 20px;
  gap: 5px;
  /* z-index: 200; */
}

.arrow {
  display: absolute;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  position: relative;
  background: rgba(128, 128, 128, 0.208);
  color: rgb(255, 255, 255);
  padding: 4px 12px;
  border-radius: 8px;
  border: solid 1px rgb(97, 95, 95);
  cursor: pointer;
}

.container-promotions {
  position: relative;
  background-color: #12100D;
  display: flex;
  align-items: center;
  height: 50vh;
  /* width: 80%; */
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
    /* background-color: green; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* height: 100%; */
    width: 100%;
    margin-top: 10vh;
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

.content-cards-movies {
    position: relative;
    /* background: url(prop.img); */
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

.active {
  background-color: white;
  transform: translateY(-6px);
}
</style>