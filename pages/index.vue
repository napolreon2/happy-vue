<template>
  <!-- <h1>첫번째 화면</h1> -->

  <b-container>
    
    <h1>회원 검색기능</h1>
    
    <custom-input width="200px" customProp="커스텀" :value="test" @getvalue:value="val => test = val"/>

    <p class="userBoard" v-if="users.length > 0"><!-- 검색결과 출력 부분 -->
      <ul v-for="u in users" :key="u.userId"><!-- store의 state 값을 그대로 가져다 사용! -->
        <li>[ {{u.userId}} ]: {{u.userEmail}} ( {{u.userPassword}} ) : {{ u.userRoles }}</li>
      </ul>
    </p>
    <p class="userBoard" v-else>
      존재하지 않는 회원번호 입니다.
    </p>
           
    <label>회원번호 입력</label>
    <input type="number" v-model="userNo" ref="inputNo"/>
    <button v-on:click="findUser">찾기</button>
    {{ msg }}
    <button v-on:click="messageFunc('히히')">믹스인 메세지</button>
  </b-container>
 
</template>
<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';
import axios from 'axios';
import textMixin from '~/static/plugins/mixin/textMixin';
import customInput from '~/components/customInput.vue';

export default{  
  layout: 'defaultLayout',
  /*
    mixins: 공통적으로 사용할 속성을 정의한 mixin 파일을 가져옴.
            불러온 컴포넌트에 이미 같은 속성이 존재한다면 컴포넌트의 것을 우선시함(override)

    middleware: 선언된 화면으로 이동해 올때 발생할 function 정의
                ex) 페이지 접근권한체크
                그러나 한동안 사용될 것 같진 않다..
  */
  mixins: [textMixin],
  middleware: 'stat',

  data(){
    return {
      userNo: '',
      test: ''
    };
  },
  computed: {
    ...mapState('user', ['users'])
  },
  methods:{
    ...mapActions('user', ['getUsersById']),
    
    findUser(){
      let inputNo = this.userNo;

      if(inputNo) this.$store.dispatch('user/getUsersById', {id : this.userNo}); // 어떤 스토어의 액션 쓸것인지 주소, 파라미터를 오브젝트로
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

