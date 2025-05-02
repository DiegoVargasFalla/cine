<template>
    <div class="content-promo-img"  :style="{ backgroundImage: `url(${img})`, backgroundColor: color}"></div>
</template>

<script setup>



const props = defineProps({
    img: String,
    color: String
})


</script>

<style scoped>

.content-promo-img {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-width: 100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;

    scroll-snap-align: center;
}

/* flex: 0 0 100%; */
/* align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    object-fit: fill;
    height: 100%;
    width: 100%;
    flex-shrink: 0; */


</style>