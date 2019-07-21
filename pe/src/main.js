// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'
// Vue.use(VueAwesomeSwiper)


import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'; 
Vue.use(Mint);

import Axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, Axios)


import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

//地图插件
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap,{
  //ak 是在百度地图开发者平台申请的秘钥
  ak:'YOUR_APP_KEY',
  
})
import store from './vuex/vuex'
// Vue.use(Vant);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
