// 1. state
export const state = function(){
    return {
        know: {
            knowTitleNm:'',     // 제목 
            bltnStartDt:'',
            bltnEndDt:'',
            mainExpseYn:'',
            moblUseYn:'',
            knowStsCd:'',
            knowCntnt: ''
        }
    }
}

// 2. actions
export const actions = {
    // async searchBoardUser({commit}, {userId}){
    //     return new Promise((resolve, reject) => {
    //         const url = 'http://localhost:8080/api/v1/happy/user' + '/' + userId;
    //         axios.get(url).then((res) => { commit('searchBoardUser', [res.data]); })
    //     })

    //     }
}

// 3. mutations
export const mutations ={
    setFieldState(state, data){
        let obj = Object.getOwnPropertyDescriptor(state.know, data.idx);
        
        if(obj) obj.set(data.val);

    },
    setTextAreaState(state, data){
        state.know.knowCntnt = data;
    }
}