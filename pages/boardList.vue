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
        <knowListBoard/>
    </b-container>
</template>
<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';

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
            debugger;
        }
    }
}
</script>
<style>
</style>