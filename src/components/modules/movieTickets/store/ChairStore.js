import { define } from "core-js/core/object";
import { defineStore } from "pinia";



export const useChairStore = defineStore('chairStore', {
    state: () => ({
        selected: Boolean
    })
})