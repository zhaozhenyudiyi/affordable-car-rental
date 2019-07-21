<template>
  <div class="Banner">
    <div class="swiper-container auto">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./img/banner1.png" alt />
        </div>
        <div class="swiper-slide">
          <img src="./img/banner2.png" alt />
        </div>
        <div class="swiper-slide">
          <img src="./img/banner1.png" alt />
        </div>
        <div class="swiper-slide">
          <img src="./img/banner2.png" alt />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>

    <div class="sent">
      <span class="left">租</span>
      <span class="change" @click="cheng">{{ $store.state.option }}</span>
      <p class="area">{{ $store.state.option }}国际自助点</p>
      <div class="icon">
        <span id="door" :class="{door:flay1}" @click="flay1 = !flay1">上门</span>
        <span id="store" :class="{store:!flay1}" @click="flay1 = false">到店</span>
      </div>
    </div>

    <div class="sent">
      <span class="left">还</span>
      <span class="change" @click="chen">{{ $store.state.option2 }}</span>
      <p class="area">{{ $store.state.option2 }}国际自助点</p>
      <div class="icon">
        <span id="door" :class="{door:flay2}" @click="flay2 = !flay2">上门</span>
        <span id="store" :class="{store:!flay2}" @click="flay2 = false">到店</span>
      </div>
    </div>
    <div class="time">
      <div class="star">
        <!-- <van-button type="primary" @click="showPopup"> -->
        <p class="math">07月8日</p>
        <p class="clock">周一17：00</p>
        <!-- </van-button> -->
      </div>
      <div class="day">
        <span>2天</span>
        <img src="./img/形状 4.png" />
      </div>
      <div class="end">
        <!-- <van-button type="primary" @click="showPopup"> -->
        <p class="math">07月10日</p>
        <p class="clock">周三17：00</p>
        <!-- </van-button> -->
      </div>
    </div>
    <div class="choice">
      <input type="button" value="立即选车" @click="junp" />
    </div>
    <Recommend></Recommend>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import Recommend from "../recommend/recommend";
export default {
  name: "carrousel",
  data() {
    return {
      value: 0,
      value1: "a",
      option: [
        { text: "郑州", value: 0 },
        { text: "北京", value: 1 },
        { text: "上海", value: 2 }
      ],
      option1: [
        { text: "郑州", value: "a" },
        { text: "北京", value: "b" },
        { text: "上海", value: "c" }
      ],
      overlay: false,
      flay1: true,
      flay2: true
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    junp() {
      this.$router.push("/carDetails");
    },
    cheng() {
      this.$store.commit("chengshi", "option");
      this.$router.push("/choice");
    },
    chen() {
      this.$store.commit("chengshi", "option2");
      this.$router.push("/choice");
    }
  },
  components: {
    Recommend
  },
  mounted() {
    var mySwiper = new Swiper(".auto", {
      loop: true,
      effect: "slide",
      direction: "horizontal", // 垂直切换选项
      loop: false, // 循环模式选项
      autoplay: {
        delay: 1000,
        disableOnInteraction: false
      },
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>

<style scoped lang='less'>
.Banner {
  width: 100%;
  // height: 2.55rem;
  flex: 1;
  overflow: auto;
  /deep/.swiper-pagination-bullet {
    background: #ffc600;
  }
}
.Banner img {
  width: 7.5rem;
}
.van-dropdown-menu {
  width: 2rem;
  background: none;
  .van-dropdown-menu__title {
    color: white;
  }
}
.van-dropdown-item--down .van-popup {
  width: 30%;
}
.van-hairline--top-bottom::after {
  border: none;
}
.change {
  color: white;
  width: 0.6rem;
  height: auto;
  font-size: 0.26rem;
  margin-left: 0.19rem;
}
.sent {
  font-size: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding: 0 0.29rem;
  border-bottom: 1px solid #fafafa;
  .left {
    display: block;
    width: 0.24rem;
    height: 0.24rem;
    font-size: 0.24rem;
    color: white;
    background: #ffc600;
    text-align: center;
    line-height: 0.24rem;
    padding: 0.03rem;
    border-radius: 0.05rem;
  }
  .area {
    font-size: 0.26rem;
    color: white;
    margin-left: 0.38rem;
  }
  .icon {
    width: 1.26rem;
    height: 0.33rem;
    background: #dadada;
    border-radius: 0.17rem;
    position: absolute;
    right: 0.29rem;
    #door {
      display: inline-block;
      width: 0.64rem;
      height: 100%;
      color: black;
      font-size: 0.23rem;
      border-radius: 38%;
      text-align: center;
    }
    .door {
      background: #ffc600;
    }
    #store {
      display: inline-block;
      width: 0.62rem;
      height: 100%;
      color: black;
      font-size: 0.23rem;
      border-radius: 0.17rem;
      text-align: center;
    }
    .store {
      background: #ffc600;
    }
  }
}
.time {
  font-size: 0;
  display: flex;
  flex-direction: row;
  padding: 0 0.33rem;
  justify-content: space-between;
  margin-top: 0.39rem;
  .star {
    display: flex;
    flex-direction: column;
    font-size: 0.26rem;
    width: 1.5rem;
    align-items: center;
    .math {
      font-size: 0.26rem;
      margin: 0;
      color: white;
    }
    .clock {
      font-size: 0.2rem;
      margin: 0;
      color: #999999;
    }
  }
  .day {
    display: flex;
    flex-direction: column;
    font-size: 0.26rem;
    width: 2rem;
    align-items: center;
    span {
      color: #ffc600;
    }
    img {
      width: 100%;
      height: 0.14rem;
    }
  }
  .end {
    display: flex;
    flex-direction: column;
    font-size: 0.26rem;
    width: 1.5rem;
    align-items: center;
    .math {
      font-size: 0.26rem;
      margin: 0;
      color: white;
    }
    .clock {
      font-size: 0.2rem;
      margin: 0;
      color: #999999;
    }
  }
}
.choice {
  text-align: center;
  input {
    width: 6.86rem;
    height: 0.89rem;
    background: #ffc600;
    font-size: 0.32rem;
    border: none;
    border-radius: 0.45rem;
  }
}
</style>

