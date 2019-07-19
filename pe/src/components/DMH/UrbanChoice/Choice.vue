<template>
  <section>
    <header>
      <Myheader txt="城市列表">
        <img src="./../../chw/images/2.png" slot="left-img" class="left-img" @click="back" alt />
      </Myheader>
    </header>
    <div class="sou">
      <van-search
        placeholder="输入城市名称,拼音或拼音首字母"
        v-model="value"
        shape="round"
        :left-icon="soulogo"
        z-index="100"
      />
      <div class="sear" v-show="show">
        <ul>
          <li v-for="(item, index) in fn" :key="index" v-text="$options.filters.c(item)"
           @click="title(item)"></li>
        </ul>
      </div>
    </div>
    <div v-show="!show">
      <div class="current">
        <p>
          当前定位
          <span></span>
        </p>
        <p>
          <span>请在设置中打开定位</span>
          <span>打开设置</span>
        </p>
      </div>
      <div class="History">
        <p>
          历史定位
          <span></span>
          <i>
            历史
            <br />热门
          </i>
        </p>
        <ul>
          <li v-for="(item, index) in History" :key="index">{{ item }}</li>
        </ul>
      </div>
      <div class="Popular">
        <p>
          热门城市
          <span></span>
        </p>
        <ul>
          <li v-text="item" v-for="(item, index) in Popular" :key="index" @click="pop(index)"></li>
        </ul>
      </div>
      <div class="lists">
        <p @click="clas=!clas" :class="clas?'class1':'class2'">已开通城市</p>
        <p @click="clas=!clas" :class="clas?'class2':'class1'">按省份查看</p>
      </div>
      <aside>
        <van-index-bar>
          <van-index-anchor index="A" />
          <van-cell
            title
            v-for="(item, index) in list[0].list "
            :key="index"
            @click="title(item.name)"
          >{{ item.name }}</van-cell>
          <van-index-anchor index="B" />
          <van-cell
            title
            v-for="(item, index) in list[1].list "
            :key="index"
            @click="title(item.name)"
          >{{ item.name }}</van-cell>
          <van-index-anchor index="C" />
          <van-cell
            title
            v-for="(item, index) in list[2].list "
            :key="index"
            @click="title(item.name)"
          >{{ item.name }}</van-cell>
          <van-index-anchor index="D" />
          <van-cell
            title
            v-for="(item, index) in list[3].list "
            :key="index"
            @click="title(item.name)"
          >{{ item.name }}</van-cell>
          <van-index-anchor index="E" />
          <van-cell
            title
            v-for="(item, index) in list[4].list "
            :key="index"
            @click="title(item.name)"
          >{{ item.name }}</van-cell>
          <van-index-anchor index="F" />
          <van-cell
            title
            v-for="(item, index) in list[5].list "
            :key="index"
            @click="title(item.name)"
          >{{ item.name }}</van-cell>
          <van-index-anchor index="G" />
          <van-cell
            title
            v-for="(item, index) in list[6].list "
            :key="index"
            @click="title(item.name)"
          >{{ item.name }}</van-cell>
          <van-index-anchor index="H" />
          <van-cell
            title
            v-for="(item, index) in list[7].list "
            :key="index"
            @click="title(item.name)"
          >{{ item.name }}</van-cell>
          <van-index-anchor index="J" />
          <van-cell
            title
            v-for="(item, index) in list[8].list "
            :key="index"
            @click="title(item.name)"
          >{{ item.name }}</van-cell>
          <van-index-anchor index="K" />
          <van-cell
            title
            v-for="(item, index) in list[9].list "
            :key="index"
            @click="title(item.name)"
          >{{ item.name }}</van-cell>
          <van-index-anchor index="L" />
          <van-cell
            title
            v-for="(item, index) in list[10].list "
            :key="index"
            @click="title(item.name)"
          >{{ item.name }}</van-cell>
          <van-index-anchor index="M" />
          <van-cell
            title
            v-for="(item, index) in list[11].list "
            :key="index"
            @click="title(item.name)"
          >{{ item.name }}</van-cell>
          <van-index-anchor index="N" />
          <van-cell
            title
            v-for="(item, index) in list[12].list "
            :key="index"
            @click="title(item.name)"
          >{{ item.name }}</van-cell>
          <van-index-anchor index="P" />
          <van-cell
            title
            v-for="(item, index) in list[13].list "
            :key="index"
            @click="title(item.name)"
          >{{ item.name }}</van-cell>
          <van-index-anchor index="Q" />
          <van-cell
            title
            v-for="(item, index) in list[14].list "
            :key="index"
            @click="title(item.name)"
          >{{ item.name }}</van-cell>
          <van-index-anchor index="R" />
          <van-cell
            title
            v-for="(item, index) in list[15].list "
            :key="index"
            @click="title(item.name)"
          >{{ item.name }}</van-cell>
          <van-index-anchor index="S" />
          <van-cell
            title
            v-for="(item, index) in list[16].list "
            :key="index"
            @click="title(item.name)"
          >{{ item.name }}</van-cell>
          <van-index-anchor index="T" />
          <van-cell
            title
            v-for="(item, index) in list[17].list "
            :key="index"
            @click="title(item.name)"
          >{{ item.name }}</van-cell>
          <van-index-anchor index="W" />
          <van-cell
            title
            v-for="(item, index) in list[18].list "
            :key="index"
            @click="title(item.name)"
          >{{ item.name }}</van-cell>
          <van-index-anchor index="X" />
          <van-cell
            title
            v-for="(item, index) in list[19].list "
            :key="index"
            @click="title(item.name)"
          >{{ item.name }}</van-cell>
          <van-index-anchor index="Y" />
          <van-cell
            title
            v-for="(item, index) in list[20].list "
            :key="index"
            @click="title(item.name)"
          >{{ item.name }}</van-cell>
          <van-index-anchor index="Z" />
          <van-cell
            title
            v-for="(item, index) in list[21].list "
            :key="index"
            @click="title(item.name)"
          >{{ item.name }}</van-cell>
        </van-index-bar>
      </aside>
    </div>
  </section>
</template>

<script>
import Myheader from './../../chw/header'
import city from "./city.json";
export default {
  data() {
    return {
      value: "",
      show: false,
      //搜索的logo
      soulogo: require("./img/icon-01.png"),
      list: city.city, //首字母  城市
      //历史城市
      History: ['郑州',],
      //热门城市
      Popular: [
        "昆明",
        "大理",
        "成都",
        "三亚",
        "西安",
        "青岛",
        "深圳",
        "重庆",
        "济南",
        "杭州",
        "厦门",
        "贵阳",
        "北京",
        "上海",
        "海口"
      ],
      clas: true
      //样式切换

      //
    };
  },
  filters: {
    c(val) {
      return val;
    }
  },
  methods: {
    title(a){
      this.History.push(a);
      this.value = "";
    },
    pop(a){
      this.$store.commit('chen',this.Popular[a]);
      this.$router.push("/pages");
    },
    back(){
      this.$router.push('/pages');
    }
  },
  components: {
    Myheader,
  },
  computed: {
    fn() {
      let bb = [];
      this.list.forEach(a => {
        a.list.forEach(b => {
          if (
            b.name.indexOf(this.value) !== -1 ||
            b.pinyin.toLowerCase().indexOf(this.value.toLowerCase()) !== -1
          ) {
            bb.push(b.name);
          }
        });
      });
      bb.length > 15 ? (bb.length = 15) : bb;
      return bb;
    }
  },
  updated() {
    if (this.value != "") {
      this.show = true;
    } else {
      this.show = false;
    }
  },
  mounted() {}
};
</script>

<style scoped lang="less">
header {
  width: 100%;
  height: 0.88rem;
}
section {
  width: 100%;
  height: 100%;
  font-size: 0;
  .sou {
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .sear {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0.95rem;
      left: 0;
      width: 100%;
      background: #2f3032;
      font-size: 0.3rem;
      z-index: 100;
      ul {
        width: 6rem;
        margin: 0 auto;
        padding-top: 0.2rem;
        color: #fbfbfb;
        li {
          padding: 0.1rem 0;
          border-bottom: 1px solid #eee;
          margin: 0.2rem 0;
        }
      }
    }
    /deep/.van-search {
      width: 6.5rem;
      height: 0.6rem;
      background: none !important;
      margin: 0 auto;
      &::placeholder {
        font-size: 0.24rem;
      }
    }
  }
  .current {
    width: 6rem;
    margin: 0.43rem auto;
    p:nth-child(1) {
      font-size: 0.3rem;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(252, 253, 253, 1);
      position: relative;
      span {
        position: absolute;
        top: 0.05rem;
        left: -0.35rem;
        display: inline-block;
        width: 0.05rem;
        height: 0.28rem;
        background: rgba(255, 198, 0, 1);
        border-radius: 3px;
      }
    }
    p:last-of-type {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.24rem;
      font-family: Adobe Heiti Std R;
      font-weight: normal;
      color: rgba(153, 152, 153, 1);
    }
  }
  .History,
  .Popular {
    width: 6rem;
    margin: 0 auto;
    p {
      font-size: 0.3rem;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(249, 251, 252, 1);
      position: relative;
      span {
        position: absolute;
        top: 0.05rem;
        left: -0.35rem;
        display: inline-block;
        width: 0.05rem;
        height: 0.28rem;
        background: rgba(255, 198, 0, 1);
        border-radius: 3px;
      }
      i {
        font-size: 0.24rem;
        position: absolute;
        top: 0px;
        right: 0px;
        color: #ffc600;
      }
    }
    ul {
      overflow: hidden;
      li {
        display: inline-block;
        line-height: 0.3rem;
        text-align: center;
        font-size: 0.22rem;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: rgba(251, 252, 252, 1);
        background: rgba(255, 198, 0, 1);
        border-radius: 0.14rem;
        padding: 0.05rem 0.2rem;
        margin: 0.1rem 0.2rem;
      }
    }
  }
  .Popular {
    ul {
      li {
        color: rgba(102, 102, 102, 1);
        background: rgba(240, 241, 242, 1);
      }
    }
  }
  .lists {
    width: 6rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    font-size: 0.3rem;
    .class1 {
      color: rgba(254, 254, 255, 1);
      padding-bottom: 0.1rem;
      border-bottom: 1px solid #ffc600;
      margin-right: 0.2rem;
    }
    .class2 {
      color: rgba(153, 152, 153, 1);
      padding-bottom: 0.1rem;
      margin-right: 0.2rem;
    }
  }
  aside {
    width: 6rem;
    margin: 0 auto;
  }

  //vant里的样式
  /deep/.van-index-bar__sidebar {
    right: 0.1rem;
  }
  /deep/.van-index-bar__index {
    font-size: 0.3rem;
    margin: 0.05rem 0;
    color: #fff;
  }
  /deep/.van-index-bar__index--active {
    color: #ffc600 !important;
  }
  /deep/.van-index-anchor {
    height: 0.32rem;
    line-height: 0.36rem;
    font-size: 0.15rem;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: rgba(251, 253, 253, 1);
    padding-left: 0.35rem;
    border-left: 3px solid rgba(255, 198, 0, 1);
  }
  /deep/.van-cell:not(:last-child)::after {
    border-bottom: none;
  }
  /deep/.van-cell {
    background: none;
  }
  /deep/.van-cell__title,
  .van-cell__value {
    flex: none;
  }
  /deep/.van-cell__value {
    color: #fbfbfb;
  }
  /deep/.van-hairline--bottom {
    color: #ffc600 !important;
    height: 0.6rem;
    line-height: 0.6rem;
    background-color: #2f3032;
  }
}
</style>
