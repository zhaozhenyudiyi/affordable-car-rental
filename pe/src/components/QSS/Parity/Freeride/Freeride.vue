<template>
  <div class="map">
    <baidu-map
      :center="center"
      :zoom="zoom"
      @ready="handler"
      class="baidu-map"
      @click="getClickInfo"
    >
      <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
      <bm-geolocation anchor="BMAP_ANCHOR_TOP_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
      <bm-marker
        :position="{lng: 113.65, lat: 34.78}"
        :dragging="true"
        animation="BMAP_ANIMATION_BOUNCE"
      >
      </bm-marker>
      <bm-marker
        :position="{lng: 113.6, lat: 34.75}"
        :dragging="true"
        animation="BMAP_ANIMATION_BOUNCE"
      >
      </bm-marker>
      <bm-marker
        :position="{lng: 113.65, lat: 34.73}"
        :dragging="true"
        animation="BMAP_ANIMATION_BOUNCE"
      >
      </bm-marker>
      <bm-marker
        :position="{lng: 113.28, lat: 34.82}"
        :dragging="true"
        animation="BMAP_ANIMATION_BOUNCE"
      >
      </bm-marker>
      <bm-marker
        :position="{lng: 113.6, lat: 34.87}"
        :dragging="true"
        animation="BMAP_ANIMATION_BOUNCE"
      >
      </bm-marker>
      <bm-marker
        :position="{lng: 113.67, lat: 34.75}"
        :dragging="true"
        animation="BMAP_ANIMATION_BOUNCE"
      >
      </bm-marker>
    </baidu-map>
    <input type="button" value="我要租车" v-if="isShow" @click="isShow = !isShow" />
    <div class="car_info" v-else @click="info">
      <div class="tit">
        <h3>{{ $store.state.option }}国际自助点</h3>
        <img src="./img/icon.png" @click="isShow = true" />
      </div>
      <p class="dizhi">{{ $store.state.option }}市花园路103号</p>
      <div class="bottom">
        <img src="./img/pic2@2x.png" />
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
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3,
      isShow: true,
      // getT:'',
    };
  },
  mounted() {
    //this.enableScrollTheelZoom(true);
   
  },
  methods: {
    handler({ BMap, map }) {
      // console.log(BMap, map);
      this.center.lng = 113.65;
      this.center.lat = 34.78;
      this.zoom = 15;
    },
    getClickInfo(e) {
      // console.log(e.point.lng);
      // console.log(e.point.lat);
      this.center.lng = e.point.lng;
      this.center.lat = e.point.lat;
    },
    info(){
      this.$router.push('/shop')
    }
  }
};
</script>
<style scoped lang='less'>
.BMapLabel{
  display: none;
}
.map {
  // display: flex;
  // flex-direction: column;
  // height: 100%;
  flex:1;
  .baidu-map{
  display: flex;
  flex-direction: column;
  height: 100%;
  }
  input {
    // display: flex;
    // flex-direction: column;
    // height: 100%;
    width: 100%;
    height: 0.89rem;
    background: rgba(255, 198, 0, 1);
    border-radius: 0.15rem;
    position: fixed;
    bottom: 0;
    border: none;
    color: #333333;
    font-size: 0.32rem;
  }
  .car_info {
    font-size: 0;
    padding: 0.16rem;
    width: 7.2rem;
    height: 3.27rem;
    background: white;
    box-sizing: border-box;
    border-radius: 0.05rem;
    margin-left: 0.14rem;
    position: fixed;
    bottom: 0;
    .tit {
      display: flex;
      flex-direction: row;
      margin: 0;
      align-items: center;
      font-size: 0;
      height: 0.3rem;
      margin-top: 0.06rem;
      justify-content: space-between;
      h3 {
        font-size: 0.28rem;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
      }
      img {
        width: 0.44rem;
        height: 0.44rem;
      }
    }
    .dizhi {
      font-size: 0.24rem;
      font-weight: 500;
      color: rgba(153, 153, 153, 1);
      margin: 0;
      margin-top: 0.14rem;
    }
    .bottom {
      display: flex;
      flex-direction: row;
      margin-top: 0.4rem;
      img {
        width: 3rem;
      }
      .right {
        display: flex;
        flex-direction: column;
        margin-left: 0.2rem;
        p {
          margin: 0;
        }
        .car_num {
          font-size: 0.28rem;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
          margin-top: 0.2rem;
        }
        .infos {
          display: flex;
          flex-direction: row;
          height: 0.33rem;
          margin: 0.15rem 0 0.2rem 0;
          span {
            display: block;
            border: 1px solid #cccccc;
            height: 100%;
            font-size: 0.22rem;
            color: #666666;
            border-radius: 0.05rem;
          }
        }
        .jiage {
          font-size: 0.26rem;
          font-weight: 500;
          color: rgba(102, 102, 102, 1);
        }
      }
    }
  }
}
.baidu-map {
  width: 100%;
  height: 11.25rem;
}
</style>
