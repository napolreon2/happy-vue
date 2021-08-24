<template>
  <header>

    <b-container fluid>
      <b-row align="center">        
        <b-col><NuxtLogo/><h1>기본 레이아웃의 제목</h1></b-col>
      </b-row>
    </b-container>
     
    <br>
    <b-container fulid>
      <b-row>
        <!-- nuxt-link는 a태그의 일종 -->
        <b-col class="needBorder"><nuxt-link to="/">Home</nuxt-link></b-col>
        <b-col class="needBorder"><nuxt-link to="/jokes">아재개그</nuxt-link></b-col>
        <!-- <b-col class="needBorder"><nuxt-link to="/joinUser">회원추가</nuxt-link></b-col>
        <b-col class="needBorder"><nuxt-link to="/boardList">게시판 리스트</nuxt-link></b-col> -->
        <b-col class="needBorder"><nuxt-link to="/ksTest/inputKnowledge">지식입력</nuxt-link></b-col>
        <b-col class="needBorder"><nuxt-link to="/ksTest/knowledgeList">지식목록</nuxt-link></b-col>
        <b-col class="needBorder"><nuxt-link to="/ksTest/agGridPractice">그리드연습</nuxt-link></b-col>
      </b-row>
    </b-container>   

    <hr>

    <div>
        <nuxt/><!-- !!!레이아웃 제외 다른 page들어갈 자리!!! -->
    </div>
    
  </header> 
</template>

<script>
export default{
//   components: 'NuxtLogo'
}

</script>

<style>
.needBorder{
  border: 5px solid white;
  text-align: center;
  color: black;
  background: orange;
}
.needBorder a{
  color: black;
  font-size: 2em;
}
</style>
