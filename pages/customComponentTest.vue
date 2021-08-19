<template>
    <b-container>
        <title-part/>
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
                    mainExpseYn: this.know.mainExpseYn ? 'Y' : 'N',
                    moblUseYn: this.know.moblUseYn ? 'Y' : 'N',
                    knowStsCd: this.know.knowStsCd,
                    knowCntnt: this.know.knowCntnt,
                    usrId: 'SYSTEM' //일단 임의로.. 
                }
                
                axios.post('http://localhost:8094/api/v1/ctc/ks', reqParam)
                     .then((res) => {
                        alert('글이 추가되었습니다');

                        this.$store.commit('componentTest/initStore'); // 저장후엔 store 비워주기
                        
                        this.$router.push('/testList');
                     })
            },
            onBtnCancel(){
                this.$store.commit('componentTest/initStore');
            }
        },
        computed:{
            ...mapState('componentTest', ['know'])
        }
    }
</script>

<style>

</style>