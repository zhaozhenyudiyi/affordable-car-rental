<template>
  <section>
    <header>
      <Myheader txt="充值">
        <img src="./../../chw/images/2.png" slot="left-img" class="left-img" @click="back" />
      </Myheader>
    </header>
    <div class="picture">
      <div>
        <img src="./img/1000.png" alt />
      </div>
      <div>
        <img src="./img/2000.png" alt />
      </div>
    </div>
    <aside>
      <div class="driving">
        <ul>
          <li v-for="(item, index) in coin" :key="index" @click="driv(index)">
            <p class="pb" :class="item.vg?'dive':''">{{item.name}}驾币</p>
          </li>
          <li>
            <div>
              <van-field
                placeholder="其他驾币"
                readonly
                clickable
                :value="value"
                @touchstart.native.stop="show = true"
                @focus="dir"
              />

              <van-number-keyboard
                v-model="value"
                :show="show"
                :maxlength="6"
                @blur="show = false"
              />
            </div>
          </li>
        </ul>
      </div>
    </aside>
    <div class="payment">
      <div class="wx" @click="zf=!zf">
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
        <p v-if="!zf"></p>
        <img src="./img/icon-1.png" alt v-else />
      </div>
      <div class="zfb" @click="zf=!zf">
        <p>
          <img src="./img/icon-02.png" class="icon" alt />
        </p>
        <p>{{Alipay}}</p>
        <p v-if="zf"></p>
        <img src="./img/icon-1.png" alt v-else />
      </div>
    </div>
    <div class="arge">
      <van-button :disabled="chong" type="primary" class="arge-icon" @click="showPopup">充值</van-button>
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
              <span>平价分时租车平价币充值{{ nihao }}元</span>
            </p>
            <p>
              付款方式
              <span v-text="textali()">{{ Ali }}</span>
            </p>
          </div>

          <van-button type="primary" class="immediately" @click="pri">立即支付</van-button>
          <van-popup v-model="showw" class="a">
            支付成功
          </van-popup>
        </div>
      </van-popup>
    </div>
    <div class="Agreement" @click="fn">
      <div class="ment" v-if="ment"></div>
      <img src="./img/icon-1.png" alt v-else />
      <p class="ment-p">同意平驾的租车租赁协议</p>
    </div>
    <div class="footer">
      <p>1积分=1元，每单最高使用积分冲抵40％的租车费用</p>
    </div>
  </section>
</template>

<script>
import Myheader from "./../../chw/header";
export default {
  data() {
    return {
      //双向数据绑定
      show: false,
      showw: false, //弹出层
      value: "",
      coin: [
        { name: "100", vg: false },
        { name: "200", vg: false },
        { name: "300", vg: false },
        { name: "400", vg: false },
        { name: "500", vg: false }
      ],
      zf: true,
      ment: true,
      chong: true,
      popup: false,
      nihao: 100,
      Alipay: "支付宝支付",
      WeChat: "微信支付",
      Ali: ""
      //选中变色
      // ive:false
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
      if (this.zf == false) {
        this.Ali = this.Alipay;
      } else {
        this.Ali = this.WeChat;
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
    },
    back() {
      this.$router.push("/my_wallet");
    },
    pri() {
      this.showw = true;
      setTimeout(() => {
        this.$router.push("/pages");
      }, 300);
    }
  },
  mounted() {},
  components: {
    Myheader
  },
  updated() {}
};
</script>

<style scoped lang="less">
header {
  width: 100%;
  height: 0.88rem;
}
section {
  width: 100%;
  .picture {
    width: 100%;
    display: flex;
    overflow-x: auto;
    div {
      margin-right: 0.38rem;
      img {
        width: 5.5rem;
        height: 3.82rem;
      }
    }
  }
  aside {
    width: 100%;
    .driving {
      ul {
        margin-left: 0.35rem;
        font-size: 0;
        margin-top: 0.1rem;
        li {
          display: inline-block;
          width: 1.8rem;
          height: 0.7rem;
          line-height: 0.7rem;
          text-align: center;
          border: 2px solid rgba(255, 198, 0, 1);
          border-radius: 0.15rem;
          margin-right: 0.4rem;
          margin-bottom: 0.37rem;
          overflow: hidden;
          .pb {
            margin: 0;
            padding: 0;
            font-size: 0.32rem;
            color: rgba(251, 253, 253, 1);
          }
          .dive {
            color: #ffc600;
            font-weight: 900;
          }
          input {
            display: inline-block;
            width: 1.8rem;
            height: 0.7rem;
            background: none;
          }
        }
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
  .footer {
    width: 6rem;
    font-size: 0.24rem;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: rgba(153, 153, 153, 1);
    margin-left: 0.98rem;
    margin-top: -0.2rem;
  }
  //vant里的东西修改
  /deep/.van-cell {
    width: 1.8rem;
    height: 0.7rem;
    background-color: #333333;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    /deep/.van-field__control {
      flex: 1;
      font-size: 0.32rem;
      background-color: #333333;
      color: #fff;
      &::placeholder {
        font-size: 0.24rem;
      }
    }
  }
  .a{
    color: #fff;
    font-size: .40rem;
    text-align: center;
    padding: .2rem .3rem;
    background: #333333;
    border-radius: .2rem;
  }
}
</style>
