<template>
    <div class="container-header">
        <div class="container-main-logo-sections">
            <div class="container-title-logo">
                <Logo></Logo>
            </div>
            <div class="container-sections">

            </div>
        </div>
    </div>
</template>

<script setup>
import Logo from '../modules/logo/Logo.vue';

</script>

<style scoped>

.container-main-logo-sections {
    position: relative;
    /* background-color: green; */
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 80%;
}

.container-header {
    position: relative;
    background-color: #8e0b0b;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 9vh;
    width: 100%;
}

.container-title-logo {
    position: relative;
    /* background-color: orange; */
    display: flex;
    align-items: center;
    justify-content: start;
    height: 100%;
    width: 50%;
}

.container-sections {
    position: relative;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 50%;
}

</style>