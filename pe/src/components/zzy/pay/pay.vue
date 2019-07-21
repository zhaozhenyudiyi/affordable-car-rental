<template>
  <section>
    <header></header>
    <div class="picture">
      <div>
        <img src="./img/1000.png" alt />
      </div>
    </div>
    <div class="food">
      <div class="wb">
        <p>丰田汉兰达</p>
        <p>2010款 3.0T 335i 四门 硬顶敞篷</p>
        <p>
          <span>{{nihao}}</span>元/共计
          <span>（市场价1547元）</span>
        </p>
        <ul>
          <li>
            <p>豫A6U859</p>
            <p>车牌号</p>
          </li>
          <li>
            <p>自动挡</p>
            <p>变速箱</p>
          </li>
          <li>
            <p>SUV</p>
            <p>车型</p>
          </li>
        </ul>
      </div>
      <div class="bottom">
        <div class="payment">
          <div class="wx" @click="zf=1">
            <p>
              <svg
                t="1562932667971"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="5547"
                width="200"
                height="200"
              >
                <path
                  d="M347.729118 353.0242c-16.487119 0-29.776737 13.389539-29.776737 29.776737S331.241998 412.677596 347.729118 412.677596s29.776737-13.389539 29.776737-29.776737-13.289617-29.876659-29.776737-29.876659zM577.749415 511.800156c-13.689305 0-24.880562 11.091335-24.880563 24.880562 0 13.689305 11.091335 24.880562 24.880563 24.880562 13.689305 0 24.880562-11.191257 24.880562-24.880562s-11.191257-24.880562-24.880562-24.880562zM500.909446 412.677596c16.487119 0 29.776737-13.389539 29.776737-29.776737s-13.389539-29.776737-29.776737-29.776737c-16.487119 0-29.776737 13.389539-29.776737 29.776737s13.289617 29.776737 29.776737 29.776737zM698.455113 511.600312c-13.689305 0-24.880562 11.091335-24.880562 24.880562 0 13.689305 11.091335 24.880562 24.880562 24.880562 13.689305 0 24.880562-11.091335 24.880562-24.880562-0.099922-13.689305-11.191257-24.880562-24.880562-24.880562z"
                  fill="#00C800"
                  p-id="5548"
                />
                <path
                  d="M511.601093 0.799375C229.12178 0.799375 0.000781 229.820453 0.000781 512.399688s229.021077 511.600312 511.600312 511.600312 511.600312-229.021077 511.600312-511.600312S794.180328 0.799375 511.601093 0.799375z m-90.229508 634.504294c-27.37861 0-49.361436-5.595628-76.839969-10.991413l-76.640125 38.469945 21.882904-65.948477c-54.957065-38.370023-87.73146-87.831382-87.73146-148.084309 0-104.318501 98.722873-186.554254 219.32865-186.554255 107.815769 0 202.34192 65.648712 221.327088 153.979703-6.994536-0.799375-13.989071-1.298985-21.083529-1.298985-104.118657 0-186.454333 77.739266-186.454332 173.564403 0 15.98751 2.498048 31.275566 6.794692 45.964091-6.794692 0.599532-13.689305 0.899297-20.583919 0.899297z m323.547228 76.839969l16.48712 54.757221-60.153006-32.874317c-21.882904 5.495706-43.965652 10.991413-65.848555 10.991413-104.318501 0-186.554254-71.344262-186.554255-159.175644 0-87.631538 82.135831-159.175644 186.554255-159.175644 98.523029 0 186.254489 71.444184 186.254488 159.175644 0.099922 49.461358-32.774395 93.227166-76.740047 126.301327z"
                  fill="#00C800"
                  p-id="5549"
                />
              </svg>
            </p>
            <p>{{ WeChat }}</p>
            <p v-if="zf !== 1"></p>
            <img src="./img/icon-1.png" alt v-else />
          </div>

          <div class="zfb" @click="zf=2">
            <p>
              <img src="./img/icon-02.png" class="icon" alt />
            </p>
            <p>{{Alipay}}</p>
            <p v-if="zf !== 2"></p>
            <img src="./img/icon-1.png" alt v-else />
          </div>

          <div class="zfb" @click="zf=3">
            <p>
              <span class="pjb">
                <span class="pjb-in"></span>
              </span>
            </p>
            <p>{{pjb}}</p>
            <p v-if="zf !== 3"></p>
            <img src="./img/icon-1.png" alt v-else />
          </div>
        </div>
        <div class="arge">
          <van-button :disabled="chong" type="primary" class="arge-icon" @click="showPopup">立即支付</van-button>
          <van-popup v-model="popup" position="bottom" :style="{ height: '65%' }">
            <div class="hea">
              <div class="hea1">
                <img src="./img/icon1.png" alt />
                <p>确认付款</p>
              </div>
              <div class="sec">
                <p>
                  <span>￥</span>
                  {{ nihao }}
                </p>
              </div>
              <div class="tion">
                <p>
                  订单信息
                  <span>订单租车费用{{ nihao }}元</span>
                </p>
                <p>
                  付款方式
                  <span v-text="textali()">{{ Ali }}</span>
                </p>
              </div>
              <van-button type="primary" class="immediately">确认付款</van-button>
            </div>
          </van-popup>
        </div>
        <div class="Agreement" @click="fn">
          <div class="ment" v-if="ment"></div>
          <img src="./img/icon-1.png" alt v-else />
          <p class="ment-p">仔细阅读并同意平驾的租车租赁协议</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      //双向数据绑定
      show: false,
      value: "",
      zf: 1,
      ment: true,
      chong: true,
      popup: false,
      nihao: 5874,
      Alipay: "支付宝支付",
      WeChat: "微信支付",
      pjb: "平价币支付",
      Ali: "",
      car: null
    };
  },
  methods: {
    fn() {
      this.ment = !this.ment;
      this.chong = !this.chong;
    },
    showPopup() {
      this.popup = true;
      if (this.value != "") {
        this.nihao = this.value;
      }
    },
    textali() {
      if (this.zf == 1) {
        this.Ali = this.Alipay;
      } else if(this.zf == 2){
        this.Ali = this.WeChat;
      }else if(this.zf == 3){
        this.Ali = this.pjb;
      }
      return this.Ali;
    },
    driv(a) {
      this.coin.forEach(element => {
        element.vg = false;
      });
      this.coin[a].vg = true;
      this.nihao = this.coin[a].name;
    },
    dir() {
      this.coin.forEach(element => {
        element.vg = false;
      });
    }
  },
  mounted() {
    // let thit = this;
    // this.axios
    //   .get("http://172.25.1.67:8080/comments/findAll")
    //   .then(function(response) {
    //     console.log(response.data[0].comment_shop);
    //     thit.car = response.data[0].comment_shop;
    //     console.log(thit.car, "aaaaa");
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  },
  components: {},
  updated() {}
};
</script>

<style scoped lang="less">
.pjb {
  display: inline-block;
  width: 0.44rem;
  height: 0.44rem;
  background-color: #e7be4e;
  border-radius: 50%;
  display:flex;
  justify-content: center;
  align-items: center;
  .pjb-in {
    display: inline-block;
    background-color: #fff;
    width: 0.2rem;
    height: 0.2rem;
  }
}
header {
  width: 100%;
  height: 0.88rem;
//   background: red;
}
section {
  width: 100%;
  .picture {
    width: 100%;
    img {
      width: 100%;
      height: 3.58rem;
    }
  }

  .food {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .wb {
      padding: 0 0.32rem;
      height: 4rem;
      color: #fff;
      font-size: 0.36rem;
      p {
        margin: 0;
      }
      p:nth-child(2) {
        font-size: 0.24rem;
        margin-top: 0.24rem;
      }
      p:nth-child(3) {
        font-size: 0.24rem;
        margin-top: 0.24rem;
        span:nth-child(1) {
          font-size: 0.56rem;
          color: #e7be4e;
        }
        span:nth-child(2) {
          font-size: 0.24rem;
          color: #999999;
          text-decoration:line-through;
        }
      }
      ul {
        text-align: center;
        display: flex;
        justify-content: space-around;
        margin-top: 0.24rem;
      }
    }
  }

  .payment {
    width: 6.79rem;
    margin: 0 auto;
    font-size: 0;
    .wx,
    .zfb {
      height: 0.44rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        color: rgba(250, 250, 249, 1);
        .icon {
          width: 0.44rem;
          height: 0.44rem;
        }
      }
      p:nth-child(2) {
        font-size: 0.3rem;
        flex: 1;
        margin-left: 0.35rem;
      }
      p:nth-child(3) {
        width: 0.35rem;
        height: 0.35rem;
        border: 1px solid #fff;
        border-radius: 50%;
        overflow: hidden;
      }
      img {
        width: 0.35rem;
        height: 0.35rem;
      }
    }
    .zfb {
      margin-top: 0.37rem;
    }
  }
  .arge {
    width: 6.9rem;
    height: 0.88rem;
    background: rgba(255, 198, 0, 1);
    border-radius: 44px;
    overflow: hidden;
    margin: 0 auto;
    margin-top: 0.56rem;
    display: flex;
    .arge-icon {
      flex: 1;
      width: 100%;
      height: 100%;
      background: rgba(255, 198, 0, 1);
      font-size: 0.36rem;
      color: rgba(51, 51, 51, 1);
      border: none;
      overflow: hidden;
    }
    .hea {
      width: 100%;
      position: relative;
      .hea1 {
        width: 100%;
        height: 0.8rem;
        margin-top: 0.33rem;
        img {
          width: 0.44rem;
          height: 0.44rem;
          margin-left: 0.43rem;
          border: 1px dotted #000;
          float: left;
        }
        p {
          float: left;
          margin: 0;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.36rem;
          font-family: PingFang-SC-Bold;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
        }
      }
      .sec {
        position: absolute;
        left: 50%;
        top: 20%;
        transform: translateX(-50%);
        overflow: hidden;
        p {
          span {
            font-size: 0.5rem;
            font-family: PingFang-SC-Bold;
            font-weight: bold;
            color: rgba(51, 51, 51, 1);
          }
        }
      }
      .tion {
        width: 6.79rem;
        font-size: 0.26rem;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: rgba(153, 153, 153, 1);
        overflow: hidden;
        position: absolute;
        left: 50%;
        top: 400%;
        transform: translateX(-50%);
        overflow: hidden;
        p {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #eee;
          padding-bottom: 0.2rem;
          span {
            color: #333333;
          }
        }
      }
      .immediately {
        width: 100%;
        height: 0.89rem;
        background: #ffc600;
        font-size: 0.32rem;
        font-weight: 400;
        color: #333333;
        border: none;
        position: fixed;
        bottom: 0;
      }
    }
  }
  .Agreement {
    width: 6.79rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    margin-top: 0.15rem;
    .ment {
      width: 0.35rem;
      height: 0.35rem;
      box-sizing: border-box;
      border: 1px solid #f3f3f3;
      border-radius: 50%;
    }
    img {
      width: 0.35rem;
      height: 0.35rem;
    }
    .ment-p {
      margin-left: 0.35rem;
      font-size: 0.24rem;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(254, 251, 253, 1);
    }
  }
}
</style>
