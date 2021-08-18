<template>
  <b-container style="height: 100px;">   
    <b-row>
      <b-col cols="2">{{ boardUser.userId }}</b-col>
      <b-col cols="4">{{ boardUser.userEmail }}</b-col>
      <b-col cols="3">{{ boardUser.userPassword }}</b-col>
      <b-col cols="3">{{ boardUser.userRoles }}</b-col>
    </b-row>
  </b-container>
</template>

<script>
/*
    스토어의 state, getter, action, mutation을 import한다고 생각하면 쉬움(사용하기전 선언단계)    
*/
  import {mapState, mapActions} from 'vuex';

  export default {
    data(){
      return {
        userId: '',
        userEmail: '',
        userPassword: '',
        userRoles: ''
      }
    },
    computed:{
      ...mapState('boardUser', ['boardUser'])       
    },
    methods:{
      /* 
      store중 boardUser라는 이름을 가진 store에서 searchBoardUser라는 액션 함수에 접근할 수 있게 선언

      */
      ...mapActions('boardUser', ['searchBoardUser']) 
    }
  }
</script>

<style>

</style>
