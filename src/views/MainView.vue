<template>
    <div class="container-main">
        <Header></Header>
        <mainPage></mainPage>
        <Footer></Footer>
    </div>
</template>

<script setup>
import Header from '@/components/modules/mainPages/Header.vue';
import Footer from '@/components/modules/mainPages/Footer.vue';
import mainPage from '@/components/modules/mainPages/mainPage.vue';
</script>

<style scoped>

.container-main {
    position: relative;
    background-color: #151313;
    min-height: 100%;
    width: 100%;
}


</style>