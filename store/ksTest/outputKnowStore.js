import axios from 'axios';

// 이 store에서 사용되는 url
const url = 'http://localhost:8094/api/v1/ctc/ks';

// 1. state
export const state = function(){
    return {
        knowList: [],
        selKnow: {
            knowId: '',
            lastChngrId: '',
            lastChngDtmd: '',
            fstRegrId: '',
            fstRegDtmd: '',
            knowTitleNm: '',
            mainExpseYn: '',
            moblUseYn: '',
            bltnStartDt: '',
            bltnEndDt: '',
            knowStsCd: '',
            knowStsChngDtmd: '',
            knowRegUserid: '',
            brwsCcnt: '',
            knowTagCntnt: '',
            knowCntnt: '',
        }
    }
}

// 2. actions
export const actions = {
    /**
     * 지식목록 테이블의 전체 데이터 조회
     * @param {commit} mutation으로 커밋할때 사용되는 function
     * @returns 
     */
    async searchKnowList({commit}){
        return new Promise((resolve, reject) => {
            axios.get(url).then((res) => { 
                commit('searchKnowList', res.data); 
            })
        })
    },

    /**
     * 지식목록 테이블에서 지식ID로 데이터 단건 조회
     * @param {commit} mutation으로 커밋할때 사용되는 function
     * @param {knowId} 지식ID 
     * @returns 
     */
    async searchSelKnow({commit},{knowId}){
        return new Promise((resolve, reject)=>{
            axios.get(url + '/' + knowId).then((res)=>{ 
                commit('searchSelKnow', res.data);
            })
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