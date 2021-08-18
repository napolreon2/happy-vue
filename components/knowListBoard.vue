<template>
    <div>
    {{ test }}
    <ag-grid-vue style="height: 500px;"
        class="ag-theme-alpine"
        :columnDefs="columnDefs"
        :rowData="boardChanged"
        rowSelection="single"
        @cellClicked="onCellClicked"
        @grid-ready="onGridReady"
       
        pagination=true
        paginationPageSize=15>
    </ag-grid-vue>
    </div>
    
</template>
<script>
import { AgGridVue } from "ag-grid-vue";
import moment from 'moment'; // 시간관련 메소드 많이 가지고 있는듯!  
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';
import axios from 'axios';

// ag grid filter 기능 함수
// dateColumn에 filter를 걸수 있는데.. dateTime의 경우 시간이 끼어들어 있어서 시간까지는 비교를 못함..
const filterParams = {
  comparator: function (filterLocalDateAtMidnight, cellValue) {
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
    props:{
        test: ''
    },
    components: {
        AgGridVue
    },
    methods:{
        onGridReady(params) {
            this.gridApi = params.api;              // 페이지에 이 속성을 생성...
            this.columnApi = params.columnApi;
        },
        onCellClicked(data){
            let store = this.$store;

            if(data.colDef.field == 'knowTitleNm'){
                const userId = data.data.fstRegrId;
                store.dispatch('boardUser/searchBoardUser', {userId});            
            }
        },
        ...mapActions('knowListBoardList', ['searchBoardList']),
        ...mapActions('boardUser', ['searchBoardUser'])
    },
    computed:{
        ...mapState('knowListBoardList', ['boardList']), // vuex helper
        boardChanged(){
            return this.boardList; // knowListBoardList 스토어의 state
        }
    },
    fetch() {
        // fetch : 모든 컴포넌트에서 사용가능하다

        // this를 사용가능(component instance created 후에 들어오기때문!)

        //  로컬데이터 조작 용이함
        // created 와 beforeMount 사이에 작동

        // fetch()안에 parameter를 둘 경우 page단에서 작동하는 hook이 됨

        // 1. 컬럼정의
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
            // { headerName: '최종변경자ID', field: 'lastChngrId', sortable: true, filter: true },
            { 
                headerName: '최종변경일시', 
                field: 'lastChngDtmd', 
                sortable: true,  
                flex:2,
                filter: 'agDateColumnFilter',
                filterParams: filterParams, 
                cellRenderer: (data) => {
                    return moment(data.createdAt).format('YYYY/MM/DD HH:mm:ss')
                }
            }
        ];
       
        const store = this.$store;    
        
        // 2. 선택게시글에 대한 유저정보 초기화
        // reload 시 store에 담겨있는 데이터 그대로 나와서 select가 안되있음에도 데이터 표시됨
        store.commit('boardUser/searchBoardUser', [{}]);

        // 3. 그리드 스토어 액션 호출
        store.dispatch('knowListBoardList/searchBoardList', {});

        // ag grid api에서 제공한 사용방법
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