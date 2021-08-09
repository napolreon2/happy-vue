<template>
    
    <b-container class="editer-con">
        <div id="summernote">내용을 입력해주세요</div>
    </b-container>

</template>
<script>

export default{
    mounted(){
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
            ]
        });

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



