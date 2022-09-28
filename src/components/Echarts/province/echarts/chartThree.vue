<template>
  <!-- 漏斗图 -->
  <div ref="chart" id="map"></div>
</template>

<script>

import {
  ref,
  onMounted,

} from "vue";







export default {
  setup() {
    async function getState() {
      
    }
   
    const chart = ref();
 

    onMounted(() => {
    
      //       name: "TIT",
      //       type: "funnel",
      //       left: "center",
      //       width: "90%",
      //       // sort: 'ascending',
      //       label: {
      //         // normal: {
      //         formatter: "{b}",
      //         backgroundColor: "#6D480E",
      //         color: "#fff",
      //         borderRadius: 3,
      //         padding: [5, 5, 1, 5],
      //         shadowBlur: 0,
      //         shadowOffsetX: 2,
      //         shadowOffsetY: 2,
      //         shadowColor: "#9E853A",
      //         // },
      //       },
      //       labelLine: {
      //         // normal: {
      //         show: true,
      //         length: 30,
      //         lineStyle: {
      //           type: "solid",
      //           color: "#6D480E",
      //           //   },
      //         },
      //       },
      //       itemStyle: {
      //         // normal: {
      //         opacity: 0.5,
      //         borderColor: "#000",
      //         borderWidth: 2,
      //         shadowBlur: 0,
      //         shadowOffsetX: 0,
      //         shadowOffsetY: 10,
      //         shadowColor: "rgba(0, 0, 0, .6)",
      //         // },
      //       },
      //       tooltip: {
      //         show: false,
      //       },
      //       data: [
      //         {
      //           value: 10,
      //           name: "A",
      //         },
      //         {
      //           value: 20,
      //           name: "B",
      //         },
      //         {
      //           value: 40,
      //           name: "C",
      //         },
      //         {
      //           value: 60,
      //           name: "D",
      //         },
      //         {
      //           value: 80,
      //           name: "E",
      //         },
      //         {
      //           value: 100,
      //           name: "F",
      //         },
      //       ],
      //     },
      //     {
      //       name: "TIT",
      //       type: "funnel",
      //       left: "center",
      //       width: "80%",
      //       maxSize: "80%",
      //       // sort: 'ascending',
      //       emphasis: {
      //         // normal: {
      //         position: "inside",
      //         formatter: "{c}%",
      //         textStyle: {
      //           color: "#fff",
      //           fontSize: 14,
      //           //   },
      //         },
      //         label: {
      //           position: "center",
      //           formatter: "{b}: {c}%",
      //         },
      //       },
      //       label: {
      //         position: "inside",
      //         formatter: "{b}: {c}%",
      //       },
      //       itemStyle: {
      //         // normal: {
      //         opacity: 0.9,
      //         borderColor: "#B6883F",
      //         borderWidth: 2,
      //         shadowBlur: 0,
      //         shadowOffsetX: 0,
      //         shadowOffsetY: 10,
      //         shadowColor: "rgba(0, 0, 0, .6)",
      //         // },
      //       },
      //       data: [
      //         {
      //           value: 2,
      //           name: "A",
      //         },
      //         {
      //           value: 5,
      //           name: "B",
      //         },
      //         {
      //           value: 12,
      //           name: "C",
      //         },
      //         {
      //           value: 18,
      //           name: "D",
      //         },
      //         {
      //           value: 25,
      //           name: "E",
      //         },
      //         {
      //           value: 40,
      //           name: "F",
      //         },
      //       ],
      //     },
      // ],
      // };
      //   myChart.setOption(option);
      // });
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

  width: 500px;
  height: 550px;
  /* background-color: aqua; */
  /* margin-left: 20px; */
  margin-top: 550px;
}
</style>
