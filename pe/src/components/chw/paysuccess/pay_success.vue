
<template>
  <div class="paysuccess">
    <Myheader txt="支付成功">
      <span slot="left-img" class="left-img" @click="back">＜</span>
    </Myheader>
    <div class="pay_img"></div>
    <div class="pay_num">
      <p>订单号:  {{list.order_number}}已完成</p>
      <p>请按时到店取车</p>
    </div>
    <div class="pay_information">
      <div>
        <img src="./img/icon-01.png" alt />
        <span>  {{list.location}}</span>
      </div>
      <div>
        <img src="./img/icon-02.png" alt />
        <span>  {{list.telephone}}</span>
      </div>
    </div>
    <router-link to='/mine' class="backfirst">
    <div >回到首页</div>
    </router-link>
  </div>
</template>

<script>
import Myheader from "../header";
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.axios
      .get("../../static/js/paysuccess.json")
      .then(res => {
        console.log(res.data);
        this.list = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    back() {
      this.$router.back();
    },
    background(){
     
    }
  },
  components: {
    Myheader
  }
};
</script>

<style scoped lang=less>
.paysuccess {
  width: 100%;
  height: 100%;
  background-color: #363b3e;
  font-size: 0.28rem;
  .pay_img {
    width: 6.81rem;
    height: 3.82rem;
    background: url("./img/picture-01.png") no-repeat;
    background-size: cover;
    margin: 1.28rem 0.34rem 0.2rem 0.34rem;
  }
  .pay_num {
    text-align: center;
    color:#ccc;
  }
  .pay_information {
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      color:#999;
      padding:.2rem 0;
      img{
        margin-right:.2rem;
      }
    }
  }
  .backfirst {
   div{
      width:6.9rem;
    height:.88rem;
    border-radius: .44rem;
    text-align: center;
    line-height: .88rem;
    font-size:.34rem;
    background-color: #ffc600;   
    margin:1.38rem auto;
   };
  }
}
</style>
