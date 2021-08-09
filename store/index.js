import axios from 'axios';
// state
export const state = function(){
    counter: 0
}
// getter
export const getters = {

}
// action 비동기
export const actions = {
    
}
// mutation 동기, update states
export const mutations = {
    increment(state){
        state.counter++;
    }
}