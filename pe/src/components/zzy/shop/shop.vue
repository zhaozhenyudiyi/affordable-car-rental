<template>
  <div class="out">
    <div class="head"></div>
    <p>
      <span>用车城市</span>
      <router-link to="/intro">
        <span>郑州</span>
        <img src="./img/icon1.png" alt />
      </router-link>
    </p>
    <div class="ul">
      <ul class="area">
        <li
          v-for="(vlaue,index) in site"
          :key="index"
          class="li"
          :class="{click:index == 0}"
          @click="click(index)"
        >{{value}}</li>
      </ul>
      <dedetails></dedetails>
    </div>
  </div>
</template>

<script>
import dedetails from "./shop-details";
export default {
  data() {
    return {
      site: [
        "附近门店",
        "金水区",
        "城管区",
        "二七区",
        "中原区",
        "惠济区",
        "高新区",
        "郑东新区",
        "龙湖区",
        "经开区",
        "航空港区"
      ],
      num: 0
    };
  },
  methods: {
    click(index) {
      let li = document.getElementsByClassName("li");
      li[this.num].classList.remove("click");
      li[index].classList.add("click");
      this.num = index;
    }
  },
  components: {
    dedetails
  }
};
</script>

<style scoped lang='less'>
.out {
  min-height: 13.34rem;
  background: url("./img/bg.jpg");
  background-color: #2b2d2c;
  .head {
    position: fixed;
    background: url("./img/bg.jpg");
    top: 0;
    height: 0.88rem;
    width: 7.5rem;
  }
  p {
    background: url("./img/bg.jpg");
    position: fixed;
    top: 0.88rem;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    height: 1rem;
    font-size: 0.26rem;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.3rem;

    span {
      color: #fff;
    }

    img {
      width: 0.24rem;
      height: 0.24rem;
    }
  }
  .ul {
    margin-top: 1.88rem;
    overflow: hidden;
    .area {
      position: fixed;
      float: left;
      background: url("./img/bg.jpg");

      width: 2.27rem;
      li {
        line-height: 0.85rem;
        padding-left: 0.3rem;
        color: #fff;
        height: 0.85rem;
        font-size: 0.26rem;
      }
      .click {
        color: #fcc600;
        background-color: rgba(255, 255, 255, 0.4);
      }
    }
  }
}
</style>
