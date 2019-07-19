import Vue from 'vue'
import Router from 'vue-router'

import Domestic from '../components/QSS/Parity/domestic/domestic'
import Freeride from '../components/QSS/Parity/Freeride/Freeride.vue'
import Timesharing from '../components/QSS/Parity/Timesharing/Timesharing'
import Longrent from '../components/QSS/Parity/Longrent/Longrent'
import Pages from '../components/QSS/Parity/pagas/pagas.vue'
import YearSent from '../components/QSS/Parity/Longrent/year_sent/year_sent.vue'
import BestLong from '../components/QSS/Parity/Longrent/bestlong_sent/bestlong_sent.vue'


import Mine from "../components/chw/mine/mine.vue"
import Mywallet from "../components/chw/mine/my_wallet.vue"
import Myorder from "../components/chw/mine/my_order.vue"
import Paysuccess from "../components/chw/paysuccess/pay_success.vue"


import StoreDetails from "../components/myt/StoreDetails/StoreDetails.vue"
import CarDetails from "../components/myt/carDetails/carDetails.vue"


import Pcomments from './../components/DMH/Pcomments/comments'
import Evaluation from './../components/DMH/Evaluation/Evaluation'
import Recharge from './../components/DMH/Recharge/Recharge'
import Choice from './../components/DMH/UrbanChoice/Choice'


import Start from '../components/zzy/start/start'
import intro from '../components/zzy/start/intro'
import Shop from '../components/zzy/shop/shop'
import Login from './../components/swh/login/login'

import Registered from './../components/swh/registered/registered'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/pages',
      name: 'Pages',
      component: Pages,
      children: [
        {
          path: '/',
          name: 'Domestic',
          component: Domestic
        },
        {
          path: 'domestic',
          name: 'Domestic',
          component: Domestic
        },
        {
          path: 'freeride',
          name: 'Freeride',
          component: Freeride
        },
        {
          path: 'timesharing',
          name: 'Timesharing',
          component: Timesharing
        },
        {
          path: 'longrent',
          name: 'Longrent',
          component: Longrent,
          children:[
            {
              path: '/',
              name: 'YearSent',
              component: YearSent
            },
            {
              path: 'year_sent',
              name: 'YearSent',
              component: YearSent
            },
            {
              path: 'bestlong_sent',
              name: 'BestLong',
              component: BestLong
            }
          ]
        },
      ]
    },
    {
      path: '/paysuccess',
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
    },
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
      path: '/comments',
      name: 'Pcomments',
      component: Pcomments
    },
    {
      path:'/evaluation',
      name: 'Evaluation',
      component:Evaluation
    },
    {
      path:'/recharge',
      name:'Recharge',
      component:Recharge
    },
    {
      path:'/choice',
      name:'Choice',
      component:Choice
    },
    {
      path: '/recharge',
      name: 'Recharge',
      component: Recharge
    },
    {
      path: '/choice',
      name: 'Choice',
      component: Choice
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
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/registered',
      name: 'registered',
      component: Registered
    },
    {
      path: '/',
      name: 'start',
      component: Start
    },
    
  ]
})
