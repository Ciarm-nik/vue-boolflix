new Vue({
    el: '#app',
    data: {
        media: [],
        query: '',
        solid: "fas",
        image: null,
        // ricerca: false,
        cast: []
    },
    methods: {
        utent_search(query) {
            // this.ricerca = true
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
                    // this.ricerca= false;
                })
            // this.query = '';
        },
        // getImgSrc (media) {
        //     if(media.poster_path) {
        //         return 'https://image.tmdb.org/t/p/w185' + media.poster_path
        //     }else {
        //         return "../img/not_found.jpg"
        //     }
        // }
        cast_search(id, media_type){

            axios.get('https://api.themoviedb.org/3/' + media_type + '/' + id + '/credits',{
                params: {
                    api_key: '513afbf57079cfde7b003498cfb4db65',
                }
            })
            .then((res) => {
                // return res.data.cast.slice(0, 5);
                // this.cast = res.data.cast.slice(0, 5);
                const media = this.media.find((elemento)=>{
                    return elemento.id === id
                })

                // console.log(media)
                // media.cast = res.data.cast.slice(0, 5);
                this.$set(media, "cast", res.data.cast.slice(0, 5))

                // this.cast.forEach ((item) => {
                //     console.log(item.name)
                // });
            })
        },
    },
    computed: {

    }
})