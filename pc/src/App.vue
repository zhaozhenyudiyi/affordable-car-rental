<template>
  <div id="app">
    <header></header>
    <section>
      <div class="div"></div>
      <aside>
        <router-view />
      </aside>
    </section>
  </div>
</template>

<script>
import "./../static/css/reset.css";
export default {
  name: "App",
  beforeCreate() {
    this.$router.push("/ber/enquiries");
  }
};
</script>



<style scoped lang="less">
@import "../static/css/reset.css";
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