<template>
  <div class="year_sent">
    <div class="back_point">
      <div class="back_left">
        <span>取还城市</span>
        <input type="text" :value="$store.state.option" />
      </div>
      <div class="back_right">
        <span>取还点</span>
        <input type="text" value="正道中环百货自助点" />
      </div>
    </div>
    <div class="back_time">
      <div class="Ltime">
        <span class="Lyear">2019年</span>
        <span class="Lmonth">07月15日</span>
        <span class="Lweek">周一</span>
      </div>
      <div class="Rtime">
        <span class="Ryear">2020年</span>
        <span class="Rmonth">07月14日</span>
        <span class="Rweek">周二</span>
      </div>
    </div>
    <input type="button" value="立即选车" class="choice" />
    <div class="explain">
      <h4>年租说明</h4>
      <ul>
        <li>1、租期: 年租套餐租期可为365, 暂不支持续租, 如延长租期需重新下单;</li>
        <li>2、订单修改: 年租订单提交后咱不接受更改任何内容;</li>
        <li>3、异地还车: 年租订单暂不接受异地还车;</li>
        <li>4、预授权: 年租订单需刷取租车押金,具体咨询门店;</li>
        <li>5、支付方式: 可取车时一次性支付租金,也可选择分期支付;</li>
        <li>6、提前还车: 提前还车需支付违约金,详见取车时签订的合同规则;</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang='less'>
.back_point {
  display: flex;
  flex-direction: row;
  margin-top: 0.64rem;
  padding-bottom: 0.53rem;
  border-bottom: 1px solid #ffe8e8e8;
  .back_left {
    font-size: 0;
    display: flex;
    flex-direction: column;
    margin-left: 0.33rem;
    width: 0.96rem;
    // height: .63rem;
    span {
      font-size: 0.24rem;
      color: #999999;
    }
    input {
      border: none;
      font-size: 0.24rem;
      color: black;
    }
  }
  .back_right {
    font-size: 0;
    display: flex;
    flex-direction: column;
    margin-left: 3.08rem;
    width: 2.5rem;
    // height: .63rem;
    span {
      font-size: 0.24rem;
      color: #999999;
    }
    input {
      border: none;
      font-size: 0.24rem;
      color: black;
    }
  }
}
.back_time {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0.48rem;
  .Ltime {
    display: flex;
    flex-direction: column;
    margin-left: 0.33rem;
    .Lyear {
      color: black;
      font-size: 0.24rem;
    }
    .Lmonth {
      color: black;
      font-size: 0.24rem;
    }
    .Lweek {
      color: #999999;
      font-size: 0.24rem;
    }
  }
  .Rtime {
    display: flex;
    flex-direction: column;
    margin-right: 0.33rem;
    .Ryear {
      color: black;
      font-size: 0.24rem;
    }
    .Rmonth {
      color: black;
      font-size: 0.24rem;
    }
    .Rweek {
      color: #999999;
      font-size: 0.24rem;
    }
  }
}
.choice {
  width: 6.68rem;
  height: 0.89rem;
  background: rgba(255, 198, 0, 1);
  border-radius: 0.15rem;
  border: none;
  // color: #FF000000;
  font-size: 0.32rem;
  margin-left: 0.4rem;
  margin-bottom: 0.97rem;
}
.explain {
  width: 6.8rem;
  margin-left: .40rem;
  h4 {
    margin: 0;
    font-size: 0.28rem;
    color: rgba(51, 51, 51, 1);
    font-weight: 500;
  }
  ul {
    li {
      font-size: 0.24rem;
      font-weight: 500;
      color: rgba(153, 153, 153, 1);
      margin-top: .25rem;
    }
  }
}
</style>
