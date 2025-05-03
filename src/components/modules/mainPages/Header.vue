<template>
    <div class="container-header">
        <div class="container-main-logo-sections">
            <div class="container-icon-menu">
                <i class="fa-solid fa-bars"></i>
            </div>
            <div class="container-title-logo">
                <Logo></Logo>
            </div>
            <div class="container-sections">
                <div class="cont-items">
                    <itemHeader
                        text="Peliculas"
                    ></itemHeader>
                    <itemHeader
                        text="Promociones"
                    ></itemHeader>
                </div>
                <div class="container-buttons-auth">
                    <loginRegisterButton></loginRegisterButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Logo from '../logo/Logo.vue';
import itemHeader from '../itemsHeader/itemHeader.vue';
import loginRegisterButton from '../buttons/loginRegisterButton.vue';

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
    /* background-color: orange; */
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    width: 50%;
    /* gap: 20%; */
}

.cont-items {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10%;
}

.container-buttons-auth {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
}

.container-icon-menu {
    position: relative;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: white;
    border: solid 1px white;
    padding: 7px;
    border-radius: 10px;
}

@media screen and (max-width: 1350px){
    .container-sections {
        display: none;
    }

    .container-title-logo {
        width: 100%;
    }

    .container-main-logo-sections {
        width: 100%;
        padding-left: 20px;
        /* gap: 25px; */
    }

    .container-icon-menu {
        display: flex;
    }
}

</style>