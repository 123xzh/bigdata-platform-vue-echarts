<template>
  <div class="backg">
    <div class="location">
      <div class="login">
        <router-link to="./index">
          <div class="base"></div>
          <!-- <h3 class="back">返回首页</h3> -->
        </router-link>
        <div class="test">
          <div class="content">
            <h1>登录</h1>
            <el-form>
              <el-input
                v-model="inputtest"
                placeholder="请输入账号"
                clearable
                class="test1"
              />
            </el-form>
            <el-form>
              <el-input
                v-model="inputpass"
                type="password"
                placeholder="请输入密码"
                show-password
                class="pass"
              />
            </el-form>
            <div class="btn-box">
              <button @click="testword()" id="test" class="login-btn">
                登录
              </button>
              <!-- <button id="pass" class="reigster-btn">注册</button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { ref } from "vue";
export default {
  setup() {
    const inputtest = ref("");
    const inputpass = ref("");
    const router = useRouter();
    var te = document.getElementById("test");

    function testword() {
      // if (!te.value) {
        // alert("请输入账号")
        // te1.innerHTML="用户名不规范 至少三位";
        // 页面跳转
        // window.location.href = "https://baidu.com";
        // window.navigate("https://baidu.com");
        // console.log("lsnnnvidnsnv");
        // 抛出一个字符串
        if(this.inputtest==="admin" && this.inputpass==="123456"){

          // this.$router.push("/page")
          ElMessage.success("登录成功");
          router.push({ path: "/page" });
          }else{
            ElMessage.error("用户名或密码错误");
          }
        // throw 'Error！';
        // }else{
      // }
      // routerlink=()
      // window.location.href = "\views\homePage.vue";
    }

    return {
      inputtest,
      inputpass,
      testword,
    };
  },
};
</script>

<style scoped>
.backg {
  /* margin: 0; */
  /* margin-left: 300px; */
  /* background-image: url("./img/ee29ecbf883211ebb6edd017c2d2eca2.jpg"); */
  background-image: url("@/assets/back1.jpg");
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: contain;
  background-size: 100% 100%;
  height: 100%;
  position: fixed;
  width: 100%;
  text-align: center;
}
.location {
  display: flex;
  justify-content: center;
}
.login {
  /* border: solid red 1px; */
  margin-top: 200px;
  width: 450px;
  height: 300px;
  background: rgba(235, 235, 235, 0.7);
  border-radius: 20px;
}
.back {
  font-size: 20px;
  /* float: left; */
  color: black;
}
.back:hover {
  color: rgb(84, 81, 81);
}
.base {
  position: relative;
  right: 15px;
  padding: 0px 0px;
  /* font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif; */
  /* font-size: 1.4rem; */
  /* background-color: #00b3b4; */
  background-size: 20px 10px;
  /* border: 1px solid #555;   */
  color: rgb(23, 119, 187);
  transition: all ease 0.3s;
  /* opacity: 1; */
  cursor: pointer;
}

.base::after {
  position: absolute;
  /* top: 50%; */
  top: 20px;
  left: 20px;
  transform: translateY(-50%);
  content: "<<返回主页";
  font-size: 20px;
  transition: all ease 0.3s;
  opacity: 1;
  /* color: aqua; */
}

.base:hover::after {
  left: 1.4em;
  opacity: 1.3;
  /* transition-duration: 2s; */
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgb(13, 71, 206) 0%,
    rgb(233, 148, 148) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* color: aqua; */
  /* transition: all ease 0.3s; */
}
.test {
  position: absolute;
  margin-top: 40px;
  margin-left: 100px;
  /* margin-right: 200px; */
  /* margin-top: 100px; */
  width: 250px;
  /* text-align: center; */
  /* background-color: aqua; */
}
.btn-btn {
  width: 200px;
}
.login-btn,
.reigster-btn {
  width: 90px;
  height: 30px;
  /* opacity: 0.7; */
  /* left: 20px; */
  margin: 25px 13px;
  background-color: rgba(0, 183, 255, 0.932);
  /* margin-left: 10px; */
  transition: all 0.6s;
  /* outline:none; */
  border: 0;
  border-radius: 5px;
  font-family: 楷体;
  font-size: 20px;
  cursor: pointer;
}
.login-btn:hover,
.reigster-btn:hover {
  background-color: rgba(0, 140, 255, 0.8);
  /* background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%); */
}

h1 {
  /* color: aqua; */
  margin-left: -10px;
  /* font-family: "Microsoft YaHei"; */
  font-family: 宋体;
}
.test1 {
  height: 40px;
  width: 230px;
  margin-top: 30px;
  font-size: 15px;
  border-radius: 5px;
}
.pass {
  height: 40px;
  width: 230px;
  margin-top: 30px;
  font-size: 15px;
  border-radius: 5px;
}
</style>