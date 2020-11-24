/**
 * SPOTIFY WITH API
 */

 const spotify = new Vue({
    el: '#spotify',

    data: {
        cds: [],
    },

    created(){

        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then( valid => {
            // handle success
            this.cds = valid.data.response
            console.log(this.cds);
        })
        .catch( invalid => {
            // handle error
            console.log(invalid);
        })

    },

    methods: {

    },
 });