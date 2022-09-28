<template>
  <div>
    <!-- <h2>周销图</h2> -->
    <div class="chart" id="myEchartsTwo">图表的容器</div>
  </div>
</template>

<script>
import { onMounted,onUnmounted } from "vue";
import * as echarts from "echarts";
export default {
  name: "data_page",
  setup() {
    onMounted(() => {
      let myChart = echarts.init(document.getElementById("myEchartsTwo"));
      // 绘制图表
      myChart.setOption({
        xAxis: {
          type: "category",
          data: ["大专", "本科", "硕士", "硕士", "博士"],
          axisLabel: {
            color: "#fff",
          },
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
        },
                  grid: {
            // top: "10%",
            height: "70%",
            width: "80%",
            left: "16%",
            right: "20%",
          },

        yAxis: {
          show: true,
          type: "value",
          name: "就业人数",
          axisLabel: {
            textStyle: {
              color: "white",
            },
          },
          // nameLocation: "start",
          axisPointer: {
            //坐标轴指示器，坐标轴触发有效，
            type: "cross", //默认为line，line直线，cross十字准星，shadow阴影
            crossStyle: {
              color: "#fff",
            },
          },
          splitLine: {
            show: false,
          },
        },
        tooltip: {
          show: true,
          trigger: "axis", //axis , item
          backgroundColor: "RGBA(0, 49, 85, 1)",
          borderColor: "rgba(0, 151, 251, 1)",
          borderWidth: 1,
          borderRadius: 0,
          textStyle: {
            color: "#BCE9FC",
            fontSize: 16,
            align: "left",
          },
        },
        series: [
          {
            data: [1150, 4230, 2224, 2218, 770],
            // type: "line",
            type: "line",
            itemStyle: {
              // normal: {
              color: {
                type: "linear",
                x: 0,
                x2: 0,
                y: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#00b0ff",
                  },
                  {
                    offset: 0.2,
                    color: "#90b0ff",
                  },
                  {
                    offset: 0.4,
                    color: "#7052f4",
                  },
                  {
                    offset: 0.8,
                    color: "#7032f4",
                  },
                ],
                global: false, // 缺省为 false
              },
              // },
            },
          },
        ],
      });
      window.onresize = function () {
        //自适应大小
        myChart.resize();
      };
    onUnmounted(() => {
        if (myChart) {
          // console.log(myChart,"已经清空");
          myChart.clear();
          myChart.dispose();
          myChart = null;
        }
      });
    });
  },
};
</script>

<style scoped>
.chart {
  /* position: absolute; */
  height: 380px;
  width: 400px;
  /* background-color: aqua; */
    /* top: 0px; */
margin-top: -40px;
}
</style>
