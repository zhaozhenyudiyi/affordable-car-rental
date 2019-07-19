<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  // beforeCreate() {
  //   this.$router.push("/ber/enquiries");
  // }
};
</script>

<style scoped lang="less">
@import "../static/css/reset.css";
*{
  margin:0;
  padding:0;
}

#app {
  width: 100%;
  height: 100%;
  // overflow: hidden;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
}

</style>
