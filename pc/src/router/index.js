import Vue from 'vue'
import Router from 'vue-router'
import ber from './../DMH/ber/ber.vue'
import Member from './../DMH/ber/Member/Member.vue'
import enquiries from './../DMH/ber/enquiries/enquiries.vue'
import qis from './../DMH/qis.vue'
Vue.use(Router)

export default new Router({
  routes: [
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
    {
      path:'/qis',
      name:'qis',
      component:qis
    }
  ],
})
