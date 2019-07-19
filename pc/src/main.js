
import Vue from 'vue';
import App from './App';
import router from './router';
// import axios from 'axios';
// import VueAxios from 'vue-axios';
// import Swiper from 'swiper'; 
// import Mint from 'mint-ui';
// import Vant from 'vant';


import axios from 'axios';
import VueAxios from 'vue-axios';


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
 
Vue.use(ElementUI);


// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts



Vue.prototype.$axios = axios
Vue.use(VueAxios, axios)



Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
