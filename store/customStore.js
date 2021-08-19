import axios from 'axios';

// 1. state
export const state = function(){
    return {
        knowList: [],
        selKnow: {}
    }
}

// 2. actions
export const actions = {
    async searchKnowList({commit}, {url}){
        return new Promise((resolve, reject) => {
            // const url = 'http://localhost:8080/api/v1/happy/user' + '/' + userId;
            axios.get(url).then((res) => { commit('searchKnowList', res.data); })
        })
    },

    async searchSelKnow({commit},{url}){
        return new Promise((resolve, reject)=>{
            axios.get(url).then((res)=>{ commit('searchSelKnow', res.data); })
        })
    }

}

// 3. mutations
export const mutations ={
    searchKnowList(state, data){
        state.knowList = data;
    },
    searchSelKnow(state, data){
        state.selKnow = data;
    }
}