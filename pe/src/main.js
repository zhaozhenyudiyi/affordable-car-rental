// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Swiper from 'swiper'; 
import Mint from 'mint-ui';
import Vant from 'vant';
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
 

import 'swiper/dist/css/swiper.min.css';
import 'mint-ui/lib/style.css'; 
import 'vant/lib/vant-css/index.css';

Vue.use(VueAxios, axios)
Vue.use(Mint);
Vue.use(Vant);
Vue.use(Swiper);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
