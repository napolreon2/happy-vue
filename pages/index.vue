<template>
  <!-- <h1>첫번째 화면</h1> -->

  <b-container>
    
    <h1>회원 검색기능</h1>
    
    <p class="userBoard" v-if="users.length > 0"><!-- 검색결과 출력 부분 -->
      <ul v-for="u in users" :key="u.userId">
        <li>[ {{u.userId}} ]: {{u.userEmail}} ( {{u.userPassword}} ) : {{ u.userRoles }}</li>
      </ul>
    </p>
    <p class="userBoard" v-else>
      존재하지 않는 회원번호 입니다.
    </p>
           
    <label>회원번호 입력</label>
    <input type="number" v-model="userNo" ref="inputNo"/>
    <button v-on:click="findUser">찾기</button>
  </b-container>
 
</template>



<script>
// import defaultLayout from '../layouts/defaultLayout'; // 레이아웃이 포함된 모든 페이지 마다 이 레이아웃을 참조해줘야 하는데... 한번에 적용하는 방법은 없나?

import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';
import axios from 'axios';

export default{
  layout: 'defaultLayout',
  data(){
    return {
      userNo: ''
    };
  },
  computed: {
    ...mapState('user', ['users'])
  },
  methods:{
    ...mapActions('user', ['getUsersById']),
    
    findUser(){
      let inputNo = this.$data.userNo;

      if(inputNo) this.$store.dispatch('user/getUsersById', {id : this.$data.userNo}); // 어떤 스토어의 액션 쓸것인지 주소, 파라미터를 오브젝트로
      else{
        this.$refs.inputNo.focus();
        alert("검색할 회원번호를 입력해주세요");
      } 
    }
  }
}
</script>

<style>
ul{
  list-style: none;
}
.userBoard{
  height:100px; 
  border: 1px black solid
}
</style>

