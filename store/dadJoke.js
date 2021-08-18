import axios from 'axios';

//state
export const state = function(){
    return {
        jokes: []
    }
} 

//getters
export const getters = {

}

//actions
export const actions = {
    async getJokes({commit}){
        let config = {
            headers:{ 'Accept' : 'application/json' }
        }

        return new Promise((resolve, reject) => {
            axios.get('https://icanhazdadjoke.com/search', config).then((res) => {
                commit('add', res.data.results);
            })
        })
    }
    
}

//mutations
export const mutations = {
    add: function(state, jokes){
        state.jokes = jokes;
    },
    remove: function(){

    }
}