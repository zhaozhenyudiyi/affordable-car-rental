import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CarManage from '@/components/car-manage/car-manage.vue'
import CarUse from '@/components/car-manage/car-use.vue'
import aaa from '@/components/aaa.vue'


Vue.use(Router)

export default new Router({
  routes: [
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
    //  {
    //   path: '/',
    //   name: 'CarManage',
    //   component: CarManage
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
    }
  ]
})
