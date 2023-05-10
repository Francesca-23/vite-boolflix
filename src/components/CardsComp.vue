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
            if (vote <= 5) {
                return vote = vote
            } else {
                return vote = 5
            }
        }
    }
}

</script>

<template>
    <div>

        <div v-for="(element, index) in store.movieArray.results" :key="index">
            <div class="film-card">
                <img :src="imageApi(element.poster_path)" alt="">
                <p><strong>Titolo:</strong> {{ element.title }} </p>
                <p><strong>Titolo originale:</strong> {{ element.original_title }} </p>
                <img class="different-flag" :src="flagApi(element.original_language.toUpperCase())" alt="">
                <p><strong>Lingua:</strong> {{ element.original_language }}</p>
                <p><strong>Voto:</strong> {{ maxVote(element.vote_average) }} </p>
            </div>
        </div>

        <div v-for="(element, index) in store.movieArray.results" :key="index">
            <div class="film-card">
                <img :src="imageApi(element.poster_path)" alt="">
                <p><strong>Titolo:</strong> {{ element.name }} </p>
                <p><strong>Titolo originale:</strong> {{ element.original_name }} </p>
                <img class="different-flag" :src="flagApi(element.original_language.toUpperCase())" alt="">
                <p><strong>Lingua:</strong> {{ element.original_language }}</p>
                <p><strong>Voto:</strong> {{ maxVote(element.vote_average) }} </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.film-card {
    padding: 1rem;
}

.different-flag {
    height: 30px;
}
</style>
