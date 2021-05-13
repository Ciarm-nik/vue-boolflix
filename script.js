new Vue({
    el: '#app',
    data: {
        films: [],
        query: ''

    },

    methods: {
        utent_search(query) {

            axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    api_key: '513afbf57079cfde7b003498cfb4db65',
                    query: query,
                    language: "it-IT"
                }
            })
                .then((res) => {
                    this.films = res.data.results;
                })
            this.query = '';
        }
    }
})