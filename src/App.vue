<script>

import axios from 'axios';
import { store } from './store';
import SearchComp from './components/SearchComp.vue';
import CardsDefault from './components/CardsDefault.vue';
import CardsComp from './components/CardsComp.vue';

export default {
  name: "App",
  components: {
    SearchComp,
    CardsDefault,
    CardsComp,
  },

  data() {
    return {
      store
    }
  },

  methods: {

    movieApi() {
      axios.get(`https://api.themoviedb.org/3/search/multi?api_key=1d030cea23b1388bde4c590ce01bf4eb&language=IT&query=${store.film}`).then((res) => {
        console.log(res.data.results)
        return this.store.movieArray = res.data
      })
    },

  }
}

</script>

<template>
  <div id="container">
    <SearchComp @filmChange="movieApi()" />
    <CardsDefault :class="store.film != '' ? 'd-none' : 'd-block'" />
    <CardsComp />
  </div>
</template>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.css';

#container {
  background-color: rgb(20, 20, 20);
  color: rgba(255, 255, 255, 0.8);
}
</style>
