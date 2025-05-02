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
        v-for="(item, key) in movieList"
        :key="key"
        :title="item.titulo"
        :director="item.director"
        :time="item.duracion"
        :gender="item.genero"
        :scope="item.puntuacion"
        :img="item.img"
        ></CardMovie>
      </div>
    </div>
</template>

<script setup>
import CardMovie from '../modules/cardMovie/CardMovie.vue';
import Promotion from '../modules/promotions/Promotion.vue';

const promotionsImg = [
  {
    img: '@/assets/img/promoCine.jpg',
    color: 'red'
  },
  {
    img: '@/assets/img/promoCine2.jpg',
    color: 'green'
  },
  {
    img: '@/assets/img/promoCine3.jpg',
    color: 'orange'
  },
  {
    img: '@/assets/img/promoCine4.jpg',
    color: 'yellow'
  },
]


const movieList = [
  {
    titulo: "Inception",
    director: "Christopher Nolan",
    duracion: 100,
    genero: "Ciencia ficción",
    puntuacion: 8.8,
    img: 'src/assets/img/theAmateur.png'
  },
  {
    titulo: "Pulp Fiction",
    director: "Quentin Tarantino",
    duracion: 130,
    genero: "Crimen",
    puntuacion: 8.9,
    img: 'src/assets/img/theAmateur.png'
  },
  {
    titulo: "El Padrino",
    director: "Francis Ford Coppola",
    duracion: 140,
    genero: "Drama",
    puntuacion: 9.2,
    img: 'src/assets/img/theAmateur.png'
  },
  {
    titulo: "Inception",
    director: "Christopher Nolan",
    duracion: 180,
    genero: "Ciencia ficción",
    puntuacion: 8.8,
    img: 'src/assets/img/theAmateur.png'
  },
  {
    titulo: "Pulp Fiction",
    director: "Quentin Tarantino",
    duracion: 140,
    genero: "Crimen",
    puntuacion: 8.9,
    img: 'src/assets/img/theAmateur.png'
  },
  {
    titulo: "El Padrino",
    director: "Francis Ford Coppola",
    duracion: 120,
    genero: "Drama",
    puntuacion: 9.2,
    img: 'src/assets/img/theAmateur.png'
  },
  {
    titulo: "Inception",
    director: "Christopher Nolan",
    duracion: 140,
    genero: "Ciencia ficción",
    puntuacion: 8.8,
    img: 'src/assets/img/theAmateur.png'
  },
  {
    titulo: "Pulp Fiction",
    director: "Quentin Tarantino",
    duracion: 140,
    genero: "Crimen",
    puntuacion: 8.9,
    img: 'src/assets/img/theAmateur.png'
  },
  {
    titulo: "El Padrino",
    director: "Francis Ford Coppola",
    duracion: 110,
    genero: "Drama",
    puntuacion: 9.2,
    img: 'src/assets/img/theAmateur.png'
  },
  {
    titulo: "Inception",
    director: "Christopher Nolan",
    duracion: 140,
    genero: "Ciencia ficción",
    puntuacion: 8.8,
    img: 'src/assets/img/theAmateur.png'
  },
  {
    titulo: "Pulp Fiction",
    director: "Quentin Tarantino",
    duracion: 190,
    genero: "Crimen",
    puntuacion: 8.9,
    img: 'src/assets/img/theAmateur.png'
  },
  {
    titulo: "El Padrino",
    director: "Francis Ford Coppola",
    duracion: 250,
    genero: "Drama",
    puntuacion: 9.2,
    img: 'src/assets/img/theAmateur.png'
  }
];


</script>

<style scoped>

.container-promotions {
  position: relative;
  background-color: orangered;
  display: flex;
  align-items: center;
  height: 45vh;
  width: 80%;
  background: linear-gradient(to right, #7c2727, #a44949 , #c65656);
  
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;

  scrollbar-width: none;
  -ms-overflow-style: none;

  mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
}

.container-promotions::-webkit-scrollbar {
  display: none;
}

.container-main-page {
    position: relative;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* height: 76vh; */
    width: 100%;
}

.content-cards-movies {
    position: relative;
    background: url(prop.img);
    /* background-color: green; */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    width: 75%; /* here it had width 100% for cellphones -> in 1170px screen*/
    gap: 15px;
    flex-wrap: wrap;
}
</style>