
<template>
  <div id="mine">
    <div class="header">
      <img src="./img-mine/picture-01.png" alt />
      <p>158****1198</p>
      <span>已认证</span>
      <p>生活不止眼前的苟且</p>
    </div>
    <ul class="property">
      <li v-for="(item,index) in list1" :key="index">
        <p>{{item.money}}</p>
        <p>{{item.address}}</p>
      </li>
    </ul>
    <div class="mine-list">
      <ul>
        <li v-for="(item, index) in list2" :key="index">
          <router-link :to="item.to">
            <!-- <img :src="item.url" alt /> -->
            <img :src="item.url" alt />
            <p>{{item.txt}}</p>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="attention">
      <router-link to="/mine">
        <img src="./img-mine/weixin-08.png" alt />
        <span>关注公众号</span>
      </router-link>
    </div>
  </div>
</template>

<script>
// import Mineto from './mine_to'
export default {
  data() {
    return {
      list1: [
        {
          money: "0元",
          address: "账户余额"
        },
        {
          money: "0元",
          address: "平驾币"
        },
        {
          money: "2张",
          address: "优惠券"
        }
      ],
      list2: [
        {
          to: "/my_wallet",
          url: "../../../static/img-mine/icon-01.png",
          txt: "我的钱包"
        },
        {
          to: "/my_order",
          url: "../../../static/img-mine/icon-02.png",
          txt: "我的订单"
        },
        {
          to: "/mine",
          url: "../../../static/img-mine/icon-03.png",
          txt: "用户反馈"
        },
        {
          to: "/mine",
          url: "../../../static/img-mine/icon-04.png",
          txt: "客户中心"
        },
        {
          to: "/mine",
          url: "../../../static/img-mine/icon-05.png",
          txt: "我的收藏"
        },
        {
          to: "/mine",
          url: "../../../static/img-mine/icon-06.png",
          txt: "企业服务"
        },
        {
          to: "/mine",
          url: "../../../static/img-mine/icon-07.png",
          txt: "设置"
        }
      ]
    };
  },
  methods: {},
  components: {
    // Mineto,
  }
};
</script>

<style scoped lang=less>
#mine {
  width: 100%;
  height: 100%;
  color: #ccc;
  background-color: #353d3f;
  position: relative;
  .header {
    width: 100%;
    height: 4.23rem;
    background: url("./img-mine/banner-01.png");
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.26rem;
    color: #fff;
    border: 1px dashed #ccc;
    box-sizing: border-box;
    img {
      width:1.2rem;
      height:1.2rem;
      margin-top: 0.63rem;
    }
    span {
      display: block;
      background-color: #ffc600;
      font-size: 0.2rem;
      padding: 0.05rem 0.2rem;
      border-radius: 0.15rem;
    }
    p {
      font-size: 0.26rem;
    }
  }
  .property {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    padding: 0;
    li {
      list-style-type: none;
      flex: 1;
      font-size: 0.23rem;
      text-align: center;
    }
  }
  .mine-list {
    font-size: 0.29rem;
    margin-top:.2rem;
    ul {
      list-style: none;
      margin-left:.37rem;
      li {
        a {
          height: 0.92rem;
          display: flex;
          align-items: center;
          text-decoration: none;
          color: #ccc;
          img {
            width: 0.44rem;
            height: 0.44rem;
            opacity: 1;
            margin-right: 0.3rem;
            color:#e1b608
          }
        }
      }
    }
  }
  .attention {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom:.37rem;
    left:50%;
    transform: translateX(-50%);
    a {
      display: flex;
      align-items: center;
      font-size: 0.27rem;
      color: #ccc;
      text-decoration: none;
      border: 1px solid #e1b608;
      border-radius: 0.3rem;
      padding: 0.05rem 0.2rem;
      img{
        width:.3rem;
        height:.3rem;
      }
      span {
        margin-left: 0.1rem;
      }
    }
  }
}
</style>
