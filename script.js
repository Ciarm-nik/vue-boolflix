new Vue({
    el: '#app',
    data: {
        media: [],
        query: '',
        solid: "fas",
    },
    methods: {
        utent_search(query) {
            // Cambio l'url in search/multi per cercare anche le serie tv oltre ai film (modifico il ciclo for nell'html)
            axios.get('https://api.themoviedb.org/3/search/multi', {
                params: {
                    api_key: '513afbf57079cfde7b003498cfb4db65',
                    query: query,
                    language: "it-IT"
                }
            })
                .then((res) => {
                    this.media = res.data.results;
                })
            this.query = '';
        }
    },
    computed: {

    }
})