// 1. state
export const state = function(){
    return {
        know: {
            knowId: '',         // 지식ID
            knowTitleNm:'',     // 제목 
            bltnStartDt:'',     // 게시 시작일자
            bltnEndDt:'',       // 게시 종료일자
            mainExpseYn:'',     // 메인화면 노출여부
            moblUseYn:'',       // 모바일 사용여부
            knowStsCd:'',       // 지삭상태코드
            knowCntnt: ''       // 지식내용
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
    },

    setKnowInfo(state, data){
        state.know = data;
    }
}