<template>
  <div>
    <div class="kong">
      <Myheader txt="车辆类型">
        <img src="./../../chw/images/2.png" slot="left-img" class="left-img" @click="back" alt />
      </Myheader>
    </div>
    <div class="big">
      <div class="price">
        <ul>
          <li v-for="(item,ind) in prt" @click="dian(ind)" :key="ind">
            <span :class="{ac:ind == numbe}">{{ item.title }}</span>
            <img src="./img/形状 626@2x.png" v-show="ind == numbe?true:false" />
            <img src="./img/形状 626 拷贝@2x.png" v-show="ind == numbe?false:true" />
          </li>
        </ul>
      </div>
      <div class="sort">
        <ul class="noh">
          <li
            v-for="(item,index) in list"
            :key="index"
            @click="tab(index)"
            :class="{active:index == num}"
          >{{ item.type }}</li>
        </ul>
        <div class="photo">
          <ul>
            <li v-for="(item,inde) in detai" :key="inde">
              <img :src="item.img" />
              <img src="./img/icon7.png" />
              <div class="shang">
                <p
                  style="font-size: 0;
             display: flex;
             align-items: center;
             justify-content: space-between;
             "
                >
                  <span class="feng">{{item.cart}}</span>
                  <span class="hot">{{item.hot}}</span>
                </p>
                <p class="suv">
                  <span>{{ item.suv }}</span>&nbsp;&nbsp;&nbsp;
                  <span>{{ item.l }}</span>&nbsp;&nbsp;&nbsp;
                  <span>{{ item.count }}</span>
                </p>
                <p
                  style="font-size: 0;
              display: flex;
             align-items: center;
             justify-content: space-between;
             margin-top: -0.25rem;
             "
                >
                  <span class="arr">{{item.price}}</span>
                  <span class="ren">{{item.ren}}</span>
                  <a class="atomit" href="#">{{item.atomit}}</a>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Myheader from './../../chw/header'
export default {
  data() {
    return {
      prt: [
        { title: "价格排序", image: "./img/形状 626@2x.png" },
        { title: "车辆排序", image: "./img/形状 626 拷贝@2x.png" }
      ],

      list: [
        { type: "价格不限" },
        { type: "￥150以下" },
        { type: "￥150-￥300" },
        { type: "￥300以上" }
      ],
      num: 0,
      numbe: 0,
      car: [
        {
          img: require("./img/pic1@2x.png"),
          img1: require("./img/icon7.png"),
          cart: "丰田汉兰达",
          hot: "热",
          suv: "SUV",
          l: "2.5l",
          count: "5",
          price: 120,
          ren: "元/人均",
          atomit: "自动还取"
        },
        {
          img: require("./img/pic1@2x.png"),
          img1: require("./img/icon7.png"),
          cart: "丰田汉兰达",
          hot: "热",
          suv: "SUV",
          l: "2.5l",
          count: "5",
          price: 121,
          ren: "元/人均",
          atomit: "自动还取"
        },
        {
          img: require("./img/pic1@2x.png"),
          img1: require("./img/icon7.png"),
          cart: "丰田汉兰达",
          hot: "热",
          suv: "SUV",
          l: "2.5l",
          count: "5",
          price: 245,
          ren: "元/人均",
          atomit: "自动还取"
        },
        {
          img: require("./img/pic1@2x.png"),
          img1: require("./img/icon7.png"),
          cart: "丰田汉兰达",
          hot: "热",
          suv: "SUV",
          l: "2.5l",
          count: "5",
          price: 246,
          ren: "元/人均",
          atomit: "自动还取"
        },
        {
          img: require("./img/pic1@2x.png"),
          img1: require("./img/icon7.png"),
          cart: "丰田汉兰达",
          hot: "热",
          suv: "SUV",
          l: "2.5l",
          count: "5",
          price: 545,
          ren: "元/人均",
          atomit: "自动还取"
        },
        {
          img: require("./img/pic1@2x.png"),
          img1: require("./img/icon7.png"),
          cart: "丰田汉兰达",
          hot: "热",
          suv: "SUV",
          l: "2.5l",
          count: "5",
          price: 547,
          ren: "元/人均",
          atomit: "自动还取"
        }
      ],
      numd: []
    };
  },
  methods: {
    dian(ind) {
      this.numbe = ind;
      console.log(ind);
    },
    tab(index) {
      this.num = index;
      console.log(index);
      let lll = [];
      if (index == 0) {
        this.numd = this.car;
      } else if (index == 1) {
        for (var i = 0; i < this.car.length; i++) {
          if (this.car[i].price <= 150) {
            lll.push(this.car[i]);
          }
        }
        this.numd = lll;
      } else if (index == 2) {
        for (var i = 0; i < this.car.length; i++) {
          if (this.car[i].price >= 150 && this.car[i].price <= 300) {
            lll.push(this.car[i]);
          }
        }
        this.numd = lll;
      } else if (index == 3) {
        for (var i = 0; i < this.car.length; i++) {
          if (this.car[i].price >= 300) {
            lll.push(this.car[i]);
          }
        }
        this.numd = lll;
      }
    },
    back(){
      this.$router.push('/pages')
    }
  },
  computed: {
    detai: function() {
      return sortR(this.numd, "price");
    }
  },
  mounted() {
    this.numd = this.car;
  },
  components: {
    Myheader,
  }
};
function sortR(arr, price) {
  return arr.sort(function(a, b) {
    var x = a[price];
    var y = b[price];
    return x < y ? -1 : x > y ? 1 : 0;
  });
}
</script>

<style scoped lang="less">
.ac {
  color: #ffc600;
}
.kong {
  width: 100%;
  height: 0.88rem;
}
.big {
  background: #303133;
  color: #fff;
  width: 100%;
  overflow: auto;
  height: 12.46rem;
  .header {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // padding-top: .6rem;

    img {
      width: 0.43rem;
      height: 0.43rem;
      margin-bottom: 0.18rem;
    }
    p {
      font-size: 0.36rem;
    }
  }
}
.price {
  padding-top: 0.39rem;
  font-size: 0.32rem;
  ul {
    display: flex;
    justify-content: space-around;
    padding-bottom: 0.35rem;
    border-bottom: 1px #ccc solid;
    li {
      img {
        margin-left: 0.08rem;
        width: 0.18rem;
        height: 0.18rem;
        float: right;
        margin-top: 0.15rem;
      }
    }
  }
}
.sort {
  padding-top: 0.3rem;
  .noh {
    display: flex;
    justify-content: space-around;
    font-size: 0.26rem;
    .active {
      color: #ffc600;
    }
  }
}
.photo {
  margin-top: 0.2rem;
  ul {
    width: 93%;
    margin: 0 auto;
    li {
      width: 3.3rem;
      position: relative;
      float: left;
      margin: 0.1rem 0.1rem 0.1rem 0.08rem;
    }
  }
  ul li img:nth-child(1) {
    width: 3.32rem;
    height: 3.43rem;
    border-radius: 0.05rem;
  }
  ul li img:nth-child(2) {
    width: 0.96rem;
    height: 0.3rem;
    position: absolute;
    left: 2.33rem;
    top: 1.56rem;
  }
  .shang {
    width: 90%;
    margin-left: 0.15rem;
    position: absolute;
    left: 0;
    top: 2.19rem;
    .feng {
      font-size: 0.28rem;
      color: black;
    }
    .hot {
      display: inline-block;
      font-size: 0.2rem;
      width: 0.28rem;
      height: 0.28rem;
      color: black;
      background: rgba(252, 198, 0, 1);
      border-radius: 0.05rem;
      text-align: center;
      line-height: 0.26rem;
    }
    .suv {
      font-size: 0.2rem;
      color: #999999;
      margin-top: 0.06rem;
    }
    .arr {
      font-size: 0.36rem;
      color: #ff0000;
    }
    .ren {
      font-size: 0.28rem;
      color: #303133;
    }
    .atomit {
      display: inline-block;
      width: 1.2rem;
      height: 0.29rem;
      border: 1px solid rgba(102, 102, 102, 1);
      border-radius: 0.05rem;
      font-size: 0.2rem;
      text-align: center;
      line-height: 0.25rem;
    }
  }
}
</style>
