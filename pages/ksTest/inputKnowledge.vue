<template>
    <b-container>
        <ksTestInput-board-part/>
        <b-container>
            <button @click="onBtnSave">저장</button>
            <button @click="onBtnCancel">취소</button>
        </b-container>
    </b-container>
    
</template>

<script>
    import {mapState} from 'vuex';
    import axios from 'axios';

    export default {
        layout: 'defaultLayout',
        data(){
            return {
                
            }
        },
        methods:{
            onBtnSave(){
                const reqParam = {
                    knowTitleNm: this.know.knowTitleNm,     // 제목 
                    bltnStartDt: this.know.bltnStartDt,
                    bltnEndDt: this.know.bltnEndDt,
                    mainExpseYn: this.know.mainExpseYn,
                    moblUseYn: this.know.moblUseYn,
                    knowStsCd: this.know.knowStsCd,
                    knowCntnt: this.know.knowCntnt,
                    usrId: 'SYSTEM' //일단 임의로.. 
                }
                
                axios.post('http://localhost:8094/api/v1/ctc/ks', reqParam)
                     .then((res) => {
                        alert('글이 추가되었습니다');

                        this.$store.commit('ksTest/inputKnowStore/initStore'); // 저장후엔 store 비워주기
                        
                        this.$router.push('ksTest/testList');
                     })
            },
            onBtnCancel(){
                this.$store.commit('ksTest/inputKnowStore/initStore');
            }
        },
        computed:{
            ...mapState('ksTest/inputKnowStore', ['know'])
        }
    }
</script>

<style>

</style>