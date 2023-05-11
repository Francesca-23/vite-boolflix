<script>

import { store } from '../store';
import axios from 'axios';

export default {
    name: 'CardsDefault',

    data() {
        return {
            store
        }
    },

    created() {
        this.popularMovies()
    },

    methods: {

        popularMovies() {
            axios.get('https://api.themoviedb.org/3/movie/popular?api_key=1d030cea23b1388bde4c590ce01bf4eb&language=IT').then((res) => {
                return this.store.staticMovieArray = res.data
            })
        },

        flagApi(nation) {
            let path = `https://www.countryflagicons.com/FLAT/64/${nation}.png`

            if (nation == 'EN') {
                return 'https://cdn.pixabay.com/photo/2015/11/06/13/29/union-jack-1027898_960_720.jpg'

            } else if (nation == 'JA') {
                return 'https://cdn.pixabay.com/photo/2012/04/13/12/23/flag-32177_960_720.png'

            } else if (nation == 'HI') {
                return 'https://cdn.pixabay.com/photo/2012/04/11/15/38/flag-28560_960_720.png'

            } else if (nation == 'KO') {
                return 'https://cdn.pixabay.com/photo/2016/05/30/15/33/julia-roberts-1424985_960_720.png'

            } else {
                return path
            }

        },

        imageApi(image) {
            let path = `http://image.tmdb.org/t/p/w342${image}`
            return path
        },

        maxVote(vote) {
            if (vote < 5) {
                return vote = vote
            } else {
                return vote = 5

            }
        },

        // staticMovies() {

        //     for (let i = 0; i < 10; i++) {
        //         axios.get(`https://api.themoviedb.org/3/movie/${this.random()}?api_key=1d030cea23b1388bde4c590ce01bf4eb`).then((res) => {
        //             console.log(this.store.staticMovieObject = res.data)
        //             this.store.staticMovieObject = res.data

        //             return this.store.staticMovieArray.push(this.store.staticMovieObject)
        //         })

        //     }

        // },

        // random() {
        //     return Math.floor(Math.random() * 1000)
        // }
    }
}

</script>

<template>
    <div class="d-flex overflow-auto">
        <div v-for="(element, index) in store.staticMovieArray.results" :key="index">
            <div class="bg-container position-relative single-card">
                <img :src="imageApi(element.poster_path)" alt="">

                <div class="texts-up position-absolute top-0 p-4">
                    <p>
                        <strong>Titolo:</strong> {{ element.title }}
                    </p>
                    <p>
                        <strong>Titolo originale:</strong> {{ element.original_title }}
                    </p>
                    <img class="different-flag" :src="flagApi(element.original_language.toUpperCase())" alt="">
                    <p>
                        <strong>Voto:</strong> {{ maxVote(element.vote_average) }}
                        <span v-for="n in 5" :key="n">
                            <i v-if="n <= maxVote(element.vote_average)" class="yellow-star fa-solid fa-star"></i>
                            <i v-else class="fa-regular fa-star"></i>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg-container {
    background-color: rgb(20, 20, 20);
}

.different-flag {
    height: 1rem;
}

.yellow-star {
    color: yellow !important;
}

p {
    margin-bottom: 0;
}

.texts-up {
    display: none;
}

.single-card:hover .texts-up {
    display: block;
    background-color: rgba(0, 0, 0, 0.9);
    width: 100%;
}
</style>