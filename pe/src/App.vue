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
p{
  font-size: 1rem;
}
</style>
