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
        paginationPageSize=7>
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
        props: ['colDefs', 'storeNm', 'searchUrl'],
        data(){
            return {
                columnDefs: null,
                rowData: null
            }
        },
        fetch(){
            const url = this.searchUrl;
            this.$store.dispatch('customStore/searchKnowList', {url});
        },
        methods:{
            onGridReady(params) {
                this.gridApi = params.api;              // 페이지에 이 속성을 생성...
                this.columnApi = params.columnApi;
            },
            onCellClicked(event){
                let store = this.$store;

                if(event.colDef.field == 'knowTitleNm'){
                    const knowId = event.data.knowId,
                          url = this.searchUrl + '/' + knowId;
                          
                    store.dispatch('customStore/searchSelKnow', {url});            
                }
            },
        },
        computed:{
            ...mapState('customStore', ['knowList']),
            getRowData(){
                return this.knowList;
            }
        }
    }
</script>

<style>
    @import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
    @import "../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";
</style>
