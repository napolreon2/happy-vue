<template>
    <b-container>
        <b-row>
            <label>제목</label>
            <custom-input :store="storeTarget" varNm="knowTitleNm" :customChangeEvent="customChangeEvent" class="customInput" type="text"/>
        </b-row>
        <br>
        <br>
        <b-row>
            <b-col cols="6">
                <label>시작일</label><custom-input :store="storeTarget" varNm="bltnStartDt" class="customInput" type="date"/>
                <br>
                <label>종료일</label><custom-input :store="storeTarget" varNm="bltnEndDt" class="customInput" type="date"/>   
            </b-col>
             <b-col cols="6">
                <label>메인노출</label><custom-input :store="storeTarget" varNm="mainExpseYn" class="customInput" type="checkbox"/>
                <br>
                <label>모바일</label><custom-input :store="storeTarget" varNm="moblUseYn" class="customInput" type="checkbox"/>
                <br>
                <label>지식상태코드</label><custom-input :store="storeTarget" varNm="knowStsCd" class="customInput" type="text"/>
            </b-col>
            <span>입력내용 스토어 저장 실시간으로 보기</span>
            <div>{{ know }}</div>
        </b-row>
        <br>
        <b-container>
            <!-- <textarea cols="30" rows="10" v-model="mainContent" @change="onChange4Area"></textarea> -->
            <summer-note :store="storeTarget" varNm="knowCntnt" />
        </b-container>        
    </b-container>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        data(){
            return {
                storeTarget: 'componentTest/setFieldState',
                customChangeEvent: function(){
                    alert('체인지 이벤트에 내가 넣고 싶은 내용을 넣어보자');
                }
            }
        },
        // fetch(){            
        //     this.$store.commit('componentTest/initStore');
        // },
        methods:{
           
        },
        computed:{
            ...mapState('componentTest', ['know'])
        },
        methods:{
            // onChange4Area(){
            //     let obj = {
            //         idx: 'knowCntnt',
            //         val: this.mainContent
            //     }
            //     this.$store.commit(this.storeTarget, obj);
            // }
        }
    }
</script>

<style>
label{
    margin-right: 2em;
    display: inline-block;
}
.customInput{
    display: inline-block;
}
</style>