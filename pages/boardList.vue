<template>
    <b-container>
        <h2>컨텐츠 등록관리</h2>
        <br>
        <!-- 검색조건 및 검색어 -->
        <b-row>
            <b-col cols="2">
                <b-form-select v-model="searchCon" :options="searchConOpt" class="path-sel"></b-form-select>
            </b-col>
            <b-col cols="3">
                <b-form-input v-model="searchText" placeholder="검색어를 입력하세요"></b-form-input>
            </b-col>
            <b-col cols="1">
                <b-button variant="success" @click="btnSearch">검색</b-button>
            </b-col>
        </b-row>
        <!-- 상태조건과 게시글 표시갯수 -->
        <b-row>
            <b-col cols="6"></b-col>
            <b-col cols="4">
                <b-form-group v-slot="{ stateRadio }">
                    <b-form-radio-group id="btn-radios-2" v-model="state" :options="stateOpt" 
                                        :aria-describedby="stateRadio"
                                        name="radio-options">
                    </b-form-radio-group>
                </b-form-group>
            </b-col>
            <b-col cols="2">
                <b-form-select v-model="searchCnt" :options="searchCntOpt" class="path-sel"></b-form-select>
            </b-col>
        </b-row>
        <br>
        <knowListBoard :test="testText"/>
        <br>
        <knowDetail/>
    </b-container>    
</template>
<script>

export default {
    layout: 'defaultLayout',
    data(){
        return {
            // 조회조건 콤보박스
            searchCon: null,
            searchConOpt: [
               {value: null, text: '선택하세요'},
               {value: 1, text: '제목'},
               {value: 2, text: '작성자'},
            ],
            testText: '테스트', // prop 테스트

            // 검색어
            searchText: '',

            // 구분 조건
            state: null,
            stateOpt: [
                {value: null, text: '전체'},
                {value: 2, text: '수정요청'},
                {value: 4, text: '승인'},
                {value: 5, text: '반려'},
            ],

            searchCnt: 15,
            searchCntOpt: [
                {value: 15, text: '15개씩보기'},
                {value: 30, text: '30개씩보기'},
                {value: 45, text: '45개씩보기'},
            ]
        }
    },
    methods:{
        btnSearch:( )=> {
            console.log('검색버튼');

            let searchCon = this.$data.searchCon,       // 조회조건
                searchText = this.$data.searchText;     // 조회텍스트
        }
    },
    async asyncData({ params, query, store }){
        // 컴포넌트를 로드하기 전에 호출된다.

        // 페이지 컴포넌트에서만 사용가능하다.
        // 이전 페이지에서 asyncData안의 내용을 모두 끝낸 후에야 페이지 이동이 시작됨

        // 컨텍스트 객체를 첫번째 인수로 받으며, 
        // 이를 사용해 일부 데이터를 가져와 컴포넌트 데이터를 반환할 수 있다.

        // component들이 create 되기 전 단계이기 때문에 this를 사용할 수 없다.

        // return값은 컴포넌트의 data와 병합된다.
    },
}
</script>
<style>
</style>