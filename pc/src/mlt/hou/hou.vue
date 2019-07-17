<template>
  <div>
<div class="bit">
      <div class="header">
      </div>
      <div class="center">
      <div class="left">
      </div>
      <div class="right">
          <div class="ipt">
          <input type="text">
          <button>查询订单</button>
          </div>
          <div class="top_">
          <h2 class="h2">订单信息</h2>
          <div class="ct_">
          <div class="pt">
              <p>客户姓名：{{ rr.name }}</p>
              <p>联系方式：{{rr.phone}}</p>
              <p>证件类型：</p>
              <p>证件号码：</p>
              <p>日租价：</p>
              <p>定金：￥</p>
              <p>手续费：￥</p>
              <p>车辆损失费：</p>
              <div class="tit">
              <span>合计:</span><span></span>
              <del></del>
              </div>
              <p>使用平价币</p>
          </div>
           <div class="py">
              <p>车辆型号：{{rr.carType}}</p>
              <p>车牌号码：{{rr.carPhone}}</p>
              <p>租用方式：{{rr.LeasinMode}}</p>
              <p>车型：{{rr.carType}}</p>
              <p>取车时间：{{rr.pCarTime}}</p>
              <p>还车时间：{{rr.returnTime}}</p>
              <p>实际还车时间：</p>
              <p>车辆损失说明：</p>
          </div>

          </div>

          </div>
          <div class="bt">
          <button class="btn" v-for="(item,index) in lt" :class="{at:index==ni}"
          @click="f5(index)" >
              {{item.rt}}</button>
              </div>
      </div>
      </div>
</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        lt:[
            {rt:"完成"},
            {rt:"删除"}
        ],
        ni:0,
        li:[{ty:"客户姓名"}],
        obj:this.$route.query.id,//传进的索引值
        ot:this.$route.query.p,//获取的数据
        rr:[]
    }
  },
  methods: {
   f5(index){
     this.ni=index;
   },

  },
  mounted(){
      this.rr = this.ot[this.obj];
  },
  components: {

  },
  created(){
     
  }
}
</script>

<style scoped lang="less">
.bt button:nth-child(2){
  margin-left: 30px;
}
.at{
    background: #FFC600;
}
.btn{
    width: 114px;
    height: 43px;
    border-radius: 10px;
    color:white;
    font-size: 24px;
    margin-top: 27px;
}
.bit{
//     .header{
//     //  width: 100%;
//     //  height: 100px;
//     //  background: #293345;
//  }
 .center{
     display: flex;
 }
//  .left{
//     width: 210px;
//     height:900px;
//     background: yellow;
//  }
 .right{
  margin-top: 50px;
  margin-left: 50px;
 }
 .ipt{
  display: flex;
  input{
    width:682px;
    height: 62px;
    border: 1px #cccccc solid;
    border-radius: 10px;
  }
  button{
    width: 157px;
    height: 62px;
    background: #FFC600;
    border-radius: 10px;
    font-size: 24px;
    color: white;
    margin-left: 36px;
  }
  }
  .h2{
      font-weight: 900;
      font-size: 20px;
  }
  .py{
      margin-right: 100px;
  }
  .ct_{
    display: flex;
    margin-top: 15px;
    justify-content: space-between;
    p{
        margin-top: 12px;
    }
  }
  .top_{
      margin-top: 100px;
  }
  .tit{
      margin-top: 45px;
  }
 }
</style>

