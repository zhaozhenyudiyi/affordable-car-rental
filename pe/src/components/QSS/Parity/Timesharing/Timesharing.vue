<template>
  <div class="tis">
    <ul class="Time_list">
      <li v-for="(item,index) in TimeCar_list" :key="index">
        <div class="top">
          <div class="Tleft">
            <p class="star_area">{{ item.star_area }}</p>
            <p class="star_time">{{ item.star_time }}</p>
          </div>
          <div class="Tcenter">
            <p class="Tsale">{{ item.Tsale }}</p>
            <img :src="item.Timg" />
            <p class="limit">{{ item.limit }}</p>
          </div>
          <div class="Tright">
            <p class="end_area">{{ item.end_area }}</p>
            <p class="end_time">{{ item.end_time }}</p>
          </div>
        </div>
        <div class="bottom">
            <img :src="item.B_img" class="Bleft"/>
            <span class="Bright">{{ item.Bright }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      TimeCar_list: [
        {
          star_area: "厦门",
          star_time: "07-13周六",
          Tsale: 100,
          Timg: require("./img/形状 4.png"),
          limit: "限租一天",
          end_area: "漳州",
          end_time: "07-16周二",
          B_img: require("./img/图层 2.png"),
          Bright: "大众朗逸"
        },
        {
          star_area: "杭州",
          star_time: "07-11周四",
          Tsale: 100,
          Timg: require("./img/形状 4.png"),
          limit: "限租一天",
          end_area: "苏州",
          end_time: "07-11周四",
          B_img: require("./img/图层 3.png"),
          Bright: "大众朗逸"
        },
        {
          star_area: "郑州",
          star_time: "07-09周一",
          Tsale: 100,
          Timg: require("./img/形状 4.png"),
          limit: "限租一天",
          end_area: "上海",
          end_time: "07-11周四",
          B_img: require("./img/图层 4.png"),
          Bright: "宝马x5"
        },
        {
          star_area: "郑州",
          star_time: "07-09周一",
          Tsale: 100,
          Timg: require("./img/形状 4.png"),
          limit: "限租一天",
          end_area: "上海",
          end_time: "07-11周四",
          B_img: require("./img/图层 5.png"),
          Bright: "别克GL8"
        },
        {
          star_area: "北京",
          star_time: "07-13周六",
          Tsale: 100,
          Timg: require("./img/形状 4.png"),
          limit: "限租一天",
          end_area: "上海",
          end_time: "07-11周四",
          B_img: require("./img/图层 2.png"),
          Bright: "别克GL8"
        }
      ]
    };
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang='less'>
.tis{
  flex:1;
  overflow-y: auto;
}
.Time_list {
  padding-left: 0.4rem;
  li {
    background: #efefef;
    width: 6.68rem;
    height: 2.36rem;
    padding-bottom: 0.1rem;
    padding-top: 0.1rem;
    border-radius: 0.15rem;
    margin-bottom: .24rem;
    p {
      margin: 0;
    }
    .top {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-top: .28rem;
      .Tleft {
        // font-size: 0;
        margin-left: 0.3rem;
        text-align: center;
        .star_area {
          font-size: 0.32rem;
          color: #333333;
          margin-bottom: .29rem;
        }
        .star_time {
          font-size: 0.22rem;
          color: #999999;
        }
      }
      .Tcenter {
        font-size: 0;
        text-align: center;
        // margin-top: 0.2rem;
        .Tsale {
          font-size: 0.48rem;
          color: #fcc600;
        }
        img {
          width: 1.99rem;
          height: 0.12rem;
        }
        .limit {
          font-size: 0.22rem;
          color: #999999;
        }
      }
      .Tright {
        text-align: center;
        margin-right: 0.3rem;
        .end_area {
          font-size: 0.32rem;
          color: #333333;
          margin-bottom: .29rem;
        }
        .end_time {
          font-size: 0.22rem;
          color: #999999;
        }
      }
    }
    .bottom {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-top: .44rem;
      .Bleft {
        margin-left: 0.3rem;
          width: 1.4rem;
          height: 0.6rem;
      }
      .Bright {
          margin-right: 0.3rem;
          color: #333333;
          font-size: 0.28rem;
      }
    }
  }
}
</style>
