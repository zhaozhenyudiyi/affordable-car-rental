<template>
  <div>
    <div class="swiper-container intro">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../start/img/1.png" alt />
        </div>
        <div class="swiper-slide">
          <img src="../start/img/2.png" alt />
        </div>
        <div class="swiper-slide">
          <img src="../start/img/3.png" alt />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="pass" @click="pass">跳过</div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  data() {
    return {};
  },
  methods: {
    pass() {
      this.$router.push("/start");
    }
  },
  components: {},
  mounted() {
    var mySwiper = new Swiper(".intro", {
      direction: "horizontal", // 垂直切换选项
      loop: false, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>

<style scoped lang='less'>
.intro {
  width: 100%;
  height: 13.32rem;
  img {
    width: 100%;
  }
  .swiper-pagination-bullet {
    background-color: #fff;
  }
  /deep/.swiper-pagination-bullets {
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 2.15rem;
    /deep/.swiper-pagination-bullet {
      background-color: rgba(255, 255, 255, 0.5);
      width: 0.2rem;
      height: 0.2rem;
      margin: 0 0.35rem;
    }
    /deep/.swiper-pagination-bullet-active {
      width: 0.28rem;
      height: 0.28rem;
      background-color: rgba(255, 255, 255, 0.8);
    }
  }
}
.pass {
  position: fixed;
  top: 0.38rem;
  right: 0.34rem;
  width: 1.05rem;
  height: 0.46rem;
  font-size: 0.23rem;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 0.23rem;
  text-align: center;
  line-height: 0.46rem;
  z-index: 100;
}
</style>
