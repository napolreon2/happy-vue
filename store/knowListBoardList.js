import axios from 'axios';

export const state = function(){
    return {
        boardList: ''
    }
}

// getter
export const getters ={

}

// action
export const actions = {
    async searchBoardList( {commit}, {moreUrl} ){
        return new Promise((resolve, reject) => {
            let url = 'http://localhost:8080/api/v1/happy/knowList';            
            if(moreUrl) url = url+ moreUrl;

            axios.get(url).then( (res) => { commit('searchBoardList', [res.data]) } )
        })
    }
}

// mutation
export const mutations = {
    searchBoardList: (state, data) => {
        debugger;
        state.boardList = data[0];
    }
}
