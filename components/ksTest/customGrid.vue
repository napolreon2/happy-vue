<template>
    <div>
        <ag-grid-vue style="height: 500px;"
        class="ag-theme-alpine"
        :columnDefs="colDefs"
        :rowData="getRowData"
        rowSelection="single"
        @cellClicked="onCellClicked"
        @grid-ready="onGridReady"
       
        pagination=true
        paginationPageSize=10>
    </ag-grid-vue>
    </div>
</template>

<script>
    import { AgGridVue } from 'ag-grid-vue';
    import {mapState} from 'vuex';
    
    export default {
        components:{
            AgGridVue
        },
        data(){
            return {
                columnDefs: null,
                rowData: null
            }
        },
        fetch(){
            this.colDefs = [
                    { 
                        headerName: 'NO',
                        field: 'knowId',
                        sortable: true,
                        filter: true,
                        flex:1,
                        resizable: true
                    },
                    { 
                        headerName: '구분',
                        field: 'knowStsCd',
                        sortable: true, 
                        filter: true,
                        flex:1,
                        valueFormatter: function(data){
                            let returnText= '';

                            switch(data.value){
                                case '1': returnText='대기'; break;
                                case '2': returnText='요청'; break;
                                case '3': returnText='승인'; break;
                                case '4': returnText='반려'; break;
                                case '5': returnText='수정'; break;
                            }
                            return returnText;
                        }
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
                    },
                    { 
                        headerName: '조회수', 
                        field: 'brwsCcnt', 
                        sortable: true,  
                        flex: 1
                    },
                ]
            
            this.$store.dispatch('ksTest/outputKnowStore/searchKnowList'); // 그리드조회
        },
        methods:{
            onGridReady(params) {
                this.gridApi = params.api;              // 페이지에 이 속성을 생성...
                this.columnApi = params.columnApi;
            },
            onCellClicked(event){
                let store = this.$store;

                if(event.colDef.field == 'knowTitleNm'){
                    const knowId = event.data.knowId;
                          
                    store.dispatch('ksTest/outputKnowStore/searchSelKnow', {knowId});

                    this.$router.push('/ksTest/knowledgeDetail');
                }
            },
        },
        computed:{
            ...mapState('ksTest/outputKnowStore', ['knowList']),
            getRowData(){
                return this.knowList;
            }
        }
    }
</script>

<style>
    @import "../../node_modules/ag-grid-community/dist/styles/ag-grid.css";
    @import "../../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";
</style>
