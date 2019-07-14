import Vue from 'vue'
import Router from 'vue-router'
import StoreDetails from "../components/myt/StoreDetails/StoreDetails.vue"
import CarDetails from "../components/myt/carDetails/carDetails.vue"
import Start from '../components/zzy/start/start'
import intro from '../components/zzy/start/intro'
import Shop from '../components/zzy/shop/shop'

Vue.use(Router)

export default new Router({
  routes: [
    {

      path: '/StoreDetails',
      name: 'StoreDetails',
      component:StoreDetails
    },
    {
      path:"/carDetails",
      name:"CarDetails",
      component:CarDetails
    },
    {
      path: '/intro',
      name: 'intro',
      component: intro
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/start',
      name: 'start',
      component: Start
    },
  ]
})
