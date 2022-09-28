<template>
  <div ref="chart" id="map"></div>
</template>

<script>

import { useRoute } from "vue-router";

import {
  ref,
  onMounted,

} from "vue";
import * as echarts from "echarts";
import axios from "axios";



export default {
 
  setup() {
    const route = useRoute();
    async function getState() {
     
      var a = route.query.name;
     
      console.log("a", a);
      // axios
      //   .get(`http://chenjianccx.shop:20000/QueryNMMA?name=${a}`, {
         
      //     params: {
           
      //     },
      //   })
      //   .then(function (response) {
      //     let array = [];
         
      //     var resp = response.data.data.data;
      //     for (let i = 0; i < resp.length; i++) {
      //       let obj = { city: resp[i].cname, avgSalary: resp[i].avgSalary };
      //       array.push(obj);
      //     }
         
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   })
      //   .then(function () {
         
      //   });
    
    }

   
    const chart = ref();


    onMounted(() => {
      getState().then(() => {
        var trafficWay = [
          { name: "大数据分析", value: 2230 },
          { name: "大数据架构", value: 1850 },
          { name: "大数据开发", value: 1670 },
          { name: "大数据算法", value: 1670 },
          { name: "大数据挖掘", value: 1550 },
          { name: "大数据研发", value: 1320 },
          { name: "大数据运维", value: 1430 },
          { name: "数据库", value: 1120 },
        ];
        trafficWay.sort(() => 0.5 - Math.random());
        var data = [];
        var color = [
          "#BC0000",
          "#FF0000",
          "#FFC500",
          "#F4FF54",
          "#B6FF30",
          "#62FF54",
          "#54FFD7",
          "#54E2FF",
          "#0077F2",
        ];

        for (var i = 0; i < trafficWay.length; i++) {
          data.push(
            {
              value: trafficWay[i].value,
              name: trafficWay[i].name,
              itemStyle: {
                // normal: {
                borderWidth: 5,
                shadowBlur: 20,
                borderColor: color[i],
                shadowColor: color[i],
                // },
              },
              label: {
                color: color[i],
                fontSize: 15,
              },
            },
            {
              value: 6,
              name: "",
              itemStyle: {
                // normal: {
                label: {
                  show: false,
                  // color:"#000"
                },
                labelLine: {
                  show: false,
                },
                color: "rgba(0, 0, 0, 0)",
                borderColor: "rgba(0, 0, 0, 0)",
                borderWidth: 0,
                // },
              },
            }
          );
        }
        var seriesOption = [
          {
            name: "",
            type: "pie",
            // clockWise: true,
            radius: ["65%", "60%"],
            emphasis: {
              // scale: false,
            },
            avoidLabelOverlap: true,
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  // position: "outside",
                  formatter: function (params) {
                    var percent = 0;
                    var total = 0;
                    for (var i = 0; i < trafficWay.length; i++) {
                      total += trafficWay[i].value;
                    }
                    percent = ((params.value / total) * 100).toFixed(0);
                    if (params.name !== "") {
                      return params.name + "\t" + percent + "%";
                    } else {
                      return "";
                    }
                  },
                },
              },
            },
            labelLine: {
              length: 30,
              length2: 30,
              show: true,
              // color: "#00ffff",
              smooth: true,
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "18",
                fontWeight: "bold",
                // shadowBlur: 50,
              },
            },
            label: {
              fontFamily: "monospace",
            },
            data: data,
          },
        ];
        var myChart = echarts.init(chart.value);
        var option = {
          // backgroundColor: "#021124",
          color: color,
          title: {
            text: "专业热度",
            top: 220,
            left: "center",
            textStyle: {
              fontSize: 30,
              color: "rgba(0,141,236,0.9)",
            },
          },
          tooltip: {
            show: false,
          },

          toolbox: {
            show: false,
          },
          series: seriesOption,
        };

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
  width:600px;
  height: 400px;
  position: absolute;
  top: 320px;

}
</style>
