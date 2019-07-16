<template>
  <section>
    <div>
      <div class="search">
        <p class="cong">充值号码</p>
        <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
        <el-button type="primary" @click="query">查询号码</el-button>
      </div>

      <div class="Recharge">
        <p class="zhi">充值金额</p>
        <ul>
          <li
            v-for="(item, index) in list"
            :key="index"
            :class="item.age?'':'pp'"
            @click="pin(index)"
          >
            <p>{{ item.name }}元</p>
            <p>送{{ item.vg }}平驾币</p>
          </li>
        </ul>
      </div>
      <div class="foot">
        <el-button type="primary">确认支付</el-button>
      </div>
      <el-table-column class="surface" v-show="fom">
        <el-table
          :data="tableData"
          stripe
          style="width: 100%"
          :header-cell-style="{background:'#E8E8E8'}"
        >
          <el-table-column prop="date" label="客户姓名" width="180" header-align="center"></el-table-column>
          <el-table-column prop="number" label="电话号码" width="200" header-align="center"></el-table-column>
          <el-table-column prop="type" label="证件类型" width="200" header-align="center"></el-table-column>
          <el-table-column prop="ber" label="证件号码" width="250" header-align="center"></el-table-column>
          <el-table-column prop="currency" label="平驾币" width="150" header-align="center"></el-table-column>
          <el-table-column prop="branch" label="积分" header-align="center"></el-table-column>
        </el-table>
      </el-table-column>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      member: false,
      //搜索的值
      input: "",
      list: [
        { name: "20", vg: "30", age: true },
        { name: "50", vg: "80", age: true },
        { name: "100", vg: "120", age: true },
        { name: "150", vg: "180", age: true },
        { name: "200", vg: "300", age: true }
      ],
      tableData: [
        {
          date: "其松松",
          number: "13837451107",
          type: "二代身份证",
          ber: "411024199908105515",
          currency: "150",
          branch: "100"
        }
      ],
      //搜索隐藏
      fom: false
    };
  },
  methods: {
    pin(index) {
      this.list.forEach(element => {
        element.age = true;
      });
      this.list[index].age = false;
    },
    query() {
      if (this.input === this.tableData[0].number) {
        this.fom = true;
      }
    }
  },
  components: {},
  updated() {
    if (this.input === "") {
      this.fom = false;
    }
  },
  mounted() {}
};
</script>

<style scoped lang="less">
section {
  width: 100%;
  font-size: 0;
  .search {
    width: 100%;
    height: 62px;
    display: flex;
    align-items: center;
    margin-top: 64px;
    .cong {
      display: inline-block;
      width: 90px;
      font-size: 18px;
      font-family: SourceHanSansCN-Bold;
      font-weight: bold;
      color: rgba(102, 102, 102, 1);
      line-height: 100px;
      margin: 0 29px 0 50px;
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
  .Recharge {
    width: 100%;
    height: 62px;
    display: flex;
    align-items: center;
    margin-top: 40px;
    .zhi {
      display: inline-block;
      width: 90px;
      font-size: 18px;
      font-family: SourceHanSansCN-Bold;
      font-weight: bold;
      color: rgba(102, 102, 102, 1);
      line-height: 100px;
      margin: 0 29px 0 50px;
    }
    ul {
      flex: 1;
      display: flex;
      align-items: center;
      li {
        width: 85px;
        height: 52px;
        border: 1px solid #cccccc;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 30px;
        cursor: pointer;
        p:first-child {
          font-size: 18px;
          color: rgba(51, 51, 51, 1);
        }
        p:last-child {
          font-size: 12px;
          color: #999999;
        }
        &.pp {
          background-color: #fef5d4;
        }
      }
    }
  }
  .foot {
    width: 100%;
    /deep/.el-button {
      width: 157px;
      height: 64px;
      background: #ffc600;
      border: none;
      color: #fff;
      font-size: 24px;
      font-weight: bold;
      border-radius: 10px;
      margin: 72px 0 0 151px;
    }
  }
  .surface {
    width: 1135px;
    height: 53px;
    margin-left: 48px;
    margin-top: 71px;
    /deep/.el-table {
      .cell {
        text-align: center;
      }
    }
  }
}
</style>
