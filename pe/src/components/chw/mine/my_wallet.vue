
<template>
  <div class="my_wallet">
    <Myheader txt="我的钱包">
      <img src="./../images/2.png" slot="left-img" class="left-img" @click="back" alt="">
    </Myheader>
    <div class="wallet-ligo">
      <div>
        <div>
          <p>可用积分</p>
          <p>1000</p>
        </div>
      </div>
    </div>
    <div class='wallet-bi'>
      <h4>我的平驾币 2030枚</h4>
      <p>说明：</p>
      <ol>
        <li>1. 平驾币=1元</li>
        <li>2. 平驾币可用于抵充租车消费</li>
        <li>3. 平驾币不可提现</li>
      </ol>
       <h4>我的积分 1000积分</h4>
      <p class='jf'>说明：</p>
      <p class=jf>1积分=1元，每单最高可使积分冲抵40%租车费用</p>
    </div>
    <router-link to='/recharge'>
      <div class='cz_btn'>充值</div>
    </router-link>
  </div>
</template>

<script>
import Myheader from "./../header";
export default {
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.push('/mine');
    }
  },
  components: {
    Myheader
  }
};
</script>

<style scoped lang="less" >
.my_wallet {
  width: 100%;
  height: 100%;
  font-size: 0.2rem;
  background-color: #363b3e;
  overflow: hidden;
  .wallet-ligo {
    width: 6.85rem;
    height: 3.86rem;
    border-radius: .4rem;
    overflow: hidden;
    background: url("./img-mine/banner.png");
    margin: .28rem .31rem .2rem .31rem;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      background-color: #363b3e;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      div {
        width: 2.07rem;
        height: 2.07rem;
        border-radius: 50%;
        border: 5px solid #ffc600;
        color: #ffc600;
        font-size: 0.3rem;
        /* margin: 0.6rem 0; */
        p{
          line-height: .4rem;
          margin:.1rem 0;
        }
      }
    }
  }
  .wallet-bi{
   padding: 0 .3rem;
    h4{
      font-size:.35rem;
      color:#ffc600;
      font-weight: 300;
    }
    p,ol{
      color:#fff;
      font-size:.31rem;
      li{
        line-height: .7rem;
      }
    }
    .jf{
      color:#ccc;
      font-size:.28rem;
    }
  }
  .cz_btn{
    width:6.9rem;
    height:.88rem;
    margin:.35rem .3rem;
    border-radius: .44rem;
    background-color:#ffc600;
    text-align: center;
    font-size:.4rem;
    line-height: .88rem;
    color:#000;
  }
}
</style>
