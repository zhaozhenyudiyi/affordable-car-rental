import Vue from 'vue'
import Router from 'vue-router'

import CarManage from './../components/chw/car-manage/car-manage.vue'
import CarUse from './../components/chw/car-manage/car-use.vue'


import Reservation from './../components/swh/reservation/reservation.vue'

import tb from '@/zzy/tb'


//myt
import CostSettlement from '../mlt/CostSettlement/CostSettlement.vue'
import Hou from '../mlt/hou/hou.vue'


import Login from '../components/QSS/Login/login.vue'
import Index from '../components/QSS/index/index.vue'

import ber from './../DMH/ber/ber.vue'
import Member from './../DMH/ber/Member/Member.vue'
import enquiries from './../DMH/ber/enquiries/enquiries.vue'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/tb',
      name: 'tb',
      component: tb,
      children: [

        //myt从 CostSettlement 到 /hou
        {
          path: '/CostSettlement',
          name: 'CostSettlement',
          component: CostSettlement
        },
        {
          path: '/hou',
          name: 'Hou',
          component: Hou
        },
        {
          path: '/index',
          name: 'Index',
          component: Index
        },
        {
          path: '/CarManage',
          name: 'CarManage',
          component: CarManage
        },
        {
          path: '/caruse',
          name: 'CarUse',
          component: CarUse
        },
        {
          path: '/reservation',
          name: 'reservation',
          component: Reservation,
        },
        {
          path: '/ber',
          name: 'ber',
          component: ber,
          children: [
            {
              path: 'enquiries',
              name: 'enquiries',
              component: enquiries
            },
            {
              path: 'member',
              name: 'Member',
              component: Member,
            }
          ]
        },
      ]
    },
  ]
})
