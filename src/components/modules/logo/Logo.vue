<template>
    <div class="content-without-pading">
        <div class="container-icon-teatro">
        </div>
        <div class="container-title-teatro">
            <h1 class="text-title">Teatro Belgrano</h1>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>

.content-without-pading {
    position: relative;
    /* background-color: #8e0b0b; */
    display: flex;
    align-items: center;
    justify-content: start;
    margin-left: 30px;
    gap: 10px;
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
    /* width: 50%; */
}

.text-title {
    font-family: "Cal Sans", sans-serif;
    font-size: 28px;
    font-weight: 900;
    letter-spacing: 2px;
    color: white;
}


</style>