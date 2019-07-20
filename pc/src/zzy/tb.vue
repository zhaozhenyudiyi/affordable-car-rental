<template>
  <div>
    <header>
      <div class="head-left">
        <img src="./img/LOGO.png" alt />你好，欢迎进入平驾租车后台管理系统
      </div>
      <div class="header-right">
        <img src="./img/图层 4.png" alt style="wider:63px" />
        <img src="./img/形状.png" alt class="img" />
        <img src="./img/设置.png" alt />
      </div>
    </header>
    <div class="left">
      <ul>
        <li v-for="(value,index) in fenlei" :key="index" @click="junp(index)" class="fl">
          <router-link :to="value.src">
            <div class="li" :class="{on : index == 0}">
              <img :src="value.img_src" alt />
              <span>{{value.text}}</span>
            </div>
          </router-link>
        </li>
      </ul>
      <router-view class="ck"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fenlei: [
        {
          text: "首页",
          img_src: require("./img/sy.png"),
          src: "/index"
        },
        {
          text: "会员管理",
          img_src: require("./img/hy.png"),
          src: "/ber/enquiries"
        },
        { text: "预定管理", img_src: require("./img/yd.png"), src: "/reservation" },
        { text: "费用结算", img_src: require("./img/fy.png"), src: "/costSettlement" },
        { text: "车辆管理", img_src: require("./img/cl.png"), src: "/car-manage" }
      ],
      num: 0
    };
  },
  methods: {
    junp(index) {
      let li = document.getElementsByClassName("li");
      li[this.num].classList.remove("on");
      li[index].classList.add("on");
      this.num = index;
      //   console.log();npm
    }
  },
  components: {},
  mounted() {
    this.$axios
      .get("http://172.25.1.199:8080/user/findAll")
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    this.$router.push("/index");
  }
};
</script>

<style scoped lang='less'>
html,
body {
  height: 100%;
}
header {
  background-color: #2d3647;
  color: white;
  height: 100px;
  width: 100%;
  padding: 42px;
  display: flex;
  // flex-direction: column;
  justify-content: space-between;
  align-items: center;
  // background-color: rgb(155, 31, 31);
  .head-left {
    display: flex;
    align-items: center;
    img {
      margin-right: 8px;
      width: 93px;
      height: 56px;
    }
  }
  .header-right {
    display: flex;
    align-items: center;
    .img {
      margin: 0 45px 0 19px;
    }
  }
}
.left {
  height: 653.5px;

  background-color: #3b4255;
  display: flex;
  .ck {
    background-color: #fff;
    flex: 1;
    overflow: auto;
    overflow-y: auto;
    padding-bottom: 50px;
  }
  ul {
    width: 210px;
    li {
      box-sizing: border-box;
    }
    .li {
      box-sizing: border-box;
      height: 58px;
      color: white;
      display: flex;
      align-items: center;
      img {
        margin-left: 40px;
        margin-right: 10px;
        width: 17px;
      }
    }
    .on {
      box-sizing: border-box;
      border-left: 4px solid #ffc600;
      background-color: #293038;
      img {
        margin-left: 36px;
      }
    }
  }
}
</style>
