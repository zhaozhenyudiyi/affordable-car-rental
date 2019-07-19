<template>
  <section>
    <div class="ries">
      <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
      <el-button type="primary" @click="vip">会员查询</el-button>
      <el-button type="info" @click="vip_">返回</el-button>
    </div>
    <aside v-if="show">
      <el-table
        :data="table.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        style="width: 100%"
        :header-cell-style="{background:'#E8E8E8'}"
        @cell-click="fn"
      >
        <el-table-column prop="id" label="会员ID" width="180"></el-table-column>
        <el-table-column prop="timer" label="充值时间" width="220"></el-table-column>
        <el-table-column prop="money" label="支付金额" width="180"></el-table-column>
        <el-table-column prop="mode" label="支付方式" width="180"></el-table-column>
        <el-table-column prop="curr" label="获取平驾币(枚)" width="180"></el-table-column>
        <el-table-column prop="currency" label="总平驾币(枚)"></el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="this.tableData.length"
        @next-click="next"
        @prev-click="prev"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </aside>
    <div v-else class="div">
      <div class="basic">
        <h3>会员基本信息</h3>
        <div class="one">
          <div class="two">
            <p>客户姓名：{{xq.Basic_name}}</p>
            <p>联系方式：{{xq.Basic_phone}}</p>
            <p>平驾币：{{ xq.Basic_currency }}</p>
          </div>
          <div class="free">
            <p>证件类型：{{xq.Basic_type}}</p>
            <p>证件号码：{{xq.Basic_number}}</p>
            <p>积分：{{ xq.Basic_integral}}</p>
          </div>
        </div>
      </div>
      <div class="basic ba">
        <h3>消费记录</h3>
        <div class="one">
          <div class="two">
            <p>时间：{{xq.ption_timer}}</p>
            <p>日租价：{{xq.ption_day}}</p>
            <p>定金：{{xq.ption_Deposit}}</p>
            <p>手续费：{{xq.ption_Charge}}</p>
            <p>车辆损失费：{{xq.ption_loss}}</p>
            <p>总费用：{{xq.ption_cost}}</p>
          </div>
          <div class="free">
            <p>车辆型号：{{xq.ption_Model}}</p>
            <p>车牌号码：{{xq.ption_mode}}</p>
            <p>租用方式：{{xq.ption_type}}</p>
            <p>车型：{{xq.ption_type}}</p>
            <p>取车时间：{{xq.ption_car}}</p>
            <p>还车时间：{{xq.ption_rac}}</p>
            <p>实际还车时间：{{xq.ption_Actual}}</p>
            <p>车辆损失说明：{{xq.ption_nothing}}</p>
          </div>
        </div>
      </div>
      <div class="basic ba">
        <h3>充值记录</h3>
        <div class="one">
          <div class="two">
            <p>充值时间：{{xq.charge_timer}}</p>
            <p>充值金额：{{xq.charge_money}}</p>
            <p>会员期限：{{xq.charge_term}}</p>
          </div>
          <div class="free">
            <p>到期时间{{xq.charge_ti}}</p>
            <p>会员等级：{{xq.charge_Grade}}</p>
            <p>会员状态：{{xq.charge_state}}</p>
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
      cur: "",
      input: "",
      total: 0, //默认数据总数
      pagesize: 7, //每页的数据条数
      currentPage: 1, //默认开始页面
      tableData: [
        {
          id: "1",
          timer: "1999-03-05 19:03:95",
          money: "￥1000",
          mode: "支付宝",
          curr: "1000",
          currency: "10000",
          //会员基本信息
          Basic_name: "马先生",
          Basic_phone: 13827452207,
          Basic_currency: 2000,
          Basic_type: "二代身份证",
          Basic_number: 8978969865287658,
          Basic_integral: 40000,
          //消费记录
          ption_timer: "1898-09-09 23:44:99",
          ption_day: "￥800",
          ption_Deposit: "￥2000",
          ption_Charge: "￥9000",
          ption_loss: "0",
          ption_cost: "￥9000",
          ption_Model: "五菱宏光",
          ption_mode: "日租",
          ption_type: "高级",
          ption_car: "1898-09-09 23:44:99",
          ption_rac: "1898-09-09 23:44:99",
          ption_Actual: "1898-09-09 23:44:99",
          ption_nothing: "无",
          //充值记录
          charge_timer: "1898-09-09 23:44:99",
          charge_money: "￥900",
          charge_term: "2个月",
          charge_ti: "1898-09-09 23:44:99",
          charge_Grade: "白金",
          charge_state: "连续续期"
        },
        {
          id: "2",
          timer: "1999-03-05 19:03:95",
          money: "￥1000",
          mode: "支付宝",
          curr: "1000",
          currency: "10000"
        },
        {
          id: "16620194993",
          timer: "1999-03-05 19:03:95",
          money: "￥1000",
          mode: "支付宝",
          curr: "1000",
          currency: "10000"
        },
        {
          id: "16620194993",
          timer: "1999-03-05 19:03:95",
          money: "￥1000",
          mode: "支付宝",
          curr: "1000",
          currency: "10000"
        },
        {
          id: "16620194993",
          timer: "1999-03-05 19:03:95",
          money: "￥1000",
          mode: "支付宝",
          curr: "1000",
          currency: "10000"
        },
        {
          id: "3",
          timer: "1999-03-05 19:03:95",
          money: "￥1000",
          mode: "支付宝",
          curr: "1000",
          currency: "10000"
        },
        {
          id: "16620194993",
          timer: "1999-03-05 19:03:95",
          money: "￥1000",
          mode: "支付宝",
          curr: "1000",
          currency: "10000"
        },
        {
          id: "4",
          timer: "1999-03-05 19:03:95",
          money: "￥1000",
          mode: "支付宝",
          curr: "1000",
          currency: "100000000000"
        },
        {
          id: "5",
          timer: "1999-03-05 19:03:95",
          money: "￥1000",
          mode: "支付宝",
          curr: "1000",
          currency: "10000"
        },
        {
          id: "6",
          timer: "1999-03-05 19:03:95",
          money: "￥1000",
          mode: "支付宝",
          curr: "1000",
          currency: "10000"
        },
        {
          id: "7",
          timer: "1999-03-05 19:03:95",
          money: "￥1000",
          mode: "支付宝",
          curr: "1000",
          currency: "10000"
        },
        {
          id: "8",
          timer: "1999-03-05 19:03:95",
          money: "asdff",
          mode: "支付宝",
          curr: "1000",
          currency: "10000"
        },
        {
          id: "90",
          timer: "1999-03-05 19:03:95",
          money: "￥1000",
          mode: "sdfdfs",
          curr: "1000",
          currency: "10000"
        },
        {
          id: "44",
          timer: "adsdf-03-05 19:03:95",
          money: "￥1000",
          mode: "支付宝",
          curr: "1000",
          currency: "10000"
        },
        {
          id: "673",
          timer: "1999-03-05 19:03:95",
          money: "￥1000",
          mode: "dfdf",
          curr: "1000",
          currency: "10000"
        },
        {
          id: "66",
          timer: "1999-03-05 19:03:95",
          money: "sfsdf",
          mode: "支付宝",
          curr: "1000",
          currency: "10000"
        },
        {
          id: "85674",
          timer: "1999-03-05 19:03:95",
          money: "￥1000",
          mode: "支付宝",
          curr: "1000",
          currency: "10000"
        },
        {
          id: "6765",
          timer: "dfdfd-03-05 19:03:95",
          money: "￥1000",
          mode: "支付宝0000",
          curr: "1000",
          currency: "10000"
        },
        {
          id: "4622",
          timer: "1999-03-05 19:03:95",
          money: "￥1000",
          mode: "dfsdf",
          curr: "1000",
          currency: "10000"
        },
        {
          id: "566",
          timer: "1999-03-05 19:03:95",
          money: "￥1000",
          mode: "weix",
          curr: "1000",
          currency: "10000"
        },
        {
          id: "5346",
          timer: "1999-03-05 19:03:95",
          money: "￥1000",
          mode: "weix",
          curr: "1000",
          currency: "10000"
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
          if (a.id.indexOf(this.input) != -1) {
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
/deep/.number {
  border-radius: 0%;
}
section {
  width: 100%;
  height: 100%;
  font-size: 0;
  .ries {
    width: 100%;
    height: 62px;
    font-size: 0;
    display: flex;
    margin: 64px 0 0 43px;
    align-items: center;
    /deeo/.el-pagination {
      /deep/.is-background {
        /deep/.el-pager {
          /deep/li {
            border-radius: 50%;
          }
        }
      }
    }
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
      .cell {
        text-align: center;
      }
    }
  }
  /deep/.el-pagination {
    position: absolute;
    bottom: -60px;
    left: 50%;
    transform: translateX(-50%);
  }
  .div {
    width: 100%;
    font-size: 0;
    .basic {
      width: 100%;
      padding: 24px 0 0 54px;
      border-top: 1px solid #e8e8e8;
      border-bottom: 1px solid #e8e8e8;
      margin-top: 18px;
      h3 {
        font-size: 18px;
        font-family: SourceHanSansCN-Bold;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
      }
      .one {
        width: 100%;
        font-size: 14px;
        color: #333333;
        display: flex;
        div {
          flex: 1;
          p {
            margin: 5px 0;
            color: #333333;
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
