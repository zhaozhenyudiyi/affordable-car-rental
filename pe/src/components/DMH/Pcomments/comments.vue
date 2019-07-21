<template>
  <div>
    <header>
       <Myheader txt="提交评价">
        <img src="./../../chw/images/2.png" slot="left-img" class="left-img"  @click="store"  />
      </Myheader>
    </header>
    <section>
      <div class="list">
        <img :src="imgs" alt />
        <div class="pic">
          <p v-text="text1"></p>
          <p v-text="text2"></p>
        </div>
      </div>
      <div class="text">
        <textarea maxlength="40" placeholder="感谢您对平驾的支持，来说说您的平驾之旅吧 !" required v-model="comment"></textarea>
        <div class="camera">
          <van-uploader class="cam">
            <svg
              t="1562902003742"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2694"
              width="200"
              height="200"
            >
              <path
                d="M930.048 928H93.952C42.112 928 0 883.84 0 829.568V314.688c0-54.272 42.112-98.432 93.952-98.432h159.424C277.376 157.248 315.008 96 367.36 96h289.28c55.424 0 91.776 61.056 113.92 120.256h159.488c51.84 0 93.952 44.16 93.952 98.432v514.88c0 54.272-42.112 98.432-93.952 98.432zM93.952 280.256c-16.512 0-29.952 15.424-29.952 34.432v514.88c0 19.008 13.44 34.432 29.952 34.432h836.096c16.512 0 29.952-15.424 29.952-34.432V314.688c0-19.008-13.44-34.432-29.952-34.432h-182.272a32 32 0 0 1-30.464-22.144c-21.888-67.648-48.64-98.112-60.672-98.112H367.36c-9.088 0-36.544 29.12-61.952 99.136a32 32 0 0 1-30.08 21.12H93.952z"
                p-id="2695"
              />
              <path d="M800 384a32 32 0 1 1 0-64 32 32 0 0 1 0 64" p-id="2696" />
              <path
                d="M512 736c-105.856 0-192-86.144-192-192s86.144-192 192-192 192 86.144 192 192-86.144 192-192 192z m0-320c-70.592 0-128 57.408-128 128s57.408 128 128 128 128-57.408 128-128-57.408-128-128-128z"
                p-id="2697"
              />
            </svg>
            <p>添加照片</p>
          </van-uploader>
        </div>
      </div>
      <div class="name">
        <div class="name_">
          <van-checkbox v-model="checked">
            <img
              slot="icon"
              slot-scope="props"
              :src="props.checked ? icon.active : icon.inactive"
              class="icon-name"
            />
          </van-checkbox>匿名
        </div>
        <p>您的评价能帮助其他小伙伴呦！</p>
      </div>
      <aside>
        <div class="ware">
          <p>车辆硬件：</p>
          <van-rate v-model="value1" icon="star" void-icon="star-o" :size="25" :gutter="ween" />
        </div>
        <div class="ware">
          <p>取还便捷：</p>
          <van-rate v-model="value2" icon="star" void-icon="star-o" :size="25" :gutter="ween" />
        </div>
        <div class="ware">
          <p>车辆清洁：</p>
          <van-rate v-model="value3" icon="star" void-icon="star-o" :size="25" :gutter="ween" />
        </div>
        <div class="ware">
          <p>服务水平：</p>
          <van-rate v-model="value4" icon="star" void-icon="star-o" :size="25" :gutter="ween" />
        </div>
      </aside>
      <div class="but">
        <van-button type="primary" class="button" @click="fn">提交</van-button>
      </div>
    </section>
  </div>
</template>

<script>
import Myheader from './../../chw/header'
export default {
  data() {
    return {
      imgs: require("./img/picture-01.png"),
      text1: "启辰D50",
      text2: "SUV | 2.7自动 | 乘坐5人",
      //vant 匿名代码
      checked: false,
      icon: {
        active: require("./img/icon-1.png"),
        inactive: require("./img/02.png")
      },
      //评分
      value1: 1,
      value2: 1,
      value3: 1,
      value4: 1,
      //icon间隔
      ween: ".3rem",
      //评论拿到的数据,需要返回到后台
      comment: ""
    };
  },
  methods: {
   store(){
     this.$router.push('/StoreDetails');
   },
   fn(){
     this.$router.push('/evaluation');
   }
  },
  components: { Myheader,}
};
</script>

<style scoped lang="less">
header {
  width: 100%;
  height: 0.88rem;
}
section {
  width: 100%;
  font-size: 0;
  .list {
    width: 6.79rem;
    display: flex;
    margin: 0.4rem auto 0.67rem;
    justify-content: center;
    align-items: center;
    img {
      width: 2.22rem;
      height: 1.36rem;
      border-radius: 0.1rem;
      padding-right: 0.39rem;
      overflow: hidden;
    }
    .pic {
      flex: 1;
      p:first-of-type {
        font-size: 0.28rem;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: rgba(249, 246, 246, 1);
      }
      p:last-of-type {
        font-size: 0.3rem;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: rgba(153, 153, 153, 1);
      }
    }
  }
  .text {
    width: 6.79rem;
    height: 3.82rem;
    background: rgba(246, 246, 246, 1);
    border-radius: 0.15rem;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
    textarea {
      margin: 0;
      padding: 0;
      width: 6.79rem;
      height: 3.82rem;
      font-size: 0.3rem;
      text-indent: 0.25rem;
      color: #000;
    }
    textarea::-webkit-input-placeholder {
      text-indent: -0.25rem;
      text-align: center;
      padding-top: 0.2rem;
      font-size: 0.24rem;
    }
    .camera {
      position: absolute;
      left: 0.35rem;
      bottom: 0.1rem;
      .cam {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .icon {
          width: 0.8rem;
          height: 0.6rem;
        }
        p {
          font-size: 0.22rem;
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          color: rgba(153, 153, 153, 1);
        }
      }
    }
  }
  .name {
    width: 6.79rem;
    height: 0.4rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.24rem;
    .name_ {
      width: 1.2rem;
      font-size: 0.24rem;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(153, 153, 153, 1);
      display: flex;
      align-items: center;
      justify-content: space-around;
      .icon-name {
        width: 0.35rem;
        height: 0.35rem;
      }
    }
    p {
      font-size: 0.24rem;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(252, 249, 249, 1);
    }
  }
  aside {
    width: 6.79rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0.1rem auto;
    .ware {
      width: 6.79rem;
      display: flex;
      align-items: center;
      font-size: 0.28rem;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(253, 253, 253, 1);
      p {
        margin-right: 0.38rem;
      }
    }
  }
  .but {
    width: 6.9rem;
    height: 0.88rem;
    background: rgba(255, 198, 0, 1);
    border-radius: 0.44rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .button {
      flex: 1;
      width: 6.9rem;
      height: 0.88rem;
      background: none;
      border: none;
      outline: none;
      font-size: 0.36rem;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
    }
  }
}
</style>
