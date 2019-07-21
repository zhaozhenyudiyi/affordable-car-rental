<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Rem from "../static/js/rem";
export default {
  name: "App",
  mounted() {
    Rem.setrem();
    window.onresize = Rem.setrem;
  }
};
</script>


<style>
html,
body {
  width: 100%;
  height: 100%;
  background-color: #2f3032;
}
#app {
  width: 100%;
  height: 100%;

}
</style>
