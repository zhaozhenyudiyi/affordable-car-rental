import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '../components/QSS/Login/login.vue'
import Index from '../components/QSS/index/index.vue'
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
    }
  ]
})
