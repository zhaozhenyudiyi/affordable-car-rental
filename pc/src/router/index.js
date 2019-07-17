import Vue from 'vue'
import Router from 'vue-router'
import tb from '@/zzy/tb'

Vue.use(Router)

export default new Router({
  routes: [
    { 
      path: '/',
      name: 'tb',
      component: tb
    }
  ]
})
