<template>
  <div class="data">
    <div class="realTime">
      <h4>实时统计数据</h4>
      <ul>
        <li v-for="(item,index) in data_list" :key="index">
          <p class="user">{{ item.tit }}</p>
          <p class="user_num">{{ item.num }}</p>
          <p class="range">{{ item.range }}</p>
        </li>
      </ul>
    </div>
    <div class="statistics">
      <div class="order">
        <h3>平价租车订单统计表</h3>
        <div id="myChart"></div>
      </div>
      <div class="approve">
        <h4>平价租车车辆可用情况</h4>
        <Map></Map>
      </div>
    </div>
  </div>
</template>
<script>
//引入部分echarts组件
var echarts = require("echarts/lib/echarts");
// 引入柱状图
require("echarts/lib/chart/bar");
// 引入提示框和标题组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");

// // 基于准备好的dom，初始化echarts实例
// var myChart = echarts.init(document.getElementById('main'));
// // 绘制图表
import Map from "./map";
export default {
  data() {
    return {
      data_list: [
        { tit: "用户量", num: 12356, range: "同比上个月下降5%" },
        { tit: "利润(元/月)", num: 8880, range: "同比上个月下降4%" },
        { tit: "本月成本(元)", num: 7000.88, range: "同比上个月上升4%" },
        { tit: "今日交易额(元)", num: 999.98, range: "同比上个月上升6%" }
      ]
    };
  },
  methods: {
    drawLine() {
      let myChart = echarts.init(document.getElementById("myChart"));
      myChart.setOption({
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "交易量(笔)"
          }
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "11px",
            // barBorderRradius:"6px",
            data: [950, 750, 420, 600, 220, 950, 920],
            itemStyle: {
              //柱形图圆角，鼠标移上去效果
              emphasis: {
                barBorderRadius: 6
              },
              normal: {
                //柱形图圆角，初始化效果
                barBorderRadius: [10, 10, 10, 10],
                color: "rgba(35, 109, 183, 1)", //设置柱子颜色
                // fontColor:"red",
                label: {
                  show: true, //是否展示
                  position: 'top',
                  fontColor:"red",
                  textStyle: {
                    fontWeight: "bolder",
                    fontSize: "12"
                    // fontFamily: "微软雅黑"
                  }
                }
              }
            }
          }
        ]
      });
    }
  },
  components: {
    Map
  },
  mounted() {
    this.drawLine();
  }
};
</script>

<style scoped lang='less'>
.data {
  width: 1329px;
  height: 100%;
  border: 1px solid #cccccc;
  .realTime {
    width: 1134px;
    height: 158px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 10px 34px 4px rgba(204, 204, 204, 0.27);
    margin-top: 48px;
    margin-left: 48px;
    overflow: hidden;
    h4 {
      font-size: 18px;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      padding: 16px 0px 16px 17px;
      border-bottom: 1px solid rgba(232, 232, 232, 1);
    }
    ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 101px;
      li {
        width: 121px;
        height: 70px;
        .user {
          color: rgba(51, 51, 51, 1);
          font-size: 18px;
          font-weight: 400;
        }
        .user_num {
          color: rgba(255, 198, 0, 1);
          font-size: 24px;
        }
        .range {
          color: rgba(153, 153, 153, 1);
          font-size: 14px;
        }
      }
      li:nth-child(1) {
        margin-left: 57px;
      }
      li:nth-child(2) {
        margin-left: 180px;
      }
      li:nth-child(3) {
        margin-left: 180px;
      }
      li:nth-child(4) {
        margin-left: 180px;
      }
    }
  }
  .statistics {
    display: flex;
    flex-direction: row;
    .order {
      width: 858px;
      height: 410px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 10px 34px 4px rgba(204, 204, 204, 0.27);
      margin-left: 48px;
      margin-top: 92px;
      h3 {
        font-size: 24px;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        padding: 15px 0px 48px 17px;
      }
      #myChart {
        width: 100%;
        height: 324px;
      }
    }
    .approve {
      margin-top: 114px;
      #mycharts {
        width: 236px;
        height: 236px;
      }
      h4{
        margin-left: 26px;
        margin-bottom: 24px;
      }
    }
  }
}
</style>
