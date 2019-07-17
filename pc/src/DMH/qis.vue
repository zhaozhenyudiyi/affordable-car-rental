<template>
  <div>
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: ["日租车辆", "月租车辆", "年租车辆", "损坏车辆", "可用车辆"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: "日租车辆"},
              { value: 310, name: "月租车辆" },
              { value: 234, name: "年租车辆" },
              { value: 135, name: "损坏车辆" },
              { value: 1548, name: "可用车辆" }
            ],
            color:['#37A2DA', '#67E0E3', '#FFDB5C','#FF9F7F','#E062AE'],
            
          }
        ]
      });
    }
  }
};
</script>

<style scoped lang="less">
</style>
