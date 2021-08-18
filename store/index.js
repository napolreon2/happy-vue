import axios from 'axios';

/*
    store는 말그대로 저장소. page, component들은 스토어와 연결가능!
    store의 데이터가 바뀌면 그 데이터가 표시되어야 할 view도 바뀌게된다

    1. state 
    스토어 데이터를 저장하는 역할
    유일하게 function type으로 json을 return

    2. getters
    state의 데이터를 가공하여 다른 component에게 제공할 수 있음
    (필요할 경우 setter도 만들어서 사용하기도 한다고 합니다)

    3. actions(async)
    비동기 작업을 수행하는 파트
    actions 파트의 function을 호출하기 위해선 dispatch() 를 사용

    dispatch(주소, Obj);
    -> this.$store.dispatch('knowListBoardList/searchBoardList', {id: '2'});


    4. mutations(sync)
    동기 작업 수행.
    단순히 state의 상태만 변경.
    mutations의 function을 호출하기 위해선 commit()을 사용

    commit(주소, [Obj])
    -> commit('searchBoardUser', [res.data]);

    
    

    action에서 비동기 작업들을 실행후 mutation에 결과를 전달해주면
    mutation이 받은 결과를 바탕으로 state에 데이터를 넣어주거나 변화시킴
*/




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