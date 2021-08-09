<template>
  <!-- <h1>첫번째 화면</h1> -->
  <b-container fluid>
    
    <b-container>      
      <b-row>
        <!--입력칸-->
        <b-col cols="4">
          <b-row class="inputRow">
            <b-col cols="4">이메일 : </b-col>
            <b-col cols="8">
              <input type="text" v-model="email">
            </b-col>
          </b-row>
          <b-row class="inputRow">
            <b-col cols="4">비밀번호 : </b-col>
            <b-col cols="8">
              <input type="password" v-model="password">
            </b-col>      
          </b-row>
          <b-row class="inputRow">
            <b-col cols="4">역할 : </b-col>
            <b-col cols="8">
              <input type="text" v-model="roles">
            </b-col>
          </b-row>
        </b-col>
        <!--표시칸-->
        <b-col cols="8" style="border: 1px black solid;">
          [신규회원 정보]
          <br>
          <br>
          {{email}}
          <br>
          {{roles}}
        </b-col>
      </b-row>     

    </b-container>
    <hr>
    <!-- 버튼 칸 -->
    <b-container>
      <b-row align-h="center">
        <b-col align-self="center">
          <b-button variant="success" @click="submit">등록</b-button>
          <b-button variant="danger" @click="cancel">취소</b-button>
        </b-col>        
      </b-row>      
    </b-container>
  </b-container> 
 
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';
import axios from 'axios';

export default{
  layout: 'defaultLayout',
  data(){
    return {
      email: '',
      password: '',
      roles: ''
    };
  },
  computed: {
    
  },
  methods:{
    submit(){
      let em = this.$data.email;
      let pw = this.$data.password;
      let rl = this.$data.roles;

      return new Promise(function(resolve, reject){
        debugger;
        axios({
          method:'post',
          url: 'http://localhost:8080/api/v1/happy/user',
          data:{
            email: em,
            password: pw,
            roles: rl
          }
        }).then(function(res){
          // 메시지 띄우고 메인화면으로 돌아가기
          alert('유저등록완료');
          console.log(res);
          
        }).catch(function(e){
          alert('유저등록 중 오류발생!');
          console.log(e);
        })
      })
    },
    cancel(){

    }
    // ...mapActions('user', ['getUsers']),
    
    // findUser(){
    //   let inputNo = this.$data.userNo;

    //   if(inputNo) this.$store.dispatch('user/getUsers', {id : this.$data.userNo}); // 어떤 스토어의 액션 쓸것인지 주소, 파라미터를 오브젝트로
    //   else{
    //     this.$refs.inputNo.focus();
    //     alert("검색할 회원번호를 입력해주세요");
    //   } 
    // }
  }
}
</script>

<style>
.inputRow{
    margin: 5px;
}
</style>

