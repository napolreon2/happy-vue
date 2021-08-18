import axios from 'axios';

// 1. state
export const state = function(){
    return {
        boardUser: {}
    }
}

// 2. actions
export const actions = {
    async searchBoardUser({commit}, {userId}){
        return new Promise((resolve, reject) => {
            const url = 'http://localhost:8080/api/v1/happy/user' + '/' + userId;
            axios.get(url).then((res) => { commit('searchBoardUser', [res.data]); })
        })

        }
}

// 3. mutations
export const mutations ={
    searchBoardUser(state, data){
        state.boardUser = data[0];
    }
}