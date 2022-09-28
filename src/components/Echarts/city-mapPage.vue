<template>
  <div class="backg">
    <div ref="chart" id="map1"></div>
    <router-view></router-view>
  </div>
</template>

<script>
// import "./js/area";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
// import { toRaw } from "@vue/reactivity";
import {
  ref,
  onMounted,
  reactive,
  onUnmounted,
  // provide,
  // provide,
} from "vue";
import $ from "jquery";
import * as echarts from "echarts";
export default {
  watch: {
    // 监听路由变化，路由变化的时候请求页面数据
    $route: function () {
      this.getState();
    },
  },
  setup() {
    const route = useRoute();
    // let $http = inject("axios");
    let as = reactive({});
    const router = useRouter();

    var d = null;
    function setData() {}
    async function getState(param) {}

    const chart = ref();

    onMounted(() => {
      setData();
      getState().then(() => {
        let a = route.query.name;
        console.log(a);
        $.getJSON(`/map/province/city-map/${a}.json`, (data) => {
          d = data;
          getState(d);
          echarts.registerMap("citymap", data);
          var myChart = echarts.init(chart.value);
          var option = {
            visualMap: {
              min: 0,
              max: 5000,
              show: false,
              splitNumber: 5,
              inRange: {
                color: ["#d94e5d", "#eac736", "#50a3ba"].reverse(),
              },
              textStyle: {
                color: "#fff",
              },
            },

            geo: {
              map: "citymap",
              label: {
                // normal: {
                show: true,
                color: "#fff",
                // },
              },
              emphasis: {
                label: {
                  show: true,
                  color: "#fff",
                },
              },
              roam: false,
              itemStyle: {
                // normal: {
                areaColor: "#031525",
                borderWidth: 0,
                borderColor: "#00ffff",
                shadowColor: "#3C8CE7",
                shadowBlur: 15,
                // },
              },
              emphasis: {
                itemStyle: {
                  areaColor: "skyblue", // 鼠标选择区域颜色
                  shadowOffsetX: 0,
                  shadowOffsetY: 0,
                  shadowBlur: 20,
                  borderWidth: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)",
                },
                label: {
                  show: true,
                  fontSize: "20",
                  fontWeight: "bold",
                  // shadowBlur: 50,
                  color: "#034FFF",
                },
              },
              left: 50,
              right: 10,
              top: 30,
              bottom: 70,
            },
            tooltip: {
              show: true,
              triggerOn: "mousemove",
              backgroundColor: "rgba(29, 38, 71)",
              // 额外附加的阴影
              extraCssText: "box-shadow:0 0 4px rgba(11, 19, 43,0.8)",
              textStyle: {
                // color: "background-image: linear-gradient( 135deg, #FFF720 10%, #3CD500 100%);",
                fontsize: 30,
              },
            },
            grid: {
              bottum: "10%",
              left: "50%",
              width: "110%",
            },
            series: [
              {
                name: "活跃人数分布",
                type: "heatmap",
                //   zoom:4.3,
                coordinateSystem: "geo",
                blurSize: 30,
                data: [],
              },
            ],
          };

          myChart.setOption(option);
          onUnmounted(() => {
            if (myChart) {
              // console.log(myChart,"已经清空");
              myChart.clear();
              myChart.dispose();
              myChart = null;
            }
          });
        });
      });
    });

    return {
      as,
      getState,
      chart,
      router,
      route,
      setData,
    };
  },
};
</script>
<style lang="less" scoped>
#map1 {
  width: 400px;
  height: 350px;
  position: absolute;

  z-index: 999;
}
</style>
