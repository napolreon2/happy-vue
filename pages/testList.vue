<template>
    <b-container>
        <b-container fluid>
            <custom-grid :colDefs="colDefs" storeNm="customStore" :searchUrl="searchURL"/>
        </b-container>
        <b-container>
            <custom-form :knowInfo="getSelKnow"/>
        </b-container>
    </b-container>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        layout: 'defaultLayout',
        data(){
            return {
                searchURL: 'http://localhost:8094/api/v1/ctc/ks',
                colDefs: [
                    { 
                        headerName: 'NO',
                        field: 'knowId',
                        sortable: true,
                        filter: true,
                        flex:1
                    },
                    { 
                        headerName: '구분',
                        field: 'knowStsCd',
                        sortable: true, 
                        filter: true,
                        flex:1
                    },
                    { 
                        headerName: '제목',
                        field: 'knowTitleNm', 
                        sortable: true, 
                        filter: true,
                        flex: 5,
                        cellStyle: (param) =>{
                            return { cursor: 'pointer' }
                        },
                    },
                    { 
                        headerName: '요청자',
                        field: 'fstRegrId', 
                        sortable: true, 
                        filter: true,
                        flex:2
                    },            
                    { 
                        headerName: '최종변경일시', 
                        field: 'lastChngDtmd', 
                        sortable: true,  
                        flex:2 
                    }
                ]
            }
        },
        computed:{
            ...mapState('customStore', ['selKnow']),
            getSelKnow(){
                return this.selKnow;
            }
        }
    }
</script>

<style>

</style>