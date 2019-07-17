import Vue from 'vue'
import Router from 'vue-router'
import CarManage from '@/components/car-manage/car-manage.vue'
import CarUse from '@/components/car-manage/car-use.vue'
import aaa from '@/components/aaa.vue'
import Login from '../components/QSS/Login/login.vue'
import Index from '../components/QSS/index/index.vue'
import ber from './../DMH/ber/ber.vue'
import Member from './../DMH/ber/Member/Member.vue'
import enquiries from './../DMH/ber/enquiries/enquiries.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
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
      path: '/',
      name: 'aaa',
      component: aaa
    },
    {
      path: '/aaa',
      name: 'aaa',
      component: aaa
    },
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
    }
  ] 

})
