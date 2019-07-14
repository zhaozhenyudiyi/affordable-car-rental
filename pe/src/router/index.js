import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
// import StoreDetails from '../../src/components/myt/StoreDetails'
import StoreDetails from "../components/myt/StoreDetails/StoreDetails.vue"
import CarDetails from "../components/myt/carDetails/carDetails.vue"
=======
import Start from '../components/zzy/start/start'
import intro from '../components/zzy/start/intro'
import Shop from '../components/zzy/shop/shop'

>>>>>>> zhaozhenyudiyi/master
Vue.use(Router)

export default new Router({
  routes: [
    {
<<<<<<< HEAD
      path: '/StoreDetails',
      name: 'StoreDetails',
      component:StoreDetails
    },
    {
      path:"/carDetails",
      name:"CarDetails",
      component:CarDetails
    }
=======
      path: '/',
      name: 'shop',
      component: Shop
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
>>>>>>> zhaozhenyudiyi/master
  ]
})
