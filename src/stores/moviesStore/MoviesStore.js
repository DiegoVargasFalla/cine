import axios from "axios";
import { defineStore } from "pinia";



export const useMoviesStore = defineStore('moviesStore', {
    state: () => ({
        id: String,
        title: String,
        gender: Array,
        time: Number,
        scope: Number,
        director: String,
        description: String,
        listMovies: Array,
        allListGender: Array,
        listGendersPerMovie: Array,
        listCredits: Array,
        extractDirector: String,
        layer: false,
        backdrop_path: String,
        listDetailsMovie: Array,
        listMovieId: [],
        isIdMovie: false,
    }),
    actions: {
        getId() {
            return this.id;
        },
        setId() {
            this.id = this.id;
        },
        getTitle() {
            return this.title;
        },
        setTitle(value) {
            this.title = value;
        },
        getGender() {
            return this.gender;
        },
        setGender(value) {
            this.gender = value;
        },
        getTime() {
            return this.time;
        },
        setTime(value) {
            this.time = value;
        },
        getScope() {
            return this.scope;
        },
        setScope(value) {
            this.scope = value;
        },
        getDirector() {
            return this.director;
        },
        setDirector(value) {
            this.director = value;
        },
        getListMovie() {
            return this.listMovies;
        },
        setListMovie(value) {
            this.listMovies = value;
        },
        getAllListGenders() {
            return this.allListGender;
        },
        setAllListGenders(value) {
            this.allListGender = value; 
        },
        getListGendersPerMovie() {
            return this.listGendersPerMovie;
        },
        getDescription() {
            return this.description;
        },
        setDescription(value) {
            this.description = value;
        },
        setListMoviePerMovie(value) {
            this.listGendersPerMovie = value;
        },
        getListCredits(){
            return this.listCredits;
        },
        setListCredits(value) {
            this.listCredits = value; 
        },
        getExtractDirector() {
            return this.extractDirector;
        },
        setExtractDirector(value) {
            this.extractDirector = value;
        },
        getLayer() {
            return this.layer;
        },
        setLayer(value) {
            this.layer = value;
        },
        getBackdropPath() {
            return this.backdrop_path;
        },
        setBackdropPath(value) {
            this.backdrop_path = value;
        },
        getListDetailsMovie() {
            return this.listDetailsMovie;
        },
        setListDetailsMovie(value) {
            this.listDetailsMovie = value;
        },
        getListMovieId() {
            return this.listMovieId;
        },
        setListMovieId(value) {
            this.listMovieId = value;
        },
        getIsIdMovie() {
            return this.isIdMovie;
        },
        setIsIdMovie(value) {
            this.isIdMovie = value;
        },
        getOptionsRequest() {
            const API_KEY = 'f722df4dcce60f7e1c25b9f1d8ed1469';
            const url = `https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1&api_key=${API_KEY}`;

            return url
        },
        async getMoviesInfo() {
            const auth = this.getOptionsRequest();

            try {
                const response = await axios.get(auth);
                const data = response.data

                if(data) {
                    // console.log(data.results);
                    this.setListMovie(data.results)
                    this.getAllMovieIds();
                    this.setIsIdMovie(true);
                }
                
            } catch (error) {
                console.log(error.response?.status + ", Error ehit request movie")
            }
            
        },
        async getGenders() {

            const auth = 'https://api.themoviedb.org/3/genre/movie/list?api_key=f722df4dcce60f7e1c25b9f1d8ed1469&language=es-ES';

            try {
                const response = await axios.get(auth);

                const data = response.data;
                if(data) {
                    this.setAllListGenders(data.genres);
                    // console.log(this.getAllListGenders());
                }

            } catch(Error) {
                console.log(Error)
            }
        },
        async getCredits(idMovie) {
            const auth = `https://api.themoviedb.org/3/movie/${idMovie}/credits?api_key=${'f722df4dcce60f7e1c25b9f1d8ed1469'}&language=es-ES`;

            try {
                const response = await axios.get(auth);

                const data = response.data

                if (data) {

                    this.setListCredits(data.crew);
                    this.getListCredits().forEach(person => {
                        if(person.job === 'Director') {
                            this.setDirector(person.name);
                            // console.log(this.getDirector());
                            return;
                        }
                    })
                }

            } catch(Error) {
                console.log(Error)
            }
        },
        async getTimeMovie(id) {

            const auth = `https://api.themoviedb.org/3/movie/${id}?api_key=${'f722df4dcce60f7e1c25b9f1d8ed1469'}&language=es-ES`;
            try {
                const response = await axios.get(auth);
                const data = response.data;
                if (data) {
                    this.setTime(data.runtime);
                } else {
                }

            } catch(Error) {
                console.log(Error);
            }

        },
        getAllMovieIds() {
            const listId = [];
            this.getListMovie().forEach(movie => {
                listId.push(movie.id);
            });
            this.setListMovieId(listId);
        }
    }
})