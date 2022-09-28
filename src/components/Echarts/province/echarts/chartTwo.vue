<template>
  <!-- 柱状图 -->
  <div ref="chart" id="map"></div>
</template>

<script>
import { useRoute } from "vue-router";
import {
  ref,
  onMounted,
  inject,
  // toRaw,
  reactive,
} from "vue";
import * as echarts from "echarts";






export default {

  setup() {
    let $http = inject("axios");
    let as = reactive({});
    let xdata = reactive({});
    let ydata = reactive({});
    const route = useRoute();
    let data = reactive([]);
    async function getState() {



    }
    function setData() {
      //   console.log(as);
      console.log("++++", data);
      xdata = [
        "广州市",
        "深圳市",
        "东莞市",
        "肇庆市",
        "江门市",
        "中山市",
        "珠海市",
        "惠州市",
        "清远市",
        "佛山市",
        "河源市",
        "汕尾市",
        "汕头市",
        "揭阳市",
        "潮州市",
        "梅州市",
        "河源市",
        "韶关市",
        "云浮市",
        "阳江市",
        "茂名市",
        "湛江市",
      ];
      // ydata = data.data.data.data.map((v)=>v.avgSalary);
      ydata = [9512, 5862, 6343, 5556,6654,6700,5000,6566,5656,6788,7800,5444,5670,5567,5666,5655,4788,8000,4900,4650,5330,5400];

    }
    const chart = ref();
    // var timer;
    const offsetX = 20;
    const offsetY = 10;
    // 绘制左侧面
    const CubeLeft = echarts.graphic.extendShape({
      shape: {
        x: 0,
        y: 0,
      },
      buildPath: function (ctx, shape) {
        // 会canvas的应该都能看得懂，shape是从custom传入的
        const xAxisPoint = shape.xAxisPoint;
        // console.log(shape);
        const c0 = [shape.x, shape.y];
        const c1 = [shape.x - offsetX, shape.y - offsetY];
        const c2 = [xAxisPoint[0] - offsetX, xAxisPoint[1] - offsetY];
        const c3 = [xAxisPoint[0], xAxisPoint[1]];
        ctx
          .moveTo(c0[0], c0[1])
          .lineTo(c1[0], c1[1])
          .lineTo(c2[0], c2[1])
          .lineTo(c3[0], c3[1])
          .closePath();
      },
    });
    // 绘制右侧面
    const CubeRight = echarts.graphic.extendShape({
      shape: {
        x: 0,
        y: 0,
      },
      buildPath: function (ctx, shape) {
        const xAxisPoint = shape.xAxisPoint;
        const c1 = [shape.x, shape.y];
        const c2 = [xAxisPoint[0], xAxisPoint[1]];
        const c3 = [xAxisPoint[0] + offsetX, xAxisPoint[1] - offsetY];
        const c4 = [shape.x + offsetX, shape.y - offsetY];
        ctx
          .moveTo(c1[0], c1[1])
          .lineTo(c2[0], c2[1])
          .lineTo(c3[0], c3[1])
          .lineTo(c4[0], c4[1])
          .closePath();
      },
    });
    // 绘制顶面
    const CubeTop = echarts.graphic.extendShape({
      shape: {
        x: 0,
        y: 0,
      },
      buildPath: function (ctx, shape) {
        const c1 = [shape.x, shape.y];
        const c2 = [shape.x + offsetX, shape.y - offsetY]; //右点
        const c3 = [shape.x, shape.y - offsetX];
        const c4 = [shape.x - offsetX, shape.y - offsetY];
        ctx
          .moveTo(c1[0], c1[1])
          .lineTo(c2[0], c2[1])
          .lineTo(c3[0], c3[1])
          .lineTo(c4[0], c4[1])
          .closePath();
      },
    });
    onMounted(() => {
      getState().then(() => {
        setData();
        // 注册三个面图形
        echarts.graphic.registerShape("CubeLeft", CubeLeft);
        echarts.graphic.registerShape("CubeRight", CubeRight);
        echarts.graphic.registerShape("CubeTop", CubeTop);
        const VALUE = ydata;
        VALUE.sort(function (a, b) {
          return b - a;
        });
        // console.log(VALUE);
        var myChart = echarts.init(chart.value);
        var option = {
          // backgroundColor: "#012366",
          title: {
            text: "全省城市平均薪资情况",
            left: "30%",
            textStyle: {
              fontSize: 25,
              color: "rgba(249, 249, 249, 1)",
            },
            subtextStyle: {
              fontSize: 20,
            },
            show: true,
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "none",
            },
            formatter: function (params) {
              const item = params[1];
              return item.name + "-平均薪资" + item.value+"元";
            },
          },
          grid: {
            left: "1%",
            right: "8%",
            top: "25%",
            bottom: "1%",
            containLabel: true,
          },
          xAxis: {
            type: "category",
            axisLine: {
              show: false,
            },
            data: xdata,
            axisLine: {
              show: true,
              lineStyle: {
                width: 2,
                color: "#2B7BD6",
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              fontSize: 14,
              rotate: 25,
              // textStyle: {
              color: "#33FFFF",
            },
            // axisLabel: {
            //       rotate: -45,
            //       // textStyle: {
            //         color: "#33FFFF",
            //       // },
            //     },
          },
          yAxis: {
            type: "value",

            axisLine: {
              show: true,
              lineStyle: {
                width: 2,
                color: "#2B7BD6",
              },
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "#153D7D",
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              fontSize: 14,
              color: "#33FFFF",
            },
            // boundaryGap: ['20%', '20%'],
          },
          series: [
            {
              type: "custom",
              //  data: ydata,
              //柱状图自动排序，排序自动让Y轴名字跟着数据动
              // realtimeSort: true,
              markPoint: {
                data: [
                  {
                    type: "max",
                    name: "最大值",
                    label: {
                      formatter: "最高",
                    },
                  },
                  {
                    type: "min",
                    name: "最小值",
                    label: {
                      formatter: "最低",
                    },
                  },
                ],
                symbolOffset: [0, -40], //位置调整
              },
              markLine: {
                data: [
                  {
                    silent: false,
                    type: "average",
                    name: "平均值",
                    tooltip: {
                      show: false,
                      formatter: "城市平均薪资{a}",
                    },
                    // label: {
                    //   position: "end", // 表现内容展示的位置
                    //   padding: [0, 0, 0, -70],
                    //   formatter: "平均薪资", // 标线展示的内容
                    //   color: "red", // 展示内容颜色
                    // },
                    // show: false,
                    emphasis: {
                      // disabled: true,
                      lineStyle: {
                        color: "#9B99FF",
                        type: "line",
                        // cap: "square",
                      },
                    },
                  },
                ],
                lineStyle: {
                  width: 3,
                },
                label: {
                  show: true, // 是否展示文字
                  formatter: function (params) {
                    return "平均薪资\n" + params.value+"元";
                  },
                  padding: [0, 0, 0, -10],
                  position: "end",
                  color: "#00FFFF",
                  fontSize: "13",
                  fontFamily: "微软雅黑",
                  fontWeight: "bolder",
                  // marginTop:'35px',
                  // fontweight:900,
                },
              },
              // label: {
              //   show: true,
              //   formatter: "{b}: {d}",
              //   //rotate: 30, // 旋转30度
              //   // 配置文档 series => type:'bar' => Label
              // },
              renderItem: (params, api) => {
                const location = api.coord([api.value(0), api.value(1)]);
                return {
                  type: "group",
                  children: [
                    {
                      type: "CubeLeft",
                      shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0]),
                      },
                      style: {
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                          {
                            offset: 0,
                            color: "#92FE9D",
                          },
                          {
                            offset: 1,
                            color: "#00C9FF",
                          },
                        ]),
                      },
                    },
                    {
                      type: "CubeRight",
                      shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0]),
                      },
                      style: {
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                          {
                            offset: 0,
                            color: " #ffc500",
                          },
                          {
                            offset: 1,
                            color: "#ffffff",
                          },
                        ]),
                      },
                    },
                    {
                      type: "CubeTop",
                      shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0]),
                      },
                      style: {
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                          {
                            offset: 0,
                            color: "#43C4F1",
                          },
                          {
                            offset: 1,
                            color: "#28A2CE",
                          },
                        ]),
                      },
                    },
                  ],
                };
              },
              data: VALUE,
            },
            {
              type: "bar",
              label: {
                // normal: {
                show: true,
                position: "top",
                // formatter: (e) => {
                //   return e.value + "次";
                //   /*console.log(e)
                //           switch (e.name) {
                //               case '1001':
                //                   return e.value;
                //               case '1002':
                //                   return VALUE[1];
                //               case '1003':
                //                   return VALUE[2];
                //           }*/
                // },
                fontSize: 16,
                color: "#43C4F1",
                offset: [0, -25],
                // },
              },
              itemStyle: {
                color: "transparent",
              },
              // tooltip: {

              // },
              data: VALUE,
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
      setData,
      $http,
      as,
      xdata,
      ydata,
    };
  },
};
</script>
<style lang="css" scoped>
#map {
  /* background-color: rgb(1, 2, 1); */
  width: 1100px;
  height: 300px;
  position: absolute;
  left: 400px;
  /* background-color: aqua; */
  /* margin-left: 470px;
  margin-top: 20px; */
}
</style>
