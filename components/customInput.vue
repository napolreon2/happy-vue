<template>
    <div :width="width">
        <input  :type="type" 
                :value="value" 
                :width="width"
                @input="$emit('getvalue:value', $event.target.value)"
                @change="onChange4Field">

                <!-- 이벤트 리스너는 항상 소문자로 변환되기 때문에 헷갈리지 않게 소문자만 쓰기! -->
    </div>
</template>

<script>
    export default {
        props:['type', 'value', 'width', 'customProp',
         'store', 'varNm'
         ],
        
        mounted(){
            
        },
        methods:{
            onChange4Field(event){
                let val = (this.type != 'checkbox') ? event.target.value : 
                                event.target.checked ? 'Y' : 'N'; 

                let obj = {
                    idx: this.varNm,
                    val: val
                };

                this.$store.commit(this.store, obj);
                /*
                    0 : state의 항목명(string)
                    1 : 스토어에 저장할 value값
                */
            }
        }
    }
    
</script>

<style>

</style>