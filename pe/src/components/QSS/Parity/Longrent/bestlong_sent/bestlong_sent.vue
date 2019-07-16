<template>
  <div class="swiper">
    <van-swipe :loop="false" :width="300" :show-indicators="false">
      <van-swipe-item>
        <img src="./img/图层 623.png" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="./img/图层 625 (1).png" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="./img/图层 625.png" />
      </van-swipe-item>
    </van-swipe>
    <input type="button" value="立即选车" class="choice" />
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

<style scoped>
img {
  width: 5.8rem;
  height: 8.3rem;
  margin-left: .32rem;
}
.swiper {
  padding-top: 0.24rem;
  border-top: 1px solid rgba(232, 232, 232, 1);
  position: relative;
}
.choice {
    position: absolute;

  width: 6.68rem;
  height: 0.89rem;
  background: rgba(255, 198, 0, 1);
  border-radius: 0.15rem;
  border: none;
  /* color: #FF000000; */
  font-size: 0.32rem;
  margin-left: 0.4rem;
  /* margin-bottom: 0.97rem; */
}
</style>
