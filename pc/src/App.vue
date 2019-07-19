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
    this.$router.push('/ber/enquiries')
  },
};
</script>
<style lang=less>
*{
  margin:0;
  padding:0;
}
html,body,#app{
  width:100%;
  height:100%;
  box-sizing: border-box;
  /* overflow: hidden; */
header {
  width: 100%;
  height: 100px;
  background: red;
}
section {
  width: 100%;
  height: 100%;
  display: flex;
  .div {
    width: 210px;
    height: 100%;
    background: green;
  }
  aside {
    flex: 1;
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }

}
}
</style>
