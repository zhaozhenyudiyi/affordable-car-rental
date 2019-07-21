<template>
  <div class="out">
    <div class="in">
      <img src="./img/LOGO.png" alt class="logo" />
      <div class="in-in">
        <img src="./img/Time.png" alt class="text" />
        <p>随时随地，平驾分时租车</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {},
  mounted() {
     setTimeout(()=>{
      this.$router.push("/intro");
    }, 3000);
  }
};
</script>

<style scoped lang='less'>
div {
  width: 100%;
  height: 100%;
}
.out {
  overflow: hidden;
  background: url("./img/bg.png") center center;
  background-size: 130%;
  animation: bg 3.5s linear;
}
@keyframes bg {
  fr1om {
  }
  to {
    background-size: 140%;
  }
}
.in {
  position: absolute;
  box-sizing: border-box;
  padding: 10%;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .logo {
    width: 3rem;

    margin-bottom: 4.51rem;
  }
  .in-in {
    text-align:center;
    font-size: .3rem;
    font-weight: 500;
    color: rgba(252, 249, 249, 1);
  }
}
img {
  width: 100%;
}
</style>
