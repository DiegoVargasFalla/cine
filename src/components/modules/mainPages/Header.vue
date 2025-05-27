<template>
    <div class="container-header" id="container-header">
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
                        text="PELICULAS"
                    ></itemHeader>
                    <itemHeader
                        text="PROMOCIONES"
                    ></itemHeader>
                </div>
                <div v-if="!storeRegister.registerUser" class="container-buttons-auth">
                    <loginRegisterButton></loginRegisterButton>
                </div>
            </div>
            <div v-if="!storeRegister.registerUser" class="container-button-login-small">
                <RouterLink to="/login" class="button-text-small">Iniciar</RouterLink>
            </div>
            <div v-if="storeRegister.registerUser" class="container-firs-letter">
                {{ storeRegister.firstLeter }}
            </div>
        </div>
    </div>
</template>

<script setup>
import Logo from '../logo/Logo.vue';
import itemHeader from '../itemsHeader/itemHeader.vue';
import loginRegisterButton from '../buttons/loginRegisterButton.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStoreLogin } from '../movieTickets/store/loginStore/loginStore';
import { useStoreRegister } from '../movieTickets/store/loginStore/registerStore';

const loginStore = useStoreLogin();
const storeRegister = useStoreRegister();

onMounted(() => {
    const registerUser = localStorage.getItem('register');
    const firstLetter = localStorage.getItem('firstLetter');

    if (registerUser === 'true') {
        storeRegister.registerUser = true;
    } if(firstLetter){
        storeRegister.firstLeter = firstLetter;
    }
})

document.addEventListener('scroll', () => {
    const header = document.getElementById('container-header')

    if (window.scrollY > 1) {
        header.classList.add('header-scroll')
    } else {
        header.classList.remove('header-scroll')
    }

})

</script>

<style scoped>

.container-header {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    height: 9vh;
    width: 80%;
    z-index: 200;
    border-radius: 25px;
    transition: all 0.3s ease;
}

.container-main-logo-sections {
    position: relative;
    /* background-color: green; */
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
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

.container-button-login-small {
    position: relative;
    background-color: #a40808;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: .5vw 3vw;
    margin-right: 3vw;
    border: solid 1px white;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.button-text-small {
    text-decoration: none;
    color: white;
    font-family: "Oswald", sans-serif;
    font-weight: 500;
}

.button-text-small:hover {
  background-color: #bb2020;
  transform: scale(1.05);
}

.button-text-small:active {
  transform: scale(0.97);
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
    }

    .container-icon-menu {
        display: flex;
    }

    .container-header {
        width: 95%;
        height: 9vh;
    }
}

.container-firs-letter {
    background-color: #a40808;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    padding: 0 2vh;
    border-radius: 50%;
    color: #ffffff;
    font-family: 'Oswald', sans-serif;
    font-size: 35px;
    font-weight: 700;
    border: solid 1px white
}

@media screen and (min-width: 1350px) {
    .container-button-login-small {
        display: none;
    }
}

.header-scroll {
    backdrop-filter: blur(6px);
    box-shadow: 0 3px 6px 0 rgb(104, 90, 90);
    background: #a40808a8;
    top: 1rem;
}

</style>