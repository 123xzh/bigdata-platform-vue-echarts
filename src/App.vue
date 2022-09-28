<template>
  <router-view />
</template>

<script>
import { provide } from "vue";
import * as echarts from "echarts";
import * as axios from "axios";

// 设置基准路径
export default {
  setup() {
    // provide("名字随便起","传递的内容")
    provide("echarts", echarts);
    provide("axios", axios);
  },
};
</script>

<style lang="less" >
body {
  background: url("@/assets/back.jpg") top center no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
.btom {
  height: 50px;
  width: 100%;
  // background-color: aqua;
}
.btom-w{
  display: flex;
  justify-content: center;
  color: aliceblue;
}
</style>
