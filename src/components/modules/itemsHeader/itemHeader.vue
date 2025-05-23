<template>
    <div class="container-item">
        <div class="container-item-text">
            <a href="" class="text-item none-style-text">{{ text }}</a>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    text: String
})

</script>

<style scoped>

.container-item {
    /* background-color: green; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 10px;
    /* height: 100%;
    width: 100%; */
}

.container-item-text{
    /* background-color: red; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.text-item {
    font-family: "Oswald", sans-serif;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1px;
    color: white;
}

.none-style-text {
    text-decoration: none;
}


</style>