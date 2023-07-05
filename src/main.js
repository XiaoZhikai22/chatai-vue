import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import VueClipBoard from 'vue-clipboard2'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
// import './assets/theme.less';//是否覆盖全局主题样式
Vue.use(VueClipBoard)
//use：将第三方模块 注入到Vue实例对象中的方法
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

Vue.use(Antd);
new Vue({
  render: h => h(App)
}).$mount('#app')
