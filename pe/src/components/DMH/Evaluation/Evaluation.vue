<template>
  <section>
    <header>
       <Myheader txt="评价列表">
        <img src="./../../chw/images/2.png" slot="left-img" class="left-img"  @click="store"  />
      </Myheader>
    </header>
    <div class="evalu">
      <div class="tion">
        <p :class="cl?'clor':''" @click="cl=!cl">
          全部
          <span>（{{ a }}）</span>
        </p>
        <p :class="cl?'':'clor'" @click="cl=!cl">
          晒图
          <span>（{{ b }}）</span>
        </p>
      </div>
      <div class="more">
        <p>更多</p>
        <p>></p>
      </div>
    </div>
    <aside>
      <div class="tator">
        <div class="tator_">
          <img :src="portrait" alt />
          <div class="ta_but">
            <p>
              {{ number }}
              <span>
                <img :src="card" alt />
              </span>
            </p>
            <p class="p1" v-text="time"></p>
          </div>
          <van-rate v-model="value" readonly size="12" />
        </div>
        <div class="tator_text">
          <p v-text="text1"></p>
        </div>
        <div class="business">
          <p v-text="text2"></p>
        </div>
      </div>
    </aside>
  </section>
</template>

<script>
import Myheader from './../../chw/header'
export default {
  data() {
    return {
      cl: true,
      //数值
      a:10,
      b:6,
      //评论详情数据
      value: 4,
      portrait: require("./img/picture-01@2x.png"),
      number: "138****5511",
      card: require("./img/icon2.png"),
      time: "2018年6月23日 09:11",
      text1:
        "店员小姐姐服务很热情，人与很漂亮，有亲和力,车很干净，很新的车，动力十足，平台服务满分！",
      text2: "商家回复：感谢您对我们的支持，祝您用车愉快哟！"
    };
  },
  methods: {
    store(){
      this.$router.push('/StoreDetails');
    }
  },
  components: {Myheader,}
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
  .evalu {
    width: 6.79rem;
    margin: 0 auto;
    font-size: 0.3rem;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .clor {
      color: #ffc600;
    }
    .tion {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.3rem;
      p:first-of-type {
        margin-right: 0.34rem;
      }
      span {
        margin: 0 0.1rem;
      }
    }
    .more {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.3rem;
      p:last-of-type {
        font-family: 楷体;
        margin-left: 0.14rem;
      }
    }
  }
  aside {
    width: 6.79rem;
    margin: 0 auto;
    .tator {
      width: 100%;
      .tator_ {
        height: 0.7rem;
        display: flex;
        margin-top: 0.35rem;
        img {
          width: 0.7rem;
          height: 0.7rem;
          margin-right: 0.35rem;
        }
        .ta_but {
          flex: 1;
          display: flex;
          flex-direction: column;
          font-size: 0.24rem;
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          color: rgba(153, 153, 153, 1);
          p {
            margin: 0.07rem 0;
            img {
              width: 0.55rem;
              height: 0.24rem;
              margin-left: 0.36rem;
            }
          }
          .p1 {
            color: rgba(102, 102, 102, 1);
          }
        }
      }
      .business {
        font-size: 0.24rem;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: rgba(153, 153, 153, 1);
        margin-bottom: 0.76rem;
      }
      .tator_text {
        font-size: 0.24rem;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: rgba(253, 252, 252, 1);
        margin: 0.41rem 0 0.33rem;
      }
    }
  }
}
</style>
