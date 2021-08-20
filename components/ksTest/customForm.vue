<template>
    <div>
        <b-container class="section">
            <!-- <b-row>
                <b-col cols="2">
                    지식ID : 
                </b-col>
                <b-col cols="2">
                    {{knowInfo.knowId}}
                </b-col>
            </b-row> -->
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
                <b-col cols="2">
                    게시시작일
                </b-col>
                <b-col cols="2">
                    {{knowInfo.bltnStartDt}}
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
                <b-col cols="2">
                    게시종료일
                </b-col>
                <b-col cols="2">
                    {{knowInfo.bltnEndDt}}
                </b-col>
            </b-row>
            <br>
            <b-row> 
                <b-col cols="2">
                    메인노출여부
                </b-col>
                <b-col cols="2">
                    {{knowInfo.mainExpseYn}}
                </b-col>
                <b-col cols="2">
                    모바일 사용여부
                </b-col>
                <b-col cols="2">
                    {{knowInfo.moblUseYn}}
                </b-col>  
            </b-row>
            <b-row>
                <b-col cols="2">
                    제목
                </b-col>
                <b-col cols="6">
                    {{knowInfo.knowTitleNm}}
                </b-col>
                <b-col cols="2">
                    조회수
                </b-col>
                <b-col cols="2">
                    {{knowInfo.brwsCcnt}}
                </b-col>
            </b-row>
        </b-container>
        
        <b-container class="section">
            <div style="height: 430px; overflow: auto" >
                <span v-html="knowInfo.knowCntnt"></span>
            </div>
        </b-container>
    </div>
</template>

<script>
    export default {
        props:['knowInfo']
    }
</script>

<style>
.section{
    border: 1px solid black;
    margin-top: 2em;
}

</style>