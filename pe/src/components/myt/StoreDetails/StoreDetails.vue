<template>
  <div>
    <div class="kong">
       <Myheader txt="门店详情">
        <img src="./../../chw/images/2.png" slot="left-img" class="left-img"  @click="store"  />
      </Myheader>
    </div>
    <div class="big">
      <div class="banner">
        <img src="./img/图层 516.png" />
      </div>
    </div>

    <div class="top">
      <div class="xia">
        <p>动物园自助点</p>
        <div class="star">
          <ul>
            <li>
              <img src="./img/icon2.png" />
            </li>
            <li>
              <img src="./img/icon2.png" />
            </li>
            <li>
              <img src="./img/icon2.png" />
            </li>
            <li>
              <img src="./img/icon2.png" />
            </li>
            <li>
              <img src="./img/icon2.png" />
            </li>
          </ul>
          <span style="margin-right: 3.20rem; margin-left:.16rem;">5.0</span>

          <div class="ping">
            <span>{{evaluate}}人评价</span>
            <img src="./img/icon5.png" />
          </div>
        </div>
        <div class="lit">
          <ul class="ht">
            <li>
              <img src="./img/icon3.png" />
              <span class="let">营业中</span>
              <span class="rit">9:00-19:00</span>
            </li>
            <li>
              <img src="./img/矢量智能对象.png" />
              <span style=" margin-left:.16rem">{{flow}}</span>
              <img style=" margin-left:.7rem" src="./img/形状 16.png" />
              <span style=" margin-left:.16rem">{{phone}}</span>
            </li>
          </ul>
        </div>
        <div class="jing">
          <div class="tit" @click="tit">
            <span>精品评价</span>
            <a href="#">
              更多
              <img src="./img/icon5.png" />
            </a>
          </div>
          <ul class="time" v-for="(item,index) in transfer " :key="index">
            <li>
              <div class="bao">
                <span>{{item.tlt}}</span>
                <span></span>
                <span style="margin-left: 1.40rem;">{{item.time}}</span>
                <ul style="    float: right;
                  margin-top: -0.33rem;
                  margin-left: .90rem">
                  <li v-for="(ite,ind) in image" :key="ind">
                    <img :src="ite.img" />
                  </li>
                </ul>
              </div>
              <p>
                {{item.p}}
              </p>
            </li>
          </ul>
    
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Myheader from './../../chw/header'
export default {
  data() {
    return {
    flow:"郑州市花园路103号",
    evaluate:"1126",
    phone:13185854476,
    transfer:[
      {tlt:15639619820,
       time:"07-06  10:30",
       p:'这次使用体验非常好，店里的客服服务也非常到位，有因为 是第一次使用车，有很多不懂得地方都是客服小姐姐一步步 的指导的。价位也非常划算，总之本次服务非常满意，五星好评'
      },
      {tlt:15639619820,
       time:"07-06  10:30",
       p:'这次使用体验非常好，店里的客服服务也非常到位，有因为 是第一次使用车，有很多不懂得地方都是客服小姐姐一步步 的指导的。价位也非常划算，总之本次服务非常满意，五星好评'
      }
      ],
      image:[
        { img:require("./img/icon2.png")},
        { img:require("./img/icon2.png")},
        { img:require("./img/icon2.png")},
        { img:require("./img/icon2.png")},
        { img:require("./img/icon2.png")},
      ]
    }
  },
  methods: {
    store(){
      this.$router.push('/shop');
    },
    tit(){
      this.$router.push('/evaluation')
    }
  },
  components: {
    Myheader,
  }
};
</script>

<style scoped lang='less'>
.kong {
  width: 100%;
  height: 0.88rem;
}
.bao {
  width: 100%;
}
.big {
  background: #303133;
  color: #fff;
  width: 100%;
  height: 4.8rem;
  .header {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // padding-top: .6rem;

    img {
      width: 0.43rem;
      height: 0.43rem;
      margin-bottom: 0.18rem;
    }
    p {
      font-size: 0.36rem;
    }
  }
  .banner {
    width: 100%;
    height: 3.6rem;
    margin-top: 0.3rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.top {
  width: 100%;
  background: #384043;
  margin-top: -2.13rem;
  .xia {
    width: 95%;
    margin: -1.62rem auto;
    color: white;
    overflow: hidden;
    .star {
      font-size: 0.32rem;
      display: flex;
      // align-items: center;
      // justify-content: space-between;
      // border-bottom: 1px #ccc solid;
      span {
        font-size: 0.28rem;
        // float: left;
      }
    }
    p {
      font-size: 0.32rem;
      padding-top: 0.9rem;
    }
    ul li {
      float: left;
      img {
        width: 0.26rem;
        height: 0.25rem;
      }
    }
  }
  .ping {
    display: flex;
    align-items: center;
    img {
      width: 0.43rem;
      height: 0.43rem;
    }
  }
  .lit {
    width: 100%;
    height: 1.75rem;
  }
  .ht {
    li {
      width: 100%;
      height: 0.9rem;
      font-size: 0.28rem;
      display: flex;
      align-items: center;
      border-bottom: 1px #ccc solid;
      img {
        width: 0.3rem;
        height: 0.3rem;
      }
      .let {
        margin-left: 0.16rem;
      }
      .rit {
        margin-left: 0.66rem;
      }
    }
  }
  .jing {
    width: 100%;
    margin-top: 0.46rem;
    .tit {
      font-size: 0.32rem;
      width: 100%;
      height: 0.45rem;
      span {
        float: left;
      }
      a {
        display: inline-block;
        float: right;
        color: white;
        font-size: 0.28rem;
        img {
          width: 0.24rem;
          height: 0.24rem;
          float: right;
          margin-top: 0.1rem;
        }
      }
    }

    .time li {
      padding-top: 0.36rem;
      font-size: 0.28rem;
      p {
        font-size: 0.26rem;
        padding-top: 0.06rem;
      }
    }
  }
}
</style>
