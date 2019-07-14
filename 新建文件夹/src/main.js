// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'



import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
import 'font-awesome/css/font-awesome.min.css' 
Vue.use(VueAwesomeSwiper)
import axios from 'axios'
Vue.prototype.$axios=axios
 
import Vuex from 'vuex'
Vue.use(Vuex)

var store=new Vuex.Store({
  state:{
    num:100,
  },
  mutations:{
    add(state,v){
      state.num+=v;
    }
  }
})



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // Vue,
  components: { App },
  template: '<App/>'
})
