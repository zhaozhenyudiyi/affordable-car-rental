<template>
  <div class="map">
    <baidu-map :center="center" :zoom="zoom" @ready="handler" class="baidu-map" @click="getClickInfo">
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
    </baidu-map>
      <input type="button" value="我要租车" v-if="isShow" @click="isShow = !isShow">
      <div class="car_info" v-else>
          <div class="tit">
            <h3>郑州动物园自助点</h3>
            <img src="./img/icon.png" @click="isShow = true">
          </div>
          <p class="dizhi">郑州市花园路103号（郑州市动物园对面路西地面停车场）</p>
          <div class="bottom">
             <img src="./img/pic2@2x.png">
             <div class="right">
               <p class="car_num">豫A3T6Z3</p>
               <p class="infos">
                 <span>金色</span>
                 <span style="margin-left:.14rem">SUV5座</span>
                 <span style="margin-left:.17rem">油量89%</span>
               </p>
               <p class="jiage">0.19元/分钟+0.99元/公里</p>
             </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3,
      isShow:true
    }
  },
  mounted() {
    //this.enableScrollTheelZoom(true);
  },
  methods: {
    handler({BMap,map}) {
            // console.log(BMap, map);
            this.center.lng = 113.62;
            this.center.lat = 34.75;
            this.zoom = 15;
          },
          getClickInfo(e){
            // console.log(e.point.lng);
            // console.log(e.point.lat);
            this.center.lng = e.point.lng;
            this.center.lat = e.point.lat;
          }
  }
}
</script>
<style scoped lang='less'>
  .map{
  input{
    width: 100%;
    height: .89rem;
    background:rgba(255,198,0,1);
    border-radius:.15rem;
    position: fixed;
    bottom: 0;
    border: none;
    color: #333333;
    font-size: .32rem;
  }
  .car_info{
    font-size: 0;
    padding: .16rem;
    width: 7.20rem;
    height: 3.27rem;
    background: white;
    box-sizing: border-box;
    border-radius: .05rem;
    margin-left: .14rem;
    position: fixed;
    bottom: 0;
    .tit{
      display: flex;
      flex-direction: row;
      margin:0;
      align-items: center;
      font-size: 0;
      height: .30rem;
      margin-top: .06rem;
      justify-content: space-between;
      h3{
        font-size: .28rem;
        font-weight:500;
        color:rgba(51,51,51,1);
      }
      img{
        width: .44rem;
        height: .44rem;
      }
    }
    .dizhi{
      font-size:.24rem;
      font-weight:500;
      color:rgba(153,153,153,1);
      margin: 0;
      margin-top: .14rem;
    }
    .bottom{
       display: flex;
      flex-direction: row;
      margin-top: .4rem;
      img{
        width: 3rem;
      }
      .right{
        display: flex;
        flex-direction: column;
        margin-left: .20rem;
        p{
          margin: 0;
        }
        .car_num{
          font-size: .28rem;
          font-weight:500;
          color:rgba(51,51,51,1);
          margin-top: .20rem;
        }
        .infos{
          display: flex;
          flex-direction: row;
          height: .33rem;
          margin: .15rem 0 .20rem 0;
          span{
            display: block;
            border: 1px solid #cccccc;
            height: 100%;
            font-size: .22rem;
            color: #666666;
            border-radius: .05rem;
          }
        }
        .jiage{
          font-size:.26rem;
          font-weight:500;
          color:rgba(102,102,102,1);
        }
      }
    }
  }
}
  .baidu-map{
    width: 100%;
    height: 11.25rem;
  }
</style>
