import { defineStore } from "pinia";
import { ref } from "vue";


export const useStoreRegister = defineStore('storeRegister', {
    state: () => ({
        username: ref(),
        password: ref(),
        email: ref(),
        registerUser: ref(false),
        firstLeter: "",
        forbidden: ref(false),
    })
})