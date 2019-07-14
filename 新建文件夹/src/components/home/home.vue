
<template>
  <div id="home">
    <Myheader class="head-home">
      <div class="search" slot="search">
        <img src="../../\pages\header\img-head\ic_group_search_small.png" alt />
        <input type="text" />
        <img src="../../\pages\header\img-head\ic_scan_gray.png" alt />
      </div>
      <img src="../../\pages\header\img-head\ic_chat_white.png" alt slot="right" class="rightImg" />
    </Myheader>
    <Mybanner swiperid='true'>
      <!-- <div slot='swiper-sil' class='swiper-slide'>
          <img src="./img-home/01.jpg" alt=""/>
       </div>
        <div slot='swiper-sil' class='swiper-slide'>
          <img src="./img-home/02.jpg" alt=""/>
       </div>
        <div slot='swiper-sil' class='swiper-slide'>
          <img src="./img-home/03.jpg" alt=""/>
      </div> -->
      <swiper-slide slot="swiper-sil">
        <img src="./img-home/01.jpg" alt />
      </swiper-slide>
      <swiper-slide slot="swiper-sil">
        <img src="./img-home/02.jpg" alt />
      </swiper-slide>
      <swiper-slide slot="swiper-sil">
        <img src="./img-home/03.jpg" alt />
      </swiper-slide>
    </Mybanner>
    <Cell title='热点' >
     <div slot='left_img' class='left_img'></div>
     <span slot='title' ></span>
    </Cell>
    <HomeTxt></HomeTxt>
      
  </div>
</template>

<script>
import Myheader from "../../pages/header/head.vue";
import Mybanner from "../../pages/banner/banner2.vue";
import Cell from "../../pages/cell/cell.vue";
import HomeTxt from "./homeTxt"; 
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    Myheader,
    Mybanner,
    Cell,
    HomeTxt,
  }
};
</script>

<style scoped lang=less>
#home {
  width: 100%;
  font-size: 0.2rem;
  display: flex;
  flex-direction: column;
  .head-home {
    background-color: #42bd56;
    border-bottom: 0.005rem solid #999;
    .search {
      width: 86%;
      height: 65%;
      background: #fff;
      border-radius: 5px;
      position: absolute;
      top: 0.1rem;
      left: 0.1rem;
      display: flex;
      img:nth-child(1) {
        position: absolute;
        top: 0.05rem;
        left: 0.1rem;
        width: 0.2rem;
      }
      img:last-of-type {
        position: absolute;
        top: 0.05rem;
        right: 0.1rem;
        width: 0.2rem;
      }
      input {
        position: absolute;
        top: 0.05rem;
        left: 0.4rem;
        width: 75%;
        height: 0.2rem;
      }
    }
  }
}
</style>
