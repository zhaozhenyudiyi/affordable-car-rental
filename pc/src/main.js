// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import axios from 'axios';
import VueAxios from 'vue-axios';
// import Swiper from 'swiper'; 
// import Mint from 'mint-ui';
// import Vant from 'vant';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
 
Vue.use(ElementUI);
// import 'swiper/dist/css/swiper.min.css';
// import 'vant/lib/vant-css/index.css';

Vue.use(VueAxios,axios);
// Vue.use(Mint);
// Vue.use(Vant);
// Vue.use(Swiper);
import axios from 'axios';
import VueAxios from 'vue-axios';

/

Vue.prototype.$axios = axios
Vue.use(VueAxios, axios)
//ElementUI



Vue.use(ElementUI);

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
