<template>
    <RouterLink to="/" class="content-without-pading">
        <!-- <a href="/" class="link"></a> -->
        <div class="container-icon-teatro">
        </div>
        <div class="container-title-teatro">
            <h1 class="text-title">Cine Belgrano</h1>
        </div>
    </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>

<style scoped>

.link {
    position: absolute;
    top: 0;
    background-color: transparent;
    height: 100%;
    width: 100%;
    cursor: pointer;
    z-index: 100;
}

.content-without-pading {
    position: relative;
    /* background-color: #8e0b0b; */
    display: flex;
    align-items: center;
    justify-content: start;
    margin-left: 30px;
    gap: 10px;
    text-decoration: none;
}

.container-icon-teatro {
    position: relative;
    background-image: url('/src/assets/img/logoTeatro.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
    border-radius: 12px;
}

.container-title-teatro {
    position: relative;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.text-title {
    font-family: "Cal Sans", sans-serif;
    font-size: 28px;
    font-weight: 900;
    letter-spacing: 2px;
    color: white;
}

@media screen and (max-width: 600px) {
    .text-title {
        font-size: 5vw;
    }   
}

</style>