import { defineStore } from "pinia";
import { ref } from "vue";


export const useStoreLogin = defineStore('storeLogin', {
    state: () => ({
        username: ref(),
        password: ref(),
        hiddeButtonLogin: ref(true),
    })
})