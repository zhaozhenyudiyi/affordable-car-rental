
<template>
  <ul class="car_order">
    <li v-for="(item,index) in list" :key="index">
      <div class="order_num">
        <p>订单编号:{{item.serialNumber}}</p>
        <p>{{item.everconfirmed}}</p>
      </div>
      <div class="car_information">
        <img :src="item.car_img" alt />
        <div>
          <p>{{item.car_model}}</p>
          <div>
            <img src="./images/icon-01.png" alt />
            <p>取车时间:{{item.get_time}}</p>
          </div>
          <div>
            <img src="./images/icon-02.png" alt />
            <p>还车时间:{{item.repay_time}}</p>
          </div>
        </div>
      </div>
      <div class="order_money">
        订单金额:
        <span>{{item.money}}</span>元
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  props: ["bool"],
  mounted() {
    this.axios
      .get("../../static/js/order.json")
      .then(res => {
        console.log(res.data);
        this.list = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang="less" >
.car_order {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.2rem;
  font-size: 0.26rem;
  color: #fff;
  li:first-of-type .order_num p:last-of-type {
    border: 2px solid #ffc600 ;
    color: #ffc600;
  }
  li {
    margin: 0.5rem 0;
    .order_num {
      display: flex;
      justify-content: space-between;
      p:last-of-type {
        padding: 0.05rem 0.2rem;
        border-radius: 0.2rem;
        border: 2px solid #ccc;
        color: #ccc;
      }
      .car_order li:first-of-type .order_num p:last-of-type {
        border: 2px solid #ffc600 !important;
        color: #ffc600;
        /* !important; */
      }
    }
    .car_information {
      display: flex;
      align-items: center;
      margin-top: 0.3rem;
      img {
        width: 2.22rem;
        height: 1.36rem;
      }
      div {
        margin-left: 0.3rem;
        p {
          line-height: 0;
        }
        div {
          display: flex;
          align-items: center;
          margin: 0.1rem 0;
          /* line-height: .5rem; */
          color: #ccc;
          font-size: 0.23rem;
          img {
            width: 0.44rem;
            height: 0.44rem;
            margin-right: 0.3rem;
          }
        }
      }
    }
    .order_money {
      text-align: right;
      margin-top: 0.5rem;
      color: #ccc;
      font-size: 0.23rem;
      span {
        color: #ffc600;
      }
    }
  }
}
</style>
