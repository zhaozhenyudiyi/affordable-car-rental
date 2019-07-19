
<template>
  <div class="car-use">
    <form action="" class='search'>
      <input type="search" placeholder="请输入需要查询的车辆车牌号"/>
      <button @click="goto()">查询车辆</button>
    </form>
    <div class="use-manage">
      <div>
        <UseNav>
          <p slot="txt1">车辆基本信息</p>
        </UseNav>
        <div class="car-txt">
          <div class="txt1">
            <p>未使用</p>
            <img :src="list.car_url" alt />

            <p class="asd">雪佛兰</p>
            <p class="asd">
              <span class="money">500</span>/月
            </p>
          </div>
          <div class="txt2">
            <p>车牌号:{{list.car_num}}</p>
            <p>车型：{{list.car_type}}</p>
            <p>生产厂家：{{list.car_manufacture}}</p>
            <p>保险公司：{{list.insurance_company}}</p>
            <p>路桥费缴纳时间：{{list.road_bridge_paytime}}</p>
          </div>
          <div class="txt2">
            <p>注册日期：{{list.register_time}}</p>
            <p>发动机号码：{{list.engine_number}}</p>
            <p>发动机号：{{list.engine_num}}</p>
            <p>底盘号码：{{list.chassis_num}}</p>
            <p>二保时间：{{list.two_warranty}}</p>
            <p>注册时间：{{list.issue_time}}</p>
          </div>
        </div>
      </div>
      <div class="mas-1 mas">
        <UseNav>
          <p slot="txt1">使用记录</p>
          <span slot="txt2">近一个月</span>
          <span slot="txt3">近三个月</span>
          <span slot="txt4">近六个月</span>
        </UseNav>
        <el-table :data="list2.use_record" style="width: 100%,display:flex" height="135">
          <el-table-column prop="customer" label="客户" flex="1"></el-table-column>
          <el-table-column prop="contact" label="联系方式" flex="1"></el-table-column>
          <el-table-column prop="lease" label="租赁方式" flex="1"></el-table-column>
          <el-table-column prop="id_number" label="证件号码" flex="1"></el-table-column>
          <el-table-column prop="take_time" label="取车时间" flex="1"></el-table-column>
          <el-table-column prop="return_time" label="还车时间" flex="1"></el-table-column>
          <el-table-column prop="charge" label="收取费用（元）" flex="1"></el-table-column>
        </el-table>
      </div>
      <div class="mas-2 mas">
        <UseNav>
          <p slot="txt1">违规记录</p>
          <span slot="txt2">近一个月</span>
          <span slot="txt3">近三个月</span>
          <span slot="txt4">近六个月</span>
        </UseNav>
        <el-table
          :data="list2.err_record"
          style="width: 100%,display:flex, justify-content:center"
          height="144"
        >
          <el-table-column prop="err_people" label="违规客户" flex="1"></el-table-column>
          <el-table-column prop="err_tel" label="联系方式" flex="1"></el-table-column>
          <el-table-column prop="err_event" label="违规事件" flex="1"></el-table-column>
          <el-table-column prop="err_time" label="违规时间" flex="1"></el-table-column>
          <el-table-column prop="err_location" label="违规地点" flex="1"></el-table-column>
          <el-table-column prop="err_damages" label="违规惩罚" flex="1"></el-table-column>
          <el-table-column prop="err_damage_people" label="违规处理人员" flex="1"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import UseNav from "./use-nav";

export default {
  data() {
    return {
      list: [],
      list2: []
    };
  },
  mounted() {
    this.axios
      .get("./../../../../static/js/car-use-err-massage.json")
      .then(res => {
        this.list = res.data[0].car_massage;
        this.list2 = res.data[0];
        console.log(res.data[0]);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    goto() {
      this.$router.replace("/car-manage");
    }
  },
  components: {
    UseNav
  }
};
</script>

<style scoped lang=less>
.car-use {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .search {
    width: 100%;
    input {
      width: 50%;
      height: 62px;
      margin: 30px 48px;
      margin-right: 30px;
      border: 1px solid #999;
      border-radius: 10px;
      font-size: 20px;
      padding: 0 10px;
      outline: none;
    }
    button {
      width: 157px;
      height: 62px;
      border: 1px solid #999;
      border-radius: 10px;
      outline: none;
      background-color: #ffc600;
      font-size: 24px;
      color: #fff;
    }
  }
  .use-manage {
    margin: 0 49px;
    div {
      .car-txt {
        display: flex;
        div {
          padding: 0 30px;
        }
        .txt2 {
          font-size: 14px;
          line-height: 30px;
        }
        .txt1 {
          display: flex;
          flex-direction: column;
          position: relative;
          p:first-of-type {
            position: absolute;
            right: 10px;
            top: 10px;
            font-size: 12px;
            border: 1px solid #ffc600;
            padding: 0 5px;
            border-radius: 5px;
            color: #ffc600;
          }
          img {
            width: 261px;
            height: 126px;
          }
          p:nth-of-type(2) {
            position: absolute;
            top: 130px;
            left: 120px;
            text-align: center;
            font-size: 15px;
          }
          p:last-of-type {
            position: absolute;
            top: 150px;
            left: 120px;
            text-align: center;
            font-size: 15px;
            span {
              color: #ffc600;
              font-size: 22px;
            }
          }
        }
      }
    }
    .mas {
      width: 100%;
      /deep/.el-table th {
        text-align: center;
        background-color: #ccc;
        color: rgb(20, 19, 19);
        font-size: 17px;
      }
      /deep/.el-table td {
        text-align: center;
        color: rgb(20, 19, 19);
        font-size: 17px;
      }
    }
  }
}
</style>
