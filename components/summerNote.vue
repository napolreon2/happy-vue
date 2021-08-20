<template>    
    <b-container class="editer-con">
        <div id="summernote" v-html="this.value"></div>
    </b-container>
</template>
<script>

export default{
    props:['store', 'varNm', 'value'],
    mounted(){
        const store = this.$store,
              storeTarget = this.store,
              varNm = this.varNm;


        $('#summernote').summernote({
            lang: 'ko-KR',
            placeholder: 'Hello stand alone ui',
            tabsize: 2,
            height: 180,
            spellCheck: true, // ????? 스펠체크라고?
            toolbar: [
                ['style', ['style']],
                ['font', ['bold', 'underline', 'clear']],
                ['color', ['color']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['table', ['table']],
                ['insert', ['link', 'picture', 'video']],
                ['view', ['fullscreen', 'codeview', 'help']]
            ],
            callbacks:{
                onChange: (contents, editable) => {
                    let obj = {
                        idx: varNm,
                        val : contents
                    }
                    // debugger;
                    store.commit(storeTarget, obj);
                }
            }
        });

        // debugger;
        // @param {String} color
        // $('#summernote').summernote('backColor', 'red');

        // // // @param {String} color
        // $('#summernote').summernote('foreColor', 'blue');

        // $('#summernote').summernote('bold');
    }
}
</script>
<style>
.editer-con{
    background-color: white;
    padding: 0;
}
</style>



