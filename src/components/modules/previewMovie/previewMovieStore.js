import { defineStore } from "pinia";


export const usePreviewSotre = defineStore('previewMoviewStore', {
    state: () => ({
        showPreviewMovie: false,
        buyTickets: false,
    }),
    actions: {
        getShowPreviewMovie() {
            return this.showPreviewMovie;
        },
        setShowPreviewMovie(value) {
            this.showPreviewMovie = value;
        },
        getBuyTickets() {
            return this.buyTickets;
        },
        setBuyTickets(value) {
            this.buyTickets = value;
        }
    }
})
