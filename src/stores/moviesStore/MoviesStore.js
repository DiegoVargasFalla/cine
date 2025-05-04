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
            const options = {
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzIyZGY0ZGNjZTYwZjdlMWMyNWI5ZjFkOGVkMTQ2OSIsIm5iZiI6MTc0NjIxMDUzMC43NDQsInN1YiI6IjY4MTUwZWUyMzkwMDJlODMxZWEyMGM5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jYGwvWhEj_Iih3WiUZNQHJqF_tRDvDpurOca0KdrnYQ'
                }
            }
            return options
        },
        async getMoviesInfo() {
            const auth = this.getOptionsRequest();

            try {
                const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1', 
                    auth
                );
                const data = response.data

                if(data) {
                    console.log(data.results);
                    this.setListMovie(data.results)
                    this.getAllMovieIds();
                    this.setIsIdMovie(true);
                }
                
            } catch (Error) {
                console.log(Error.status + ", Error ehit request movie")
            }
            
        },
        async getGenders() {

            const auth = this.getOptionsRequest();

            try {
                const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list?language=es-ES', 
                    auth
                );

                const data = response.data;
                if(data) {
                    console.log(data.genres);
                    this.setAllListGenders(data.genres);
                }

            } catch(Error) {
                console.log(Error)
            }
        },
        async getCredits(idMovie) {
            const auth = this.getOptionsRequest()

            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${idMovie}/credits?language=es-ES`, 
                    auth
                );

                const data = response.data

                if (data) {
                    console.log('-> in info credits');
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
            console.log("-> in time");
            const auth = this.getOptionsRequest();
            try {
                console.log("in request time");
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=es-ES`, 
                    auth
                )
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