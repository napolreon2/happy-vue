<template>
    <div>
        <b-container>
            <ksTestCustom-form :knowInfo="getSelKnow"/>
        </b-container>
        <br>
        <b-container align="right">
            <b-button @click="onBtnBack">뒤로</b-button>
            <b-button @click="onBtnDelete" v-if="this.selKnow.fstRegrId == 'SYSTEM'" variant="danger">삭제</b-button>
            <b-button @click="onBtnModify" v-if="this.selKnow.fstRegrId == 'SYSTEM'" variant="primary">수정</b-button>
        </b-container>
    </div>    
</template>

<script>
    import {mapState, mapMutations} from 'vuex';
    export default {
        layout: 'defaultLayout',
        mounted(){
            
        },
        computed:{
            ...mapState('ksTest/outputKnowStore', ['selKnow']),
            getSelKnow(){
                return this.selKnow;
            }
        },
        methods:{
            ...mapMutations('ksTest/inputKnowStore', ['setKnowInfo']),
            onBtnBack(){
                this.$router.go(-1);
            },

            onBtnDelete(){
                
            },

            onBtnModify(){
                // outputKnowStore에서 얻어온 것중 사용할거만 뽑아서 전달해주면..                
                const param = {
                    knowId: this.selKnow.knowId,
                    knowTitleNm: this.selKnow.knowTitleNm,
                    bltnStartDt: this.selKnow.bltnStartDt,
                    bltnEndDt: this.selKnow.bltnEndDt,
                    mainExpseYn: this.selKnow.mainExpseYn,
                    moblUseYn: this.selKnow.moblUseYn,
                    knowStsCd: this.selKnow.knowStsCd,
                    knowCntnt: this.selKnow.knowCntnt
                }

                this.$store.commit('ksTest/inputKnowStore/setKnowInfo', param);

                this.$router.push('inputKnowledge');
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>