<template>
    <div class="container-card">
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
                <div class="content-year">
                    <h3 class="text-year info">
                        {{ time }}
                    </h3>
                </div>
                <span class="info">min</span>
                <hr class="hr">
                <div class="content-gender">
                    <h3 class="text-gender info">
                        {{ gender }}
                    </h3>
                </div>
            </div>
            <div class="content-scope">
                <i class="fa-solid fa-star icon"></i>
                <h3 class="text-scope info">
                    {{ scope }}
                </h3>
            </div>
            <div class="container-director">
                <h3 class="text-director info">
                    {{ director }}
                </h3>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    title: String,
    director: String,
    time: Number,
    gender: String,
    scope: Number,
    img: String
})

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
    box-shadow: 3px 3px 5px rgb(133, 125, 125);
}

.container-img {
    position: relative;
    background-color: gray;
    height: 75%;
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
    height: 25%;
    width: 100%;
    padding: 10px;
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
    font-size: 24px;
    text-transform: uppercase;
    color: whitesmoke;
    letter-spacing: 1.5px;
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