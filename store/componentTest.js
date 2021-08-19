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
    
}

// 3. mutations
export const mutations ={
    
    // input 태그를 override한 custom-input에서 change 이벤트 발생시 실시간으로 데이터를 store에 쌓기
    setFieldState(state, data){
        let obj = Object.getOwnPropertyDescriptor(state.know, data.idx);

        if(obj) obj.set(data.val);

    },

    // textarea로 테스트
    setTextAreaState(state, data){
        state.know.knowCntnt = data;
    },

    // 초기화
    initStore(state){
        state.know = {
            knowTitleNm:'',
            bltnStartDt:'',
            bltnEndDt:'',
            mainExpseYn:'',
            moblUseYn:'',
            knowStsCd:'',
            knowCntnt: ''
        };
    }
}