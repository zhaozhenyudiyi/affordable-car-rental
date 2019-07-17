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
          <div class="two">
            <p>客户姓名：{{xq.Basic_name}}</p>
            <p>联系方式：{{xq.Basic_phone}}</p>
            <p>证件类型：{{ xq.Basic_currency }}</p>
            <p>证件号码：{{ xq.Basic_currency }}</p>
            <p>积分：{{ xq.Basic_currency }}</p>
            <p>平驾币：{{ xq.Basic_currency }}</p>
          </div>
          <div class="free">
            <p>车辆型号：{{xq.Basic_type}}</p>
            <p>车牌号码：{{xq.Basic_number}}</p>
            <p>租用方式：{{ xq.Basic_integral}}</p>
            <p>车型：{{ xq.Basic_integral}}</p>
            <p>取车时间：{{ xq.Basic_integral}}</p>
            <p>还车时间：{{ xq.Basic_integral}}</p>
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
        "name":"永辉",
        "phone":"13084966459",
        "style":"时租",
        "price":"50/时",
        "car":"吉利帝豪",
        "time":"2019.09.30 09:00",
        "type":"未领车"
    },
    {
        "name":"石小龙",
        "phone":"15620438791",
        "style":"月租",
        "price":"500/月",
        "car":"昂科拉",
        "time":"2019.07.21 05:00",
        "type":"已还车"
    },
    {
        "name":"李帅",
        "phone":"13145209207",
        "style":"时租",
        "price":"500/月",
        "car":"福克斯",
        "time":"2019.09.24 08:00",
        "type":"已还车"
    },
    {
        "name":"永辉",
        "phone":"13084966459",
        "style":"时租",
        "price":"50/时",
        "car":"吉利帝豪",
        "time":"2019.09.30 09:00",
        "type":"未领车"
    },
    {
        "name":"永辉",
        "phone":"13084966459",
        "style":"时租",
        "price":"50/时",
        "car":"吉利帝豪",
        "time":"2019.09.30 09:00",
        "type":"未领车"
    },
    {
        "name":"永辉",
        "phone":"13084966459",
        "style":"时租",
        "price":"50/时",
        "car":"吉利帝豪",
        "time":"2019.09.30 09:00",
        "type":"未领车"
    },
    {
        "name":"永辉",
        "phone":"13084966459",
        "style":"时租",
        "price":"50/时",
        "car":"吉利帝豪",
        "time":"2019.09.30 09:00",
        "type":"未领车"
    },
    {
        "name":"永辉",
        "phone":"13084966459",
        "style":"时租",
        "price":"50/时",
        "car":"吉利帝豪",
        "time":"2019.09.30 09:00",
        "type":"未领车"
    },
    {
        "name":"永辉",
        "phone":"13084966459",
        "style":"时租",
        "price":"50/时",
        "car":"吉利帝豪",
        "time":"2019.09.30 09:00",
        "type":"未领车"
    },
    {
        "name":"永辉",
        "phone":"13084966459",
        "style":"时租",
        "price":"50/时",
        "car":"吉利帝豪",
        "time":"2019.09.30 09:00",
        "type":"未领车"
    },
    {
        "name":"永辉",
        "phone":"13084966459",
        "style":"时租",
        "price":"50/时",
        "car":"吉利帝豪",
        "time":"2019.09.30 09:00",
        "type":"未领车"
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
  },
};
</script>

<style scoped lang="less">
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
  /deep/.el-pagination.is-background .el-pager li:not(.disabled).active {
        background:rgba(51,153,255,1);
        color: #ffffff;
  }
  /deep/.el-pagination.is-background .el-pager li{
      width:28px;
        height:28px;
        border:1px solid rgba(102,102,102,1);
        border-radius:50%;
        background: #ffffff;
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
