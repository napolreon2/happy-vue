import axios from 'axios';
// state 상태관리. 스토어의 데이터 
export const state = function(){
    return {
        users: []
    }
}
// getter
export const getters = {
   
}
// action 비동기. 실질적 액션이 일어나는 부분
export const actions = {
    async getUsersById({ commit }, { id }){
        return new Promise(function(resolve, reject){
            axios.get("http://localhost:8080/api/v1/happy/user/" + id)  // 화면단에서 parameter를 넘겨주는 방법
                 .then(function(res){
                    // debugger;
                    commit('addUsers', [res.data]);
                 })
        })
    }
}
// mutation 동기, update states
export const mutations = {
    addUsers: function(state, user){
        if(user[0]) state.users= user;
        else state.users = [];
    },
    removeUsers: function(state, user){

    }
}