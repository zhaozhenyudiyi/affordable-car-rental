import Vue from 'vue'
import Router from 'vue-router'
// import StoreDetails from '../../src/components/myt/StoreDetails'
import StoreDetails from "../components/myt/StoreDetails/StoreDetails.vue"
import CarDetails from "../components/myt/carDetails/carDetails.vue"
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
    }
  ]
})
