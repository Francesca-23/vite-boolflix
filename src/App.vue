<script>

  import axios from 'axios';
  import { store } from './store';
  import MainComp from './components/MainComp.vue'

  export default{
    name: "App",
    components: {
      MainComp
    },

    data(){
      return{
        store
      }
    },

    methods: {

      movieApi(){
        axios.get(`https://api.themoviedb.org/3/search/multi?api_key=1d030cea23b1388bde4c590ce01bf4eb&language=IT&query=${store.film}`).then((res) => {
          this.store.movieArray = res.data
        })
      }

    }
  }

</script>

<template>

  <div>
    <MainComp @filmChange="movieApi()"/>
  </div>

</template>

<style>

</style>
