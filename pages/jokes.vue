<template>
  <b-container>
    <div>
      <div class = "jokeCol" v-for="j in jokes" :key="j.id">{{ j.joke }}</div>
    </div>
  </b-container>
</template>

<script>
import axios from 'axios';
import {mapState} from 'vuex';

export default{
  layout: 'defaultLayout',

  // data(){
  //   return {
  //     jokes: []
  //   };
  // },
  computed:{
    ...mapState('dadJoke', ['jokes'])
  },
  async created(){            // 컴포넌트 life cycle 참조
    this.$store.dispatch('dadJoke/getJokes');
  }
}

</script>
<style>
.jokeCol{
  background: turquoise;
  font-size: 1.5em;
  margin: 5px;
}
</style>