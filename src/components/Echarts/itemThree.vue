<template>
  <div class="chart" id="myEchartsThree">图表的容器</div>
</template>

<script>
import { onMounted,onUnmounted} from "vue";
import * as echarts from "echarts";
export default {

  name: "data_page",
  setup() {
    let xdata = [];
    let ydata = [];

    // shu()
    function setData() {

    }

    async function getState() {
    }
    onMounted(() => {

      let myChart = echarts.init(document.getElementById("myEchartsThree"));
      getState().then(() => {
        setData();

        myChart.setOption({
          // backgroundColor: "",
          title: {
            text: "Top20 热门城市招聘",
            left: "25%",
            textStyle: {
              fontSize: 20,
              color: "rgba(249, 249, 249, 1)",
            },
            subtextStyle: {
              fontSize: 20,
            },
            show: true,
          },
          grid: {
            // top: "10%",
            height: "90%",
            width: "80%",
            left: "16%",
            right: "20%",
          },
          tooltip: {
            show: true,
            trigger: "axis",
            axisPointer: {
              lineStyle: {
                color: "#57617B", //显示竖线颜色
              },
            },
            backgroundColor: "rgba(128, 128, 128, 0.9)", //tooltip背景色
            borderColor: "#2BEDF6", //tooltip边框颜色
            borderWidth: 2,
            formatter: function (param) {
              //自定义tooltip内容
              var text = "";
              text +=
                '<div style="display:flex;flex-direction:row;  background-image: linear-gradient(135deg,#0013BC,red); background-clip:text;-webkit-background-clip:text;  color: transparent;">' +
                '<div style="display:flex;flex-direction:column;">' +
                "<span>" +
                // "平均薪资"
                param[0].name +
                "</span>" +
                "<span>" +
                "招聘数量：" +
                param[0].value +
                "人</span>";
              ("</div>");
              ("</div>");
              return text;
            },
          },
          xAxis: {
            type: "value",
            position: "top",
            // name: "城市",
            show: true,
            axisTick: {
              show: true,
              alignWithLabel: true,
              inside: true,
              //  alignWithLabel:true
            },
            axisLabel: {
              show: true,
              // textStyle: {
              color: "#c3dbff", //更改坐标轴文字颜色
              fontSize: 10, //更改坐标轴文字大小
              // },
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#58CFFB",
                width: 1, //这里是为了突出显示加上的
              },
            },
            splitLine: {
              show: false,
            },
          },
          yAxis: {
            show: true,
            type: "category",
            name: "城市", //y轴名称
            nameLocation: "start",
            nameTextStyle: {
              color: "#D8D8D9",
              // fontStyle: "normal",
              // fontWeight: "bold",
              // verticalAlign: "bottom",
              fontSize: 12,
              lineHeight: 10,
              padding: [-30, -30, 10, -30],
            },
            axisPointer: {
              //坐标轴指示器，坐标轴触发有效，
              type: "shadow", //默认为line，line直线，cross十字准星，shadow阴影
              crossStyle: {
                color: "#fff",
              },
            },

            //升序
            inverse: true,
            axisLabel: {
              // show: true,
              // textStyle: {
              color: "#c3dbff", //更改坐标轴文字颜色
              fontSize: 14, //更改坐标轴文字大小
              // },
            },
            axisLine: {
              lineStyle: {
                color: "#58CFFB",
                width: 1,
              },
            },
            data: [
              "北京",
              "长沙",
              "成都",
              "大连",
              "佛山",
              "福州",
              "广州",
              "杭州",
              "合肥",
              "南京",
              "宁波",
              "上海",
              "深圳",
              "苏州",
              "无锡",
              "武汉",
              "西安",
              "郑州",
              "重庆",
              "珠海",
              "甘肃"
            ],
          },
          series: [
            {
              data: [
                3002, 555, 1442, 273, 318, 221, 2614, 1454, 464, 1414, 307,
                4462, 3740, 845, 366, 1686, 685, 227, 464, 214,322
              ],
              //柱状图自动排序，排序自动让Y轴名字跟着数据动
              realtimeSort: true,
              type: "bar",
              barWidth: 11,
              barGap: "10%" /*多个并排柱子设置柱子之间的间距*/,
              barCategoryGap: "20%" /*多个并排柱子设置柱子之间的间距*/,
              // itemStyle: {
              //   // 方法一的写法
              //   color: {
              //     type: "linear",
              //     x: 0, //右
              //     y: 0.2, //下
              //     x2: 0.7, //左
              //     y2: 1, //上
              //     colorStops: [
              //       {
              //         offset: 0,
              //         color: "pink", // 0% 处的颜色
              //       },
              //       {
              //         offset: 0.2,
              //         color: "#9878f7", // 70% 处的颜色
              //       },
              //       {
              //         offset: 0.7,
              //         color: "#2378f7", // 70% 处的颜色
              //       },
              //       {
              //         offset: 1,
              //         color: "#83bff6", // 100% 处的颜色
              //       },
              //     ],
              //   },
              // },
              // 方法二
              itemStyle: {
                borderRadius: [0, 20, 20, 0],
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "#005eaa",
                  },
                  {
                    offset: 0.5,
                    color: "red",
                  },
                  {
                    offset: 1,
                    color: "yellow",
                  },
                ]),
              },
            },
          ],
        });
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
    return {
      getState,
      xdata,
      ydata,
      setData,
    };
  },
};
</script>

<style scoped>
.chart {
  height: 680px;
  width: 400px;
  /* margin-left: 200px; */
  /* background-color: aqua; */
}
.qe {
  width: 500px;
  height: 500px;
  /* border: solid 1px red; */
  /* float: right;
  margin-top: -00px; */
  position: absolute;
  top: 100px;
  left: 920px;
}
h2 {
  color: aliceblue;
}
/* h2:hover{
  transform: scale(2);
} */
</style>
