<template>
  <div class="backg">
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
        <citymapPage />
      </section>
      <!-- 中容器 -->
      <section class="itemCenter">
        <chartTwo />
        <chartFive />
      </section>
      <!-- 右容器 -->
      <section class="itemRight">
        <chartOne />
        <chartFour />
      </section>
    </section>
  </div>
  <div class="btom">
    <h2 class="btom-w">全国就业平均岗位分析V1.0</h2>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { onMounted, reactive } from "vue";
import chartOne from "./province/echarts/chartOne.vue";
import chartTwo from "./province/echarts/chartTwo.vue";
import chartFour from "./province/echarts/chartFour.vue";
import chartFive from "./province/echarts/chartFive.vue";
import citymapPage from "./city-mapPage.vue";

export default {
  components: {
    chartOne,
    chartTwo,
    chartFour,
    chartFive,
    citymapPage,
  },
  setup() {
    let as = reactive({});
    const router = useRouter();

    async function getState() {}

    onMounted(() => {
      getState().then(() => {});
    });
    return {
      /////
      as,
      getState,
      router,
    };
  },
};
</script>
<style lang="less" scoped>
.left1 {
  float: left;
  position: absolute;
  top: 5px;
}

.btom {
  position: absolute;
  top: 850px;
}
header {
  height: 45px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  h1 {
    font-size: 25px;
    color: #fff;
    text-align: center;
    line-height: 40px;
  }
  .btn {
    width: 100px;
    height: 30px;
    float: right;
    margin-top: -35px;
  }

  h2 {
    font-size: 20px;
    color: #fff;

    line-height: 30px;
    float: right;
    margin-right: 10px;
  }
}

// 大容器的样式
.container {
  // 最大最小的宽度
  position: absolute;
  // display: block;
  margin-left: 500px;
  // margin-bottom: -800px;
  width: 1500px;
  // background-color: aqua;
  margin: 0 auto;
  padding: 10px 10px 0;
  //   background-color: gray;
  display: flex;
  // 设置左右在页面的份数
  .itemRight {
    flex: 3;
  }
  .itemCenter {
    flex: 5;

    margin: 0px;
  }
}
.q4 {
  color: white;
  z-index: 999;
  width: 100px;
  height: 50px;
  position: absolute;
  top: 400px;
  float: left;
}
</style>
