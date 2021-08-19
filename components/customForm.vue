<template>
    <div>
        <b-container class="section">
            <b-row>
                <b-col cols="2">
                    지식ID : 
                </b-col>
                <b-col cols="2">
                    {{knowInfo.knowId}}
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="2">
                    최초작성자
                </b-col>
                <b-col cols="2">
                    {{knowInfo.fstRegrId}}
                </b-col>
                <b-col cols="2">
                    최초작성일시
                </b-col>
                <b-col cols="2">
                    {{knowInfo.fstRegDtmd}}
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="2">
                    최근수정자
                </b-col>
                <b-col cols="2">
                    {{knowInfo.lastChngrId}}
                </b-col>
                <b-col cols="2">
                    최근수정일시
                </b-col>
                <b-col cols="2">
                    {{knowInfo.lastChngDtmd}}
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="2">
                    모바일 사용여부
                </b-col>
                <b-col cols="2">
                    {{knowInfo.moblUseYn}}
                </b-col>
                <b-col cols="2">
                    메인노출여부
                </b-col>
                <b-col cols="2">
                    {{knowInfo.mainExpseYn}}
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="10">
                    제목 : {{knowInfo.knowTitleNm}}
                </b-col>
                <b-col cols="2">
                    조회수 : {{knowInfo.brwsCcnt}}
                </b-col>
            </b-row>
        </b-container>
        
        <b-container class="section">
            <div height="300px;" >
                <span v-html="knowInfo.knowCntnt"></span>
            </div>
                     
            <!-- {{knowInfo.knowCntnt}} -->
        </b-container>
        <!-- {{knowInfo}} -->
    </div>
</template>

<script>
    export default {
        props:['knowInfo'],
        computed:{
            textareaValue(){
                return this.knowInfo.knowCntnt;
            }
        }
    }
</script>

<style>
.section{
    border: 1px solid black;
    margin-top: 2em;
}
</style>