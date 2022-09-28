<template>
  <div ref="chart" id="map"></div>
</template>

<script>
import {
  ref,
  onMounted,
  onUnmounted
} from "vue";
import * as echarts from "echarts";



export default {
  setup() {
    async function getState() {


    }
    const chart = ref();
    onMounted(() => {
      var myChart = echarts.init(chart.value);
      getState().then(() => {

        var trafficWay = [
          { name: "JavaDcript", value: 9000 },
          { name: "HTML/CSS", value: 7000 },
          { name: "Python", value: 6530 },
          { name: "SQL", value: 5220 },
          { name: "Java", value: 4640 },
          { name: "Node.js", value: 4520 },
          { name: "TypeScript", value: 4030 },
          { name: "C#", value: 3820 },
          { name: "Bash/Shell", value: 3800 },
          { name: "C++", value: 3620 },
          { name: "PHP", value: 3530 },
          { name: "C", value: 3420 },
          { name: "PowerShell", value: 1940 },
          { name: "Go", value: 1820 },
        ];
        trafficWay.sort(function (a, b) {
          return b.value - a.value;
        });
        var colorAlpha = ["rgba(0,0,0,0.05)"];
        var data2 = [];
        for (var i = 0; i < trafficWay.length; i++) {
          data2.push({
            value: trafficWay[i].value,
            name: trafficWay[i].name,
            itemStyle: {
              borderColor: "#218de0",
              borderWidth: 2,
              shadowBlur: 20,
              shadowColor: "#218de0",
              shadowOffsetx: 25,
              shadowOffsety: 20,
              color: colorAlpha[0],
            }, 
            
          });
        }
        var seriesOption = [
          {
            stack: "a",
            type: "pie",
            radius: ["0%", "70%"],
            // center: ["47%", "45%"],
            roseType: "radius",
            zlevel: 10,
            startAngle: 100,
            data: data2,
            label: {
              // normal: {
              formatter: ["{b|{b}}", "{d|{d}%}"].join("\n"),
              rich: {
                b: {
                  color: "#54CBFF",
                  fontSize: 14,
                  lineHeight: 15,
                },
                d: {
                  color: "#21ffcc",
                  fontSize: 13,
                  lineHeight: 15,
                },
                // },
              },
            },
            labelLine: {
              // normal: {
              show: true,
              length: 0,
              length2: 0,
              lineStyle: {
                color: "#0096b1",
              },
              // },
              // emphasis: {
              //   show: false,
              // },
            },
          },
        ];
        var option = {
          grid: {
            // left: -500,
            // top: 150,
            bottom: "110",
            right: "110",
            // containLabel: true,
          },
          title: {
            text: "2022年中国技术栈热度",
            left: "15%",
            top:"6%",
            textStyle: {
              fontSize: 20,
              color: "rgba(249, 249, 249, 1)",
            },
            subtextStyle: {
              fontSize: 20,
            },
            show: true,
          },
          tooltip: {
            trigger: "item",
            formatter: "{b} :{d}%",
          },
          legend: {
            show: false,
          },

          polar: {},
          angleAxis: {
            interval: 1,
            type: "category",
            data: [],
            z: 10,
            axisLine: {
              show: false,
              lineStyle: {
                color: "#0B4A6B",
                width: 1,
                type: "solid",
              },
            },
            axisLabel: {
              interval: 0,
              show: true,
              color: "#0B4A6B",
              margin: 8,
              fontSize: 16,
            },
          },
          radiusAxis: {
            min: 20,
            max: 120,
            interval: 20,
            axisLine: {
              show: false,
              lineStyle: {
                color: "#0054A9",
                width: 1,
                type: "solid",
              },
            },
            axisLabel: {
              formatter: "{value} %",
              show: false,
              padding: [0, 0, 20, 10],
              color: "#0B3E5E",
              fontSize: 16,
            },
            splitLine: {
              lineStyle: {
                color: "#07385e",
                width: 2,
                type: "dashed",
              },
            },
          },
          redius: 38,
          series: seriesOption,
          calculable: true,
        };

        myChart.setOption(option);
      });
    onUnmounted(() => {
        if (myChart) {
          // console.log(myChart,"已经清空");
          myChart.clear();
          myChart.dispose();
          myChart = null;
        }
      });
    });
    return {
      getState,
      chart,
    };
  },
};
</script>
<style lang="css" scoped>
#map {
  /* background-color: rgb(1, 2, 1); */

  width: 350px;
  height: 400px;
  /* background-color: aqua; */
  /* margin-left: 20px; */
  margin-top: -40px;
}
</style>
