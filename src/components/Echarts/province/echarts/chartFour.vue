<template>
  <div ref="chart" id="map"></div>
</template>

<script>

import {
  ref,
  onMounted,

} from "vue";
import { useRoute } from "vue-router";
import * as echarts from "echarts";





export default {


  setup() {
    const route = useRoute();


    async function getState() {

    }

    const chart = ref();


    onMounted(() => {

      getState().then(() => {
        var myChart = echarts.init(chart.value);
        var option = {
          color: [
            "#006cff",
            "#60cda0",
            "#ed8884",
            "#ff9f7f",
            "#0096ff",
            "#9fe6b8",
            "#32c5e9",
            "#1d9dff",
          ],
          xAxis: {
            type: "category",
            // name: "就业人数",
            axisLabel: {
              color: "#fff",
            },
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
            data: ["大专", "本科", "研究生", "硕士", "博士"],
          },
          yAxis: {
            type: "value",
            name: "就业人数",
            nameTextStyle: {
              color: "#fff",
            },
            axisLabel: {
              color: "#hff",
            },
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
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
                      offset: 0.8,
                      color: "#7052f4",
                    },
                  ],
                  global: false, // 缺省为 false
                },
                // },
              },
              data: [3018, 5819, 1720, 1521, 1322],
            },
            {
              name: "省份就业详情",
              type: "pie",
              radius: ["30%", "50%"],
              center: ["75%", "25%"],
              roseType: "radius",
              data: [
                { value: 5018, name: "本科" },
                { value: 3819, name: "专科" },
                { value: 1720, name: "研究生" },
                { value: 1521, name: "硕士" },
                { value: 1322, name: "博士" },
              ],
              label: {
                show: false,
                position: "center",
                formatter(params) {
                  return params.name + params.percent + "%";
                },
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: "20",
                  fontWeight: "bold",
                },
              },
              labelLine: {
                show: false,
              },
            },
          ],
        }; //

        myChart.setOption(option);
      });
    });
    return {
      getState,
      chart,
      route,


    };
  },
};
</script>
<style lang="css" scoped>
#map {
  /* background-color: rgb(1, 2, 1); */

  width: 400px;
  height: 400px;
  /* background-color: aqua; */
  /* margin-left: -500px;
  margin-top: 355px; */
  position: absolute;
  right: 480px;
  top: 320px;
}
</style>
