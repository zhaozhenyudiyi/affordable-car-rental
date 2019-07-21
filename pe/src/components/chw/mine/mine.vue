
<template>
  <div id="mine">
    <div class="header">
      <img src="./img-mine/picture-01.png" alt />
      <p>158****1198</p>
      <span>已认证</span>
      <p>生活不止眼前的苟且</p>
    </div>
    <div @click='return_icon'><svg t="1563620333488" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4621" width="200" height="200"><path d="M630.1 552.5c9.4 5.4 9.4 19 0 24.4l-247 142.5L136.2 862c-9.4 5.4-21.1-1.4-21.1-12.2V279.5c0-10.8 11.7-17.6 21.1-12.2l246.9 142.6 247 142.6z" fill="#ffffff" p-id="4622"></path><path d="M657.9 466.5L402.7 319.1 147.6 171.8c-36.1-20.8-81.2 5.2-81.2 46.9V808c0 41.7 45.1 67.7 81.2 46.9l255.2-147.3L658 560.3c36-20.9 36-73-0.1-93.8z m-27.8 59l-247 142.6-246.9 142.6c-9.4 5.4-21.1-1.4-21.1-12.2V228.2c0-10.8 11.7-17.6 21.1-12.2l246.9 142.6L630 501.2c9.5 5.4 9.5 18.9 0.1 24.3z" fill="#ffffff" p-id="4623"></path><path d="M898.3 555.8c10.6 6.1 10.6 21.4 0 27.5L619.8 744.1 341.3 904.8c-10.6 6.1-23.8-1.5-23.8-13.7V248c0-12.2 13.2-19.9 23.8-13.7L619.8 395l278.5 160.8z" fill="#ffffff" p-id="4624"></path><path d="M929.6 460.5L354.2 128.2c-40.7-23.5-91.6 5.9-91.6 52.9v664.5c0 47 50.9 76.4 91.6 52.9l575.5-332.2c40.6-23.6 40.6-82.3-0.1-105.8z m-31.3 66.6L619.8 687.9 341.3 848.7c-10.6 6.1-23.8-1.5-23.8-13.7V191.8c0-12.2 13.2-19.9 23.8-13.7l278.5 160.8 278.5 160.8c10.6 6 10.6 21.3 0 27.4z" fill="#ffffff" p-id="4625"></path></svg>
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
          url: "../../../static/img-mine/ICON-1.png",
          txt: "我的钱包"
        },
        {
          to: "/my_order",
          url: "../../../static/img-mine/ICON-2.png",
          txt: "我的订单"
        },
        {
          to: "/mine",
          url: "../../../static/img-mine/ICON-3.png",
          txt: "用户反馈"
        },
        {
          to: "/mine",
          url: "../../../static/img-mine/ICON-4.png",
          txt: "客户中心"
        },
        {
          to: "/mine",
          url: "../../../static/img-mine/ICON-5.png",
          txt: "我的收藏"
        },
        {
          to: "/mine",
          url: "../../../static/img-mine/ICON-6.png",
          txt: "企业服务"
        },
        {
          to: "/mine",
          url: "../../../static/img-mine/ICON-7.png",
          txt: "设置"
        }
      ]
    };
  },
  methods: {
    return_icon(){
      this.$router.push("/carDetails")
    }
  },
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
  .icon{
    width:.44rem;
    height:.44rem;
    position:fixed;
    top:.2rem;
    right:.3rem;
    color:#ccc;
  }
  .header {
    width: 100%;
    height: 4.23rem;
    background: url("./img-mine/banner-01.png") no-repeat;
    background-size: cover;
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
          height: 0.85rem;
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
    margin:.35rem auto;
    /* position:absolute;
    bottom:.37rem;
    left:50%;
    transform: translateX(-50%); */
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
