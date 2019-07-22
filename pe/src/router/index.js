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
import shopdetails0 from '../components/zzy/shop/shop-details0'
import shopdetails1 from '../components/zzy/shop/shop-details1'
import shopdetails2 from '../components/zzy/shop/shop-details2'
import shopdetails3 from '../components/zzy/shop/shop-details3'
import shopdetails4 from '../components/zzy/shop/shop-details4'
import shopdetails5 from '../components/zzy/shop/shop-details5'
import shopdetails6 from '../components/zzy/shop/shop-details6'
import shopdetails7 from '../components/zzy/shop/shop-details7'
import shopdetails8 from '../components/zzy/shop/shop-details8'
import shopdetails9 from '../components/zzy/shop/shop-details9'
import pay from '../components/zzy/pay/pay'


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
      component: Shop,
      children:[
        {
          path: '/shopdetails0',
          name: 'shopdetails0',
          component: shopdetails0,
        },
        {
          path: '/shopdetails1',
          name: 'shopdetails1',
          component: shopdetails1,
        },
        {
          path: '/shopdetails2',
          name: 'shopdetails2',
          component: shopdetails2,
        },
        {
          path: '/shopdetails3',
          name: 'shopdetails3',
          component: shopdetails3,
        },
        {
          path: '/shopdetails4',
          name: 'shopdetails4',
          component: shopdetails4,
        },
        {
          path: '/shopdetails5',
          name: 'shopdetails5',
          component: shopdetails5,
        },
        {
          path: '/shopdetails6',
          name: 'shopdetails6',
          component: shopdetails6,
        },
        {
          path: '/shopdetails7',
          name: 'shopdetails7',
          component: shopdetails7,
        },
        {
          path: '/shopdetails8',
          name: 'shopdetails8',
          component: shopdetails8,
        },
        {
          path: '/shopdetails9',
          name: 'shopdetails9',
          component: shopdetails9,
        },
        {
          path: '/shopdetails9',
          name: 'shopdetails9',
          component: shopdetails9,
        },
      ]
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
    {
      path: '/pay',
      name: 'pay',
      component: pay
    },
    
  ]
})
