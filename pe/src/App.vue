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

<style lang=less>
*{
  box-sizing: border-box;
}
html,body,#app{
  margin:0;
  padding:0;
  width:100%;
  height:100%;
  font-size:1rem;
}
</style>
