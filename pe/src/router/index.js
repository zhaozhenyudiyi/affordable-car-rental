import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/zzy/start/start'
import Mine from "../components/mine/mine.vue"
// import Login from "../components/login/login"
import Mywallet from "../components/mine/my_wallet.vue"
import Myorder from "../components/mine/my_order.vue"
import Paysuccess from "../components/paysuccess/pay_success.vue"
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'index',
    //   component: index
    // },
    //  {
    //   path: '/',
    //   name: 'mine',
    //   component: Mine,
    // },
    {
      path: '/',
      name: 'Paysuccess',
      component: Paysuccess,
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
    },
    {
      path: '/my_wallet',
      name: 'Mywallet',
      component: Mywallet,
    },
    {
      path: '/my_order',
      name: 'Myorder',
      component: Myorder,
    },
    {
      path: '/paysuccess',
      name: 'Paysuccess',
      component: Paysuccess,
    }
  ]
})
