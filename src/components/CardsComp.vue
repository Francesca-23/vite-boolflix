<script>

import { store } from '../store';

export default {
    name: "CardsComp",

    data() {
        return {
            store
        }
    },

    methods: {

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
                return vote = Math.ceil(vote)
            } else {
                return vote = 5
            }
        }
    }
}

</script>

<template>
    <div>
        <div class="d-flex flex-wrap p-2 box">

            <div v-for="(element, index) in store.movieArray.results" :key="index" class="film-card">
                <div class="single-card position-relative">
                    <img v-if="element.poster_path" :src="imageApi(element.poster_path)" alt="">
                    <img v-else="element.poster_path == null" class="img-nera"
                        src="https://img.freepik.com/free-photo/gray-empty-blur-template-circle_1258-160.jpg?w=740&t=st=1683819457~exp=1683820057~hmac=550895184ecb244f8f6a383febfacbb00a455e4772fbfa13c97bbd625734aba7"
                        alt="film">

                    <div class="texts-up position-absolute top-0 p-4">
                        <p v-if="element.title">
                            <strong>Titolo:</strong> {{ element.title }}
                        </p>
                        <p v-else="element.name">
                            <strong>Titolo:</strong> {{ element.name }}
                        </p>
                        <p v-if="element.original_title">
                            <strong>Titolo originale:</strong> {{ element.original_title }}
                        </p>
                        <p v-if="element.original_name">
                            <strong>Titolo originale:</strong> {{ element.original_name }}
                        </p>
                        <img v-if="element.original_language" class="different-flag"
                            :src="flagApi(element.original_language.toUpperCase())" alt="">
                        <p v-else="element.original_language == null">
                            <strong>Lingua:</strong> Not Found
                        </p>
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
    </div>
</template>

<style scoped>
.film-card {
    width: calc(100% / 4);
    padding-bottom: 2rem;
}

.img-nera {
    height: 32rem;
    width: 21rem;
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
