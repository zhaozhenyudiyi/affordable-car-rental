import Vue from 'vue'
import Router from 'vue-router'

import Reservation from './../components/swh/reservation/reservation.vue'

import tb from '@/zzy/tb'

//myt
import CostSettlement from '../mlt/CostSettlement/CostSettlement.vue'
import Hou from '../mlt/hou/hou.vue'


// import CarManage from '@/components/car-manage/car-manage.vue'
// import CarUse from '@/components/car-manage/car-use.vue'
// import aaa from '@/components/aaa.vue'

import Login from '../components/QSS/Login/login.vue'
import Index from '../components/QSS/index/index.vue'
import ber from './../DMH/ber/ber.vue'
import Member from './../DMH/ber/Member/Member.vue'
import enquiries from './../DMH/ber/enquiries/enquiries.vue'

Vue.use(Router)

export default new Router({
  routes: [
    //myt从 CostSettlement 到 /hou
    { 
      path: '/CostSettlement',
      name: 'CostSettlement',
      component: CostSettlement
    },
    {
      path: '/hou',
      name: 'Hou',
      component:Hou

    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/index',
      name:'Index',
      component:Index
    },
    {
      path: '/tb',
      name: 'tb',
      component: tb
    },
    // {
    //   path: '/aaa',
    //   name: 'aaa',
    //   component: aaa
    // },
    {
      path: '/car-manage',
      name: 'CarManage',
      component: CarManage
    },
    {
      path: '/car-use',
      name: 'CarUse',
      component: CarUse
    },
    {
     path: '/ber',
      name: 'ber',
      component: ber,
      children:[
        {
          path:'enquiries',
          name:'enquiries',
          component:enquiries
        },
        {
          path: 'member',
          name: 'Member',
          component: Member,
        }
      ]

    },
  ]
})
