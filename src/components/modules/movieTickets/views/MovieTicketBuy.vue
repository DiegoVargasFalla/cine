<template>
    <div class="container-buy-tickets" id="container-buy-tickets-id">
        <div class="container-second">
            <div class="container-screen">
                <div class="screen"></div>
            </div>
            <div class="container-sections-chair">
                <div class="container-center">
                    <div class="container-chair-1">
                        <ChairChoice
                        v-for="(item, index) in chairList1"
                        :key="index"
                        :id="item.id"
                        :row="item.row"
                        :num="item.num"
                        :available="item.available"
                        ></ChairChoice>
                    </div>
                    <div class="container-chair-2">
                        <ChairChoice
                        v-for="(item, index) in chairList2"
                        :key="index"
                        :id="item.id"
                        :row="item.row"
                        :num="item.num"
                        :available="item.available"
                        ></ChairChoice>
                    </div>
                    <div class="container-chair-3">
                        <ChairChoice
                        v-for="(item, index) in chairList3"
                        :key="index"
                        :id="item.id"
                        :row="item.row"
                        :num="item.num"
                        :available="item.available"
                        ></ChairChoice>
                    </div>
                </div>
                <div class="container-right">
                    <div class="container-car-buy">
                        <BuyCard></BuyCard>
                    </div>
                    <div class="container-indications">
                        <div class="unavalible-chair content-per-indication">
                            <ChairChoice
                            :proof="true"
                            ></ChairChoice>
                            <span>No disponnible</span>
                        </div>
                        <div class="avalible-chair content-per-indication">
                            <ChairChoice
                            :available="true"
                            :proof="true"
                            ></ChairChoice>
                            <span>Disponnible</span>
                        </div>
                        <div class="selected-chair content-per-indication">
                            <ChairChoice
                            :available="true"
                            :exaple="true"
                            :proof="true"
                            ></ChairChoice>
                            <span>Seleccionado</span>
                        </div>
                    </div>
                </div>
                <div class="container-proof"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
// import Header from '../../mainPages/Header.vue';
import ChairChoice from './ChairChoice.vue';
// import Footer from '../../mainPages/Footer.vue';
import BuyCard from './BuyCard.vue';
import { onMounted } from 'vue';

onMounted(() => {
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0;
})

const chairList1 = [
  { id: 1, row: 'A', num: 1, available: false },
  { id: 2, row: 'A', num: 2, available: true },
  { id: 3, row: 'B', num: 1, available: false },
  { id: 4, row: 'B', num: 2, available: true },
  { id: 5, row: 'C', num: 1, available: false },
  { id: 6, row: 'C', num: 2, available: true },
  { id: 7, row: 'D', num: 1, available: false },
  { id: 8, row: 'D', num: 2, available: true },
  { id: 9, row: 'E', num: 1, available: false },
  { id: 10, row: 'E', num: 2, available: true },
  { id: 11, row: 'F', num: 1, available: true },
  { id: 12, row: 'F', num: 2, available: false },
  { id: 13, row: 'G', num: 1, available: true },
  { id: 14, row: 'G', num: 2, available: false },
  { id: 15, row: 'H', num: 1, available: true },
  { id: 16, row: 'H', num: 2, available: false }
];

const chairList2 = [
  { id: 17, row: 'A', num: 3, available: false },
  { id: 18, row: 'A', num: 4, available: true },
  { id: 19, row: 'A', num: 5, available: true },
  { id: 20, row: 'A', num: 6, available: false },
  { id: 21, row: 'A', num: 7, available: true },
  { id: 22, row: 'B', num: 3, available: true },
  { id: 23, row: 'B', num: 4, available: false },
  { id: 24, row: 'B', num: 5, available: true },
  { id: 25, row: 'B', num: 6, available: true },
  { id: 26, row: 'B', num: 7, available: true },
  { id: 27, row: 'C', num: 3, available: true },
  { id: 28, row: 'C', num: 4, available: false },
  { id: 29, row: 'C', num: 5, available: true },
  { id: 30, row: 'C', num: 6, available: true },
  { id: 31, row: 'C', num: 7, available: false },
  { id: 32, row: 'D', num: 3, available: true },
  { id: 33, row: 'D', num: 4, available: true },
  { id: 34, row: 'D', num: 5, available: true },
  { id: 35, row: 'D', num: 6, available: true },
  { id: 36, row: 'D', num: 7, available: true },
  { id: 37, row: 'E', num: 3, available: true },
  { id: 38, row: 'E', num: 4, available: false },
  { id: 39, row: 'E', num: 5, available: true },
  { id: 40, row: 'E', num: 6, available: true },
  { id: 41, row: 'E', num: 7, available: false },
  { id: 42, row: 'F', num: 3, available: true },
  { id: 43, row: 'F', num: 4, available: true },
  { id: 44, row: 'F', num: 5, available: true },
  { id: 45, row: 'F', num: 6, available: true },
  { id: 46, row: 'F', num: 7, available: true },
  { id: 47, row: 'G', num: 3, available: false },
  { id: 48, row: 'G', num: 4, available: true },
  { id: 49, row: 'G', num: 5, available: true },
  { id: 50, row: 'G', num: 6, available: true },
  { id: 51, row: 'G', num: 7, available: false },
  { id: 52, row: 'H', num: 3, available: true },
  { id: 53, row: 'H', num: 4, available: true },
  { id: 54, row: 'H', num: 5, available: true },
  { id: 55, row: 'H', num: 6, available: true },
  { id: 56, row: 'H', num: 7, available: false }
];

const chairList3 = [
  { id: 57, row: 'A', num: 8, available: false },
  { id: 58, row: 'A', num: 9, available: true },
  { id: 59, row: 'B', num: 8, available: true },
  { id: 60, row: 'B', num: 9, available: true },
  { id: 61, row: 'C', num: 8, available: true },
  { id: 62, row: 'C', num: 9, available: false },
  { id: 63, row: 'D', num: 8, available: true },
  { id: 64, row: 'D', num: 9, available: true },
  { id: 65, row: 'E', num: 8, available: true },
  { id: 66, row: 'E', num: 9, available: false },
  { id: 67, row: 'F', num: 8, available: true },
  { id: 68, row: 'F', num: 9, available: false },
  { id: 69, row: 'G', num: 8, available: true },
  { id: 70, row: 'G', num: 9, available: true },
  { id: 71, row: 'H', num: 8, available: false },
  { id: 72, row: 'H', num: 9, available: true }
];

</script>

<style scoped>

.container-buy-tickets {
    position: relative;
    /* background-color: #12100D; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
}

.container-second {
    position: relative;
    /* background-color: #12100D; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
}

.container-three {
    position: relative;
    background-color: orange;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;
}

.container-screen {
    position: relative;
    /* background-color: gray; */
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    height: 25vh;
    width: 80%;
}

.container-sections-chair {
    /* background-color: antiquewhite; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3lh;
    width: 100%;
}

.container-left {
    position: relative;
    /* background-color: gray; */
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 25%;
}

.container-center {
    /* background-color: green; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 60px;
    height: 100%;
    width: 75%;
    padding-right: 20px;
}

.container-right {
    position: relative;
    /* background-color: gray; */
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    min-height: 40vh;
    width: 25%;
    gap: 25px;
    padding: 10px 0;
    margin-right: 15px;
}

.container-indications {
    /* background-color: orange; */
    position: relative;
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    height: 50%;
    width: 100%;
    gap: 10px;
    order: 1;
}

.content-per-indication {
    position: relative;
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    gap: 10px;

    font-family: 'Roboto', sans-serif;
    font-size: 17px;
    color: white;
    font-weight: 400;
}

.container-chair-1,
.container-chair-3 {
    position: relative;
    /* background-color: aliceblue; */
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(8, minmax(0, 1fr));
    column-gap: 20px;
    row-gap: 8px;
}

.container-chair-2 {
    position: relative;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-template-rows: repeat(8, minmax(0, 1fr));
    gap: 6px;
    column-gap: 20px;
    row-gap: 8px;
}

.container-chair {
    position: relative;
    background-color: rgb(34, 88, 70);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    width: 80%;
}

.screen {
    position: relative;
    background-color: whitesmoke;
    height: 80%;
    width: 80%;
    transform: perspective(200px) rotateX(-8deg);
    box-shadow: 5px 5px 10px whitesmoke,
                -5px -5px 12px whitesmoke;
}

.container-car-buy {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: orange; */
    height: 50%;
    width: 100%;
    margin-top: 25px;
    order: 2;
}

@media screen and (max-width: 1150px) {
    .container-sections-chair {
        flex-direction: column;
    }
    .container-right {
        display: flex;
        width: 90%;
        gap: 0px;
    }
    .container-center {
        justify-content: center;
        width: 85%;
        gap: 44px;
        /* margin-top: 120px; */
        padding: none;
    }
    .container-sections-chair {
        padding: 2px;
    }
    .container-chair-1,
    .container-chair-2,
    .container-chair-3 {
        column-gap: 37px;
    }
    .container-indications {
        margin-top: 30px;
    }
}

</style>