<script>

import { store } from '../store';

export default {
    name: 'SearchComp',
    emits: ['filmChange'],

    data() {
        return {
            store
        }
    },

    methods: {

    }
}

</script>

<template>
    <div class="d-flex justify-content-between p-2">
        <h1 class="text-danger">Boolflix</h1>
        <div class="input-group p-2 w-50">
            <input type="text" class="form-control" v-model="store.film" placeholder="Search Film or TV-Series">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2"
                @click="$emit('filmChange')">Search</button>
        </div>
    </div>
</template>

<style scoped></style>