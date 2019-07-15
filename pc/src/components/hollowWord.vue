<template>
  <div>
    <header>
      <div class="head-left">
        <img src="./LOGO.png" alt />你好，欢迎进入平驾租车后台管理系统
      </div>
    </header>
    <div class="left"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang='less'>
html,
body {
  height: 100%;
}
header {
  height: 100px;
  width: 100%;
  display: flex;
  // flex-direction: column;
  justify-content: space-between;
  align-items: center;
  // background-color: rgb(155, 31, 31);
  .head-left {
    display: flex;
    align-items: center;
  }
  img {
    width: 93px;
    height: 56px;
  }
}
.left {
  height: 653.5px;
  width: 210px;
  background-color: rgb(139, 247, 51);
}
</style>
