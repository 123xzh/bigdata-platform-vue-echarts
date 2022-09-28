<template>
  <div>
    <header>
      <h1>全国就业平均岗位分析</h1>
      <div class="btn">
        <router-link to="/login">
          <h2>登录</h2>
        </router-link>
        <router-link to="/index">
          <h2>首页</h2>
        </router-link>
      </div>
    </header>
    <!-- 大容器 -->
    <section class="container">
      <!-- 左容器 -->
      <section class="itemLeft">
        <ItemPage>
          <ItemOne />
        </ItemPage>
        <ItemTwo/>
      </section>
      <!-- 中容器 -->
      <section class="itemCenter">
        <!-- 中国地图 -->
        <MapPage />
        <!-- <ItemPage2> -->
        <!-- 折线&柱状 -->
        <!-- <ItemFour/> -->
        <!-- </ItemPage2> -->
      </section>
      <!-- 右容器 -->
      <section class="itemRight">
        <ItemPage1>
          <!-- 侧边柱状图 -->
          <ItemThree />
        </ItemPage1>
      </section>
    </section>
  </div>
  <div class="btom">
    <h2 class="btom-w">全国就业平均岗位分析V1.0</h2>
  </div>
  <!-- <router-view></router-view> -->
</template>

<script>
import ItemPage from "@/components/Echarts/itemPage.vue";
import ItemPage1 from "@/components/Echarts/itemPage1.vue";
import ItemPage2 from "@/components/Echarts/itemPage2.vue";

import ItemOne from "@/components/Echarts/itemOne.vue";
import ItemTwo from "@/components/Echarts/itemTwo.vue";
import ItemThree from "@/components/Echarts/itemThree.vue";
// import ItemFour from "@/components/Echarts/itemFour.vue";

// import MapPage from "@/components/mapPage.vue";
import MapPage from "@/components/Echarts/mapPage.vue";

// import { inject } from "vue";
export default {
  components: {
    ItemPage,
    ItemPage1,
    ItemPage2,
    ItemOne,
    ItemTwo,
    ItemThree,
    // ItemFour,
    MapPage,
  },

  setup() {

  },
};
</script>

<style lang="less" scoped>
.left1 {
  float: left;
}
header {
  height: 45px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  // display: inline-block;
  // 标题的文字样式
  h1 {
    font-size: 25px;
    color: #fff;
    text-align: center;
    line-height: 40px;
  }
  .btn {
    width: 130px;
    height: 30px;
    // background-color: aqua;
    // position: relative;
    // position: absolute;
    float: right;
    margin-top: -35px;
  }
  // .butn:hover{
  //   color: red;
  // }

  h2 {
    font-size: 20px;
    color: #fff;
    // text-align: center;
    line-height: 35px;
    float: right;
    width: 40px;
    text-align: center;
    // position: absolute;
    // position: relative;
    // top: 20px;
    // margin-top: -30px;
    margin-right: 10px;
    // bottom: 40px;
    // margin: 10px ;
  }
}
h2:hover {
  transition: 0.9s;
  color: rgb(0, 89, 255);
}
// html{
//   scroll-behavior: smooth;
// }
// 大容器的样式
.container {
  // 最大最小的宽度
  min-width: 1200px;
  max-width: 2048px;
  margin: 0 auto;
  padding: 10px 10px 0;
  // background-color: gray;
  display: flex;
  // 设置左右在页面的份数
  .itemLeft,
  .itemRight {
    flex: 3;
  }
  .itemCenter {
    flex: 5;
    // height: 10.5rpx;
    // border: 1px solid blue;
    padding: 5px;
    margin: 0px;
  }
}
.qf {
  position: absolute;
  // lef
  left: 10px;
  // margin-right: 300px;
}
</style>
