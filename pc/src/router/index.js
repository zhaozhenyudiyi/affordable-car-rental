import Vue from 'vue'
import Router from 'vue-router'
import Reservation from './../components/swh/reservation/reservation.vue'
import ReservationInfo from './../components/swh/reservation/reservation_info.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/reservation'
    },
    {
      path: '/reservation',
      name: 'Reservation',
      component: Reservation
    },
    {
      path: '/reservation_info',
      name: 'ReservationInfo',
      component: ReservationInfo
    },
  ]
})
