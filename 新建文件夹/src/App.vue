<template>
  <div id="app">
   
    <router-view/>
     <Foot></Foot>
  </div>
</template>

<script>
import setRem from './../static/rem.js';
import Foot from "./pages/footer/foot"
export default {
  name: 'App',
  components:{
    Foot,
  },
  beforeCreate(){
   this.$router.push('/home')
  },
   mounted(){
    setRem.setrem();
   window.onresize=setRem.setrem;
}
}
</script>

<style>
@import './../static/css/common.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
