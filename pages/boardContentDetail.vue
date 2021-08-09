<template>
    <b-container>
        <!-- 1. 제목부분 -->
        <b-container>
            <b-row>
                <b-col cols="10"><h2>컨텐츠 등록관리 상세</h2></b-col>
                <b-col cols="2" style="text-align:right;"><b-button variant="primary" size="sm" class="mt-3">목록</b-button></b-col>
            </b-row>
            <b-badge variant="secondary">수정</b-badge>
            <span>사용자의 해당 지식검색 내용에 대한 수정요청</span>
        </b-container>
        <!-- 2. 내용부분 -->
        <b-container fluid class="detail-back">
            <!-- 2-1.글 제목 및 경로, 게시기간, 첨부파일 -->
            <b-container class="detail-outer">
                <b-row>
                    <b-col cols="2" style="padding: 0">
                        <b-form-select v-model="selCate" :options="cateOpt"></b-form-select>
                    </b-col>
                    <b-col cols="10" style="padding-right: 0">
                        <b-form-input v-model="title" placeholder="Enter your name"></b-form-input>
                    </b-col>
                </b-row>
            </b-container>
            <b-container class="detail-inner">
                <b-row>
                    <b-col cols="2" class="item-nm">
                        경로
                    </b-col>
                    <b-col cols="10" class="item-content">
                        <b-form-select v-model="selCate" :options="cateOpt" class="path-sel"></b-form-select>
                        <b-form-select v-model="selCate" :options="cateOpt" class="path-sel"></b-form-select>
                        <b-form-select v-model="selCate" :options="cateOpt" class="path-sel"></b-form-select>
                        <b-form-select v-model="selCate" :options="cateOpt" class="path-sel"></b-form-select>                        
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="2" class="item-nm">
                        게시기간
                    </b-col>
                    <b-col cols="10" class="item-content">
                        <b-form-group v-slot="{ dutaionRadio }">
                            <b-form-radio-group id="btn-radios-2" v-model="selDuration" :options="dutaionOpt" 
                                                :aria-describedby="dutaionRadio"
                                                name="radio-options">
                            </b-form-radio-group>
                        </b-form-group>
                        
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="2" class="item-nm">
                        첨부파일
                    </b-col>
                    <b-col cols="10" class="item-content">
                        <!-- <b-form-file v-model="fileAttch" :state="Boolean(fileAttch)" placeholder="파일업로드 해주세요" drop-placeholder="파일업로드 해주세요"></b-form-file> -->
                    </b-col>
                </b-row>
            </b-container>
            <!-- 3. ditor 영역 -->
            <b-container class="detail-editor">
                <summer-note/>
            </b-container>
            <!-- 태그달기 --> 
            <b-container>
                <b-row>
                    <b-col cols="2" class="item-nm">
                        태그달기
                    </b-col>
                    <b-col cols="10" class="item-content">
                        <tag-input/>             
                    </b-col>
                </b-row>
            </b-container>
            <!-- 버튼 영역 -->
            <b-container class="btn-area">
                <b-button variant="danger" @click="btnCancel">취소</b-button>
                <b-button variant="primary" @click="btnMobile">모바일 미리보기</b-button>
                <b-button variant="success" @click="btnSubmit">등록</b-button>
            </b-container>
        </b-container> 

    </b-container>
</template>

<script>
import SummerNote from '~/components/summerNote.vue'
// import axios from 'axios';
// import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';

export default{
    // layout: 'defaultLayout',
    components: {SummerNote},
    data(){
        return {
            // 카테고리 옵션
            selCate: null,
            cateOpt: [
                {value: null, text: '카테고리'},
                {value: '1', text: '얍얍'},
                {value: '2', text: '욥욥'},
                {value: '3', text: '키키'},
                {value: '4', text: '헤헤'},
            ],

            // 제목 입력
            title: '',

            // 게시기간 개월수 selection
            selDuration: '1y',
            dutaionOpt: [
                {value: '1y', text: '1년'},
                {value: '6m', text: '6개월'},
                {value: '3m', text: '3개월'},
                {value: '1m', text: '1개월'}
            ],

            // 태그
            tags:[]
        }
    },
    methods:{
        btnSubmit: function(){
            console.log('등록버튼');
            // $('#summernote').summernote('editor.insertText', '등록버튼 누름');
        },
        btnCancel: function(){
            console.log('취소버튼');
        },
        btnMobile: function(){
            console.log('모바일버튼');
        }
    }
}

</script>
<style>
.detail-back{
    background-color: lightgray;
    margin-top: 1em;
    padding-bottom: 1em;
}
.detail-outer{
    padding: 1em;
}
.detail-inner{
    background-color: grey;
}
.item-nm{
    background-color:gray;
    font-size: 1.2em;
    padding: 0.3em;
    border-bottom: 0.3px black solid;
}
.item-content{
    background-color:white;
    padding: 0.3em;
    border-bottom: 0.3px black solid;
}
.path-sel{
    width: 20%;
    display: inline;
}
.detail-editor{
    background-color: grey;
    padding: 1em;
    border-bottom: 0.3px black solid;
}
.btn-area{
    margin-top: 2em;
    text-align: right;
}
</style>