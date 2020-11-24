/**
 * SPOTIFY WITH API
 */

 const spotify = new Vue({
    el: '#spotify',

    data: {
        cds: [],
        options: [ 'All', ],
        selected: 'All',
    },

    created(){

        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then( valid => {
            // handle success
            this.cds = valid.data.response

            this.cds.forEach( el  => {
                if ( ! this.options.includes( el.genre ) ) {
                    this.options.push(el.genre)
                }
            });
        })
        .catch( invalid => {
            // handle error
            console.log(invalid);
        });

    },

    methods: {

        genreSelected(){
            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then( valid => {
            // handle success
            this.cds = valid.data.response

            if ( this.selected !== 'all' ) {
                this.cds = this.cds.filter( el => el.genre === this.selected);
            };

        })
        .catch( invalid => {
            // handle error
            console.log(invalid);
        });
        },

    },
 });