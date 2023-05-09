<script>

    import { store } from '../store';
    import axios from 'axios';

  export default{
    name: "MainComp",
    emits: ['filmChange'],

    data(){
        return{
            store
        }
    },

    methods: {

         flagApi(nation){
            let path = `https://www.countryflagicons.com/FLAT/64/${nation}.png`
            return path        
         },

         imageApi(image){
            let path = `http://image.tmdb.org/t/p/w342${image}`
            return path        
         },

         maxVote(vote){
            if(vote <= 5){
                return vote = vote
            }else{
                return vote = 5
            }
         }
    }
  }

</script>

<template>

<div>
    <div>
        <input type="text" v-model="store.film" @keyup="$emit('filmChange')" placeholder="Search Film">
    </div>

    <div>
        <div v-for="(element, index) in store.movieArray.results" :key="index">
            <div class="film-card" v-if="element.media_type == 'movie'">
                <img :src="imageApi(element.poster_path)" alt="">
                <p><strong>Titolo:</strong> {{ element.title }} </p>
                <p><strong>Titolo originale:</strong> {{ element.original_title }} </p>
                <!-- <img v-if="element.original_language != 'en'" :src="flagApi(element.original_language.toUpperCase())" alt="">
                <img class="english-flag" v-if="element.original_language == 'en'" src="https://img.freepik.com/free-vector/illustration-uk-flag_53876-18166.jpg?w=900&t=st=1683659908~exp=1683660508~hmac=7fd0babe4c0e6c44ef54a2d4c4f92d744dd5d18a49ef85ebd61beb98ffa7b7ee" alt=""> -->
                <p><strong>Lingua:</strong> {{ element.original_language }}</p>
                <p ><strong>Voto:</strong> {{ maxVote(element.vote_average) }} </p>
            </div>
        </div>

        <div v-for="(element, index) in store.movieArray.results" :key="index">
            <div class="film-card" v-if="element.media_type == 'tv'">
                <img :src="imageApi(element.poster_path)" alt="">
                <p><strong>Titolo:</strong> {{ element.name }} </p>
                <p><strong>Titolo originale:</strong> {{ element.original_name }} </p>
                <!-- <img v-if="element.original_language != 'en'" :src="flagApi(element.original_language.toUpperCase())" alt="">
                <img class="english-flag" v-if="element.original_language == 'en'" src="https://img.freepik.com/free-vector/illustration-uk-flag_53876-18166.jpg?w=900&t=st=1683659908~exp=1683660508~hmac=7fd0babe4c0e6c44ef54a2d4c4f92d744dd5d18a49ef85ebd61beb98ffa7b7ee" alt=""> -->
                <p><strong>Lingua:</strong> {{ element.original_language }}</p>
                <p><strong>Voto:</strong> {{ maxVote(element.vote_average) }} </p>
            </div>
        </div>
    </div>
</div>

</template>

<style scoped>

    .film-card{
        padding: 1rem;
    }

    .english-flag{
        height: 30px;
    }

</style>
