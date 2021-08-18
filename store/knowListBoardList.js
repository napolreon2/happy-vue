import axios from 'axios';

export const state = function(){
    return {
        boardList: []
    }
}

// getter
export const getters ={

}

// action
export const actions = {
    async searchBoardList( {commit}, {moreUrl} ){
        const result = await new Promise((resolve, reject) => {
            let url = 'http://localhost:8080/api/v1/happy/knowList';            
            if(moreUrl) url = url+ moreUrl;

            axios.get(url).then( (res) => { commit('searchBoardList', [res.data]) } )
        })

        return result;
    }
}

// mutation
export const mutations = {
    searchBoardList: (state, data) => {
        state.boardList = data[0];
    }
}
