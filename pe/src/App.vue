<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Rem from "../static/js/rem"
export default {
  name: 'App',
  mounted(){
    Rem.setrem();
    window.onresize = Rem.setrem;
  }
}
</script>

<style>
  body,html{
    height: 100%;
    width:100%;
    background: #2f3032;
  }
  #app{
    height: 100%;
    width:100%;
    /* background: #2f3032; */
  }
  /* p{
    margin: 0;
  } */
</style>
