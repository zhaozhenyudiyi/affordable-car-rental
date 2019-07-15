import Vue from 'vue'
import Router from 'vue-router'
import hollowWord from '@/components/hollowWord'

Vue.use(Router)

export default new Router({
  routes: [
    { 
      path: '/',
      name: 'hollowWord',
      component: hollowWord
    }
  ]
})
