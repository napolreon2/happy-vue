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
         'store', 'varNm', 'customChangeEvent'
         ],
        
        mounted(){
            
        },
        methods:{
            onChange4Field(event){
                let val = event.target.value;

                if(this.type == 'checkbox') val = event.target.checked;
                if(this.type == 'date')     val = event.target.value.replaceAll('-', '')
                
                let obj = {
                    idx: this.varNm,
                    val: val
                };

                this.$store.commit(this.store, obj);

                /*  
                    추가적으로 내가 넣고 싶은 change이벤트 처리 내용이 있을때
                    이렇게 넘겨주게 하면 어떨까?
                */
                if(this.customChangeEvent) this.customChangeEvent();
            }
        }
    }
    
</script>

<style>

</style>