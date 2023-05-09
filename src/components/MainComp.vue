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
         }
    }
  }

</script>

<template>

<div>
    <div>
        <input type="text" v-model="store.film" @keyup="$emit('filmChange')" placeholder="Search Film">
    </div>

    <div >
        <div class="film-card" v-for="(element, index) in store.movieArray.results" :key="index">
            <p><strong>Titolo:</strong> {{ element.title }} </p>
            <p><strong>Titolo originale:</strong> {{ element.original_title }} </p>
            <p><strong>Lingua:</strong></p>
            <p><strong>Voto:</strong> {{ element.vote_average }} </p>
        </div>
    </div>
</div>

</template>

<style scoped>

    .film-card{
        padding: 1rem;
    }

</style>
