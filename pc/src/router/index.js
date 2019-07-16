import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import ber from './../DMH/ber/ber.vue'
import Member from './../DMH/ber/Member/Member.vue'
import enquiries from './../DMH/ber/enquiries/enquiries.vue'
=======
import hollowWord from '@/components/hollowWord'
>>>>>>> upstream/master

Vue.use(Router)

export default new Router({
  routes: [
<<<<<<< HEAD
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
=======
    { 
      path: '/',
      name: 'hollowWord',
      component: hollowWord
>>>>>>> upstream/master
    }
  ],
})
