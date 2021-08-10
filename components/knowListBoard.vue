<template>
    <ag-grid-vue style="height: 500px;"
        class="ag-theme-alpine"
        :columnDefs="columnDefs"
        :rowData="rowData"
        rowSelection="single"       
        @grid-ready="onGridReady"
        pagination=true
        paginationPageSize=15>
    </ag-grid-vue>
</template>
<script>
import { AgGridVue } from "ag-grid-vue";
import moment from 'moment'; // 시간관련 메소드 많이 가지고 있는듯!  
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';
import axios from 'axios';

// dateColumn에 filter를 걸수 있는데.. dateTime이 경우 시간이 끼어들어 있어서 시간까지는 비교를 못함..
const filterParams = {
  comparator: function (filterLocalDateAtMidnight, cellValue) {
      debugger;
    var dateAsString = cellValue;
    if (dateAsString == null) return -1;
    // var dateParts = dateAsString.split('/');
    var cellDate = new Date(dateAsString);

    if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
      return 0;
    }

    if (cellDate < filterLocalDateAtMidnight) {
      return -1;
    }

    if (cellDate > filterLocalDateAtMidnight) {
      return 1;
    }
  },
  browserDatePicker: true,
  minValidYear: 2000,
};

export default {
    name: 'board',
    data() {
        return {
            columnDefs: null,
            rowData: null
        }
    },
    components: {
        AgGridVue
    },
    methods:{
        onGridReady(params) {
            this.gridApi = params.api;              // 페이지에 이 속성을 생성...
            this.columnApi = params.columnApi;
        },
        ...mapActions('knowListBoardList', ['searchBoardList']),
        ...mapState('knowListBoardList', ['boardList'])
    },
    beforeMount() {
        // 이 속성을 일일이 다 넣어줘야 한다고..?;
        this.columnDefs = [
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
                flex: 5
            },
            { 
                headerName: '요청자',
                field: 'fstRegrId', 
                sortable: true, 
                filter: true,
                flex:2
            },
            // { headerName: '최종변경자ID', field: 'lastChngrId', sortable: true, filter: true },
            { 
                headerName: '최종변경일시', 
                field: 'lastChngDtmd', 
                sortable: true,  
                flex:2,
                filter: 'agDateColumnFilter',
                filterParams: filterParams, 
                cellRenderer: (data) => {
                    return moment(data.createdAt).format('YYYY/MM/DD/ HH:mm:ss')
                }
            }
        ],
        
        this.$store.dispatch('knowListBoardList/searchBoardList', {})
        .then(function(a,b,c){
            debugger;
        });

        // const getData = this.$store.state.knowListBoardList.boardList;

        // debugger;
        // debugger;
        // 처음에는 무조건 전체 데이터를 다 가져온다
        // fetch('http://localhost:8080/api/v1/happy/knowList')
        // .then(result => result.json())
        // .then(rowData => this.rowData = rowData);
        },
}
</script>
<style>
  @import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
  @import "../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";
</style>