import { defineStore } from "pinia";


export const usePreviewSotre = defineStore('previewMoviewStore', {
    state: () => ({
        showPreviewMovie: false,
    }),
    actions: {
        getShowPreviewMovie() {
            return this.showPreviewMovie;
        },
        setShowPreviewMovie(value) {
            this.showPreviewMovie = value;
        }
    }
})
