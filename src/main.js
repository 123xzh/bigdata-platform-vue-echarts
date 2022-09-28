import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
// import store from './store'
// import $ from 'jquery' 
import 'animate.css';
import $ from 'jquery'
// 引用插件
// import "lib-flexible/flexible.js"


// Vue3.0

// Vue2.0的用法
// import * as echarts from "echarts"
// Vue.prototype.$echarts=echarts
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios,axios);

createApp(App).use(router).use(ElementPlus).mount('#app')