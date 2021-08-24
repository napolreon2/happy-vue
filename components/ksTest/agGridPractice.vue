<template>
    <div>
        <!--
            defaultColDef           : 모든 컬럼에 공통적으로 적용할 속성
            columnDefs              : 컬럼 정의
            rowData                 : 컬럼에 들어갈 데이터(보통 동적으로 적용하므로 computed를 이용)
            rowSelection            : single(하나의 row만 선택), multiple(체크박스 사용할 경우 여러 row 선택) -> 하위 속성 rowSelection 검색
            
            ** drag 기능은 pagination, sort 기능이 있으면 적용되지 않음

        -->
        <img src="../../assets/sun.png"/>
        <ag-grid-vue style="height: 500px;"
        class="ag-theme-alpine"
        :defaultColDef="defaultColDef"
        :columnDefs="columnDefs"
        :rowData="getRowData"
        rowSelection="multiple"
        animateRows="true"
        @grid-ready="onGridReady"
        @row-selected="onRowSelected"
        pagination=true
        paginationPageSize=10>
        </ag-grid-vue>
        <br>
        <b-container>
            <b-button @click="debug">디버깅</b-button>
            <b-button @click="onBtnExcel">엑셀 다운로드</b-button>
        </b-container>
    </div>
</template>

<script>
    import { AgGridVue } from 'ag-grid-vue';
    import {mapState} from 'vuex';

    const waitColor = '#e2ffeb',
          requestColor = '#82ffaa',
          approveColor = '#0096c6',
          returnColor = '#660099',
          modifyColor = '#f29886';
          
    export default {
        components:{
            AgGridVue
        },
        data(){
            return {
                defaultColDef: {
                    resizable: true,
                },               
                columnDefs: null,
                rowData: null
            }
        },
        fetch(){
            const me = this;

            this.columnDefs = [
                    { 
                        headerName: 'NO',
                        field: 'knowId',
                        sortable: true,
                        filter: true,
                        flex:1,
                        checkboxSelection: true
                    },
                    { 
                        headerName: '구분',
                        field: 'knowStsCd',
                        sortable: true, 
                        filter: true,
                        flex: 1,           
                        // floatingFilter: true,             
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
                        },
                        cellStyle:(param) => {
                            let color = null;
                            
                            switch(param.data.knowStsCd){
                                case "1": color = waitColor; break;
                                case "2": color = requestColor; break;
                                case "3": color = approveColor; break;
                                case "4": color = returnColor; break;
                                case "5": color = modifyColor; break;
                            }
                            
                            return {backgroundColor: color}
                        }
                    },
                    { 
                        headerName: '제목',
                        field: 'knowTitleNm', 
                        sortable: true, 
                        filter: true,
                        flex: 5,
                        editable: true, // enter, double click, f2, backspace, delete로 활성
                        // singleClickEdit : true, // default는 더블클릭 edit
                        cellStyle: (param) =>{
                            return { cursor: 'pointer' }
                        },
                        onCellValueChanged:(aa,bb,cc,dd,ee) =>{
                            /*
                                editor를 이용해 데이터 수정하면
                                연결되어 있는 store의 state에 바로 접근한다고 에러!

                                직접 연결안하고 data 단에 중간단계를 놔야 할것 같은데...
                            */
                            debugger;
                        },
                        cellRenderer: (params)=>{
                            // 이렇게하면 찾질 못하네..
                            return '<span><img src="../../assets/sun.png"></img>' + params.value + '</span>'
                        }
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
                ];

            this.$store.dispatch('ksTest/agGridTestStore/searchKnowList');
        },
        methods:{
            onGridReady(params) {
                this.gridApi = params.api;              // 페이지에 이 속성을 생성...
                this.columnApi = params.columnApi;

                this.gridApi.onCellEditingStopped = (aa,bb,cc,dd,ee)=>{
                    debugger;
                }

                // onCellEditingStarted:()=>{
                //     debugger;
                // },
                // onCellEditingStopped:(aa,bb,cc,dd,ee)=>{
                //     debugger;
                // },
            },
            
            onRowSelected(event){
                this.$store.commit('ksTest/agGridTestStore/searchSelKnow', event.data);
            },

            debug(){
                debugger;
            },

            onBtnExcel(){
                /*
                    enterprise 버전에서 제공하는 엑셀 export 기능
                    추가적인 작업이 없다면 cellRenderer나 formatter 값 대신 rawValue가 엑셀에 찍힘
                    valueGetter를 이용하면 원하는 형태로 엑셀에 표시가 가능할듯?
                    -> enterprise 버전 사용하게 되면 테스트 필요
                */
                this.gridApi.exportDataAsExcel();
            }
        },
        computed:{
            ...mapState('ksTest/agGridTestStore', ['knowList', 'selKnow']),
            getRowData(){
                return this.knowList;
            }
        }
    }
</script>

<style>
    @import "../../node_modules/ag-grid-community/dist/styles/ag-grid.css";
    @import "../../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";

    .knowStsCd-wait{
        backgroud-color: rgb(100,170,140)
    }
</style>