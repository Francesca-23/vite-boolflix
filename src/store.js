import { reactive } from "vue";

export const store = reactive(
    {
        movieArray: [],
        film: '',
        api_key: '1d030cea23b1388bde4c590ce01bf4eb',

        staticMovieObject: {},
        staticMovieArray: [],

    }
)