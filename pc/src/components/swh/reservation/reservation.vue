<template>
  <section>
    <div class="ries">
      <el-input v-model="input" clearable></el-input>
      <el-button type="primary" @click="vip">查询预订</el-button>
    </div>
    <aside v-if="show">
      <el-table
        :data="table.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        style="width: 100%"
        :header-cell-style="{background:'#E8E8E8'}"
        @cell-click="fn"
      >
        <el-table-column prop="name" label="客户姓名" width="150"></el-table-column>
        <el-table-column prop="phone" label="电话号码" width="200"></el-table-column>
        <el-table-column prop="style" label="租凭方式" width="150"></el-table-column>
        <el-table-column prop="price" label="租凭价格" width="150"></el-table-column>
        <el-table-column prop="car" label="车型" width="150"></el-table-column>
        <el-table-column prop="time" label="取车时间"></el-table-column>
        <el-table-column prop="type" label="状态"></el-table-column>
      </el-table>
      <el-pagination
        background
        layout="pager"
        :total="300"
        @next-click="next"
        @prev-click="prev"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </aside>
    <div v-else class="div">
      <div class="basic">
        <div class="one">
          <h3>预订详细信息</h3>
          <div class="info_">
            <div class="two">
              <p>客户姓名：{{xq.name_}}</p>
              <p>联系方式：{{xq.phone_}}</p>
              <p>证件类型：{{ xq.style_}}</p>
              <p>证件号码：{{ xq.id}}</p>
              <p>积分：{{ xq.num1}}</p>
              <p>平驾币：{{ xq.num2}}</p>
            </div>
            <div class="free">
              <p>车辆型号：{{xq.car_}}</p>
              <p>车牌号码：{{xq.car_phone}}</p>
              <p>租用方式：{{ xq.type_}}</p>
              <p>车型：{{ xq.car_style}}</p>
              <p>取车时间：{{ xq.time1}}</p>
              <p>还车时间：{{ xq.time2}}</p>
            </div>
          </div>

          <div class="type" v-show="isshow">
            <p>
              <span>×</span>状态：未取车
            </p>
            <router-link to="/reservation">
              <button class="a" @click="fn1()">完成</button>
            </router-link>
            <router-link to="/reservation">
              <button @click="fn2()">删除</button>
            </router-link>
          </div>
          <div class="type" v-show="isshow1">
            <p>
              <span class="c">√</span>状态：已取车
            </p>
            <router-link to="/reservation">
              <button class="relate" @click="fn2()">删除</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      isshow: true,
      isshow1: false,
      cur: "",
      input: "",
      total: 0, //默认数据总数
      pagesize: 9, //每页的数据条数
      currentPage: 1, //默认开始页面
      tableData: [
        {
          name: "辉",
          phone: "13084966459",
          style: "时租",
          price: "50/时",
          car: "吉利帝豪",
          time: "2019.09.30 09:00",
          type: "未领车",
          name_: "马**",
          phone_: "130****3964",
          style_: "二代身份证",
          id: "41262********1259",
          num1: "100",
          num2: "2000",
          car_: "劳斯莱斯幻影",
          car_phone: "豫F-Z7776",
          type_: "时租",
          car_style: "高级",
          time1: "2019.05.06 8:00",
          time2: "2019.07.06 8:00"
        },
        {
          name: "石小龙",
          phone: "15620438791",
          style: "月租",
          price: "50/月",
          car: "昂科拉",
          time: "2019.07.21 05:00",
          type: "已还车",
          name_: "马**",
          phone_: "130****3964",
          style_: "二代身份证",
          id: "41262********1259",
          num1: "100",
          num2: "2000",
          car_: "劳斯莱斯幻影",
          car_phone: "豫F-Z7776",
          type_: "时租",
          car_style: "高级",
          time1: "2019.05.06 8:00",
          time2: "2019.07.06 8:00"
        },
        {
          name: "李帅",
          phone: "13145209207",
          style: "时租",
          price: "500/月",
          car: "福克斯",
          time: "2019.09.24 08:00",
          type: "已还车",
          name_: "马**",
          phone_: "130****3964",
          style_: "二代身份证",
          id: "41262********1259",
          num1: "100",
          num2: "2000",
          car_: "劳斯莱斯幻影",
          car_phone: "豫F-Z7776",
          type_: "时租",
          car_style: "高级",
          time1: "2019.05.06 8:00",
          time2: "2019.07.06 8:00"
        },
        {
          name: "永辉",
          phone: "13084966459",
          style: "时租",
          price: "50/时",
          car: "吉利帝豪",
          time: "2019.09.30 09:00",
          type: "未领车",
          name_: "马**",
          phone_: "130****3964",
          style_: "二代身份证",
          id: "41262********1259",
          num1: "100",
          num2: "2000",
          car_: "劳斯莱斯幻影",
          car_phone: "豫F-Z7776",
          type_: "时租",
          car_style: "高级",
          time1: "2019.05.06 8:00",
          time2: "2019.07.06 8:00"
        },
        {
          name: "永辉",
          phone: "13084966459",
          style: "时租",
          price: "50/时",
          car: "吉利帝豪",
          time: "2019.09.30 09:00",
          type: "未领车",
          name_: "马**",
          phone_: "130****3964",
          style_: "二代身份证",
          id: "41262********1259",
          num1: "100",
          num2: "2000",
          car_: "劳斯莱斯幻影",
          car_phone: "豫F-Z7776",
          type_: "时租",
          car_style: "高级",
          time1: "2019.05.06 8:00",
          time2: "2019.07.06 8:00"
        },
        {
          name: "永辉",
          phone: "13084966459",
          style: "时租",
          price: "50/时",
          car: "吉利帝豪",
          time: "2019.09.30 09:00",
          type: "未领车",
          name_: "马**",
          phone_: "130****3964",
          style_: "二代身份证",
          id: "41262********1259",
          num1: "100",
          num2: "2000",
          car_: "劳斯莱斯幻影",
          car_phone: "豫F-Z7776",
          type_: "时租",
          car_style: "高级",
          time1: "2019.05.06 8:00",
          time2: "2019.07.06 8:00"
        },
        {
          name: "永辉",
          phone: "13084966459",
          style: "时租",
          price: "50/时",
          car: "吉利帝豪",
          time: "2019.09.30 09:00",
          type: "未领车",
          name_: "马**",
          phone_: "130****3964",
          style_: "二代身份证",
          id: "41262********1259",
          num1: "100",
          num2: "2000",
          car_: "劳斯莱斯幻影",
          car_phone: "豫F-Z7776",
          type_: "时租",
          car_style: "高级",
          time1: "2019.05.06 8:00",
          time2: "2019.07.06 8:00"
        },
        {
          name: "永辉",
          phone: "13084966459",
          style: "时租",
          price: "50/时",
          car: "吉利帝豪",
          time: "2019.09.30 09:00",
          type: "未领车",
          name_: "马**",
          phone_: "130****3964",
          style_: "二代身份证",
          id: "41262********1259",
          num1: "100",
          num2: "2000",
          car_: "劳斯莱斯幻影",
          car_phone: "豫F-Z7776",
          type_: "时租",
          car_style: "高级",
          time1: "2019.05.06 8:00",
          time2: "2019.07.06 8:00"
        },
        {
          name: "永辉",
          phone: "13084966459",
          style: "时租",
          price: "50/时",
          car: "吉利帝豪",
          time: "2019.09.30 09:00",
          type: "未领车",
          name_: "马**",
          phone_: "130****3964",
          style_: "二代身份证",
          id: "41262********1259",
          num1: "100",
          num2: "2000",
          car_: "劳斯莱斯幻影",
          car_phone: "豫F-Z7776",
          type_: "时租",
          car_style: "高级",
          time1: "2019.05.06 8:00",
          time2: "2019.07.06 8:00"
        },
        {
          name: "永辉",
          phone: "13084966459",
          style: "时租",
          price: "50/时",
          car: "吉利帝豪",
          time: "2019.09.30 09:00",
          type: "未领车",
          name_: "马**",
          phone_: "130****3964",
          style_: "二代身份证",
          id: "41262********1259",
          num1: "100",
          num2: "2000",
          car_: "劳斯莱斯幻影",
          car_phone: "豫F-Z7776",
          type_: "时租",
          car_style: "高级",
          time1: "2019.05.06 8:00",
          time2: "2019.07.06 8:00"
        },
        {
          name: "永辉",
          phone: "13084966459",
          style: "时租",
          price: "50/时",
          car: "吉利帝豪",
          time: "2019.09.30 09:00",
          type: "未领车",
          name_: "马**",
          phone_: "130****3964",
          style_: "二代身份证",
          id: "41262********1259",
          num1: "100",
          num2: "2000",
          car_: "劳斯莱斯幻影",
          car_phone: "豫F-Z7776",
          type_: "时租",
          car_style: "高级",
          time1: "2019.05.06 8:00",
          time2: "2019.07.06 8:00"
        },
        {
          name: "永辉",
          phone: "13084966459",
          style: "时租",
          price: "50/时",
          car: "吉利帝豪",
          time: "2019.09.30 09:00",
          type: "未领车",
          name_: "马**",
          phone_: "130****3964",
          style_: "二代身份证",
          id: "41262********1259",
          num1: "100",
          num2: "2000",
          car_: "劳斯莱斯幻影",
          car_phone: "豫F-Z7776",
          type_: "时租",
          car_style: "高级",
          time1: "2019.05.06 8:00",
          time2: "2019.07.06 8:00"
        },
        {
          name: "永辉",
          phone: "13084966459",
          style: "时租",
          price: "50/时",
          car: "吉利帝豪",
          time: "2019.09.30 09:00",
          type: "未领车",
          name_: "马**",
          phone_: "130****3964",
          style_: "二代身份证",
          id: "41262********1259",
          num1: "100",
          num2: "2000",
          car_: "劳斯莱斯幻影",
          car_phone: "豫F-Z7776",
          type_: "时租",
          car_style: "高级",
          time1: "2019.05.06 8:00",
          time2: "2019.07.06 8:00"
        },
        {
          name: "永辉",
          phone: "13084966459",
          style: "时租",
          price: "50/时",
          car: "吉利帝豪",
          time: "2019.09.30 09:00",
          type: "未领车",
          name_: "马**",
          phone_: "130****3964",
          style_: "二代身份证",
          id: "41262********1259",
          num1: "100",
          num2: "2000",
          car_: "劳斯莱斯幻影",
          car_phone: "豫F-Z7776",
          type_: "时租",
          car_style: "高级",
          time1: "2019.05.06 8:00",
          time2: "2019.07.06 8:00"
        },
        {
          name: "永辉",
          phone: "13084966459",
          style: "时租",
          price: "50/时",
          car: "吉利帝豪",
          time: "2019.09.30 09:00",
          type: "未领车",
          name_: "马**",
          phone_: "130****3964",
          style_: "二代身份证",
          id: "41262********1259",
          num1: "100",
          num2: "2000",
          car_: "劳斯莱斯幻影",
          car_phone: "豫F-Z7776",
          type_: "时租",
          car_style: "高级",
          time1: "2019.05.06 8:00",
          time2: "2019.07.06 8:00"
        },
        {
          name: "永辉",
          phone: "13084966459",
          style: "时租",
          price: "50/时",
          car: "吉利帝豪",
          time: "2019.09.30 09:00",
          type: "未领车",
          name_: "马**",
          phone_: "130****3964",
          style_: "二代身份证",
          id: "41262********1259",
          num1: "100",
          num2: "2000",
          car_: "劳斯莱斯幻影",
          car_phone: "豫F-Z7776",
          type_: "时租",
          car_style: "高级",
          time1: "2019.05.06 8:00",
          time2: "2019.07.06 8:00"
        }
      ],
      table: [],
      //切换页面
      show: true,
      //点开一行拿到的数据
      xq: null
    };
  },
  methods: {
    //点击增加
    next() {
      this.currentPage = this.currentPage + 1;
    },
    //点击减少
    prev() {
      this.currentPage = this.currentPage - 1;
    },
    //点击页数
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    vip() {
      this.table = [];
      if (this.input != "") {
        this.tableData.forEach((a, b, c) => {
          if (a.phone.indexOf(this.input) != -1) {
            this.table.push(a);
          }
        });
      } else {
        return;
      }
    },
    vip_() {
      this.show = true;
    },
    //点击某一行获取其中的数据
    fn(v) {
      this.show = false;
      this.xq = v;
      if (this.xq.type === "已还车") {
        this.isshow = false;
        this.isshow1 = true;
      }else{
        this.isshow = true;
        this.isshow1 = false;
      }
    },
    fn1() {
      this.boolen1 = !this.boolen1;
      this.show = true;
      // this.xq.type.innerHTML='已还车';
    },
    fn2() {
      this.boolen1 = !this.boolen1;
      this.show = true;
      this.tableData.splice(this.xq, 1);
      console.log(this.tableData);
      this.table.push(this.tableData);
      // this.$router.push('/reservation');
    }
  },
  components: {},
  mounted() {
    this.tableData.forEach((a, b, c) => {
      this.table.push(a);
    });
  }
};
</script>
<style scoped lang="less">
section {
  margin: 0 48px;
  height: 100%;
  font-size: 0;
  .ries {
    width: 100%;
    height: 62px;
    font-size: 0;
    display: flex;
    margin: 64px 0 0 48px;
    align-items: center;
    /deep/.el-input {
      width: 682px;
      height: 62px;
      /deep/.el-input__inner {
        width: 682px;
        height: 62px;
      }
    }
    /deep/.el-button {
      width: 157px;
      height: 62px;
      font-size: 24px;
      font-family: SourceHanSansCN-Bold;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      background: #ffc600;
      border: none;
      border-radius: 10px;
      margin-left: 37px;
    }
  }
  aside {
    width: 1134px;
    margin: 72px 0 0 48px;
    position: relative;
    /deep/.el-table {
      height: 480px;
      .cell {
        text-align: center;
      }
      td:last-child div {
        color: #ffc600;
      }
    }
  }
  /deep/.el-pagination {
    position: absolute;
    bottom: -60px;
    left: 50%;
    transform: translateX(-50%);
  }
  /deep/.el-pagination.is-background .el-pager li:not(.disabled).active {
    background: rgba(51, 153, 255, 1);
    color: #ffffff;
  }
  /deep/.el-pagination.is-background .el-pager li {
    width: 28px;
    height: 28px;
    border: 1px solid rgba(102, 102, 102, 1);
    border-radius: 50%;
    background: #ffffff;
  }
  .div {
    width: 100%;
    font-size: 0;
    .basic {
      width: 100%;
      padding: 24px 0 0 48px;
      margin-top: 18px;
      h3 {
        font-size: 18px;
        font-family: SourceHanSansCN-Bold;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
      }
      .one {
        width: 1134px;
        font-size: 14px;
        color: #333333;
        h3 {
          height: 54px;
          line-height: 54px;
          background: rgba(232, 232, 232, 1);
          width: 100%;
          padding-left: 16px;
          margin-bottom: 25px;
        }
        div.info_ {
          display: flex;
          div {
            flex: 1;
          }
          p {
            margin-bottom: 15px;
            color: #333333;
          }
        }
        .type {
          margin-top: 71px;
          p {
            font-size: 16px;
            color: rgba(102, 102, 102, 1);
            span {
              width: 28px;
              height: 28px;
              background: #f56c6d;
              border-radius: 50%;
              display: inline-block;
              vertical-align: middle;
              margin-right: 10px;
              color: #ffffff;
              text-align: center;
              font-weight: bold;
              font-size: 24px;
              line-height: 28px;
            }
            span.c {
              background: rgb(132, 236, 132);
            }
          }
          a {
            button {
              margin-top: 29px;
              border: 1px solid #ffcc00;
              background: #ffffff;
              color: #ffcc00;
              width: 114px;
              height: 43px;
              border-radius: 10px;
              font-size: 24px;
              margin-right: 30px;
            }
            .relate {
              background: rgba(255, 198, 0, 1);
              color: #ffffff;
            }
          }
          button.a {
            color: #ffffff;
            background: rgba(255, 198, 0, 1);
          }
        }
      }
    }
    .ba {
      margin: 0;
      border-top: none;
    }
  }
}
</style>
