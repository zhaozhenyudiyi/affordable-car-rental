import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/zzy/start/start'
import Domestic from '../components/QSS/Parity/domestic/domestic'
import Freeride from '../components/QSS/Parity/Freeride/Freeride.vue'
import Timesharing from '../components/QSS/Parity/Timesharing/Timesharing'
import Testdrive from '../components/QSS/Parity/testdrive/testdrive'
import Longrent from '../components/QSS/Parity/Longrent/Longrent'
import Pages from '../components/QSS/Parity/pagas/pagas.vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/pages',
      name: 'Pages',
      component: Pages,
      children: [{
          path: '/domestic',
          name: 'Domestic',
          component: Domestic
        },
        {
          path: '/freeride',
          name: 'Freeride',
          component: Freeride
        },
        {
          path: '/timesharing',
          name: 'Timesharing',
          component: Timesharing
        },
        {
          path: '/testdrive',
          name: 'Testdrive',
          component: Testdrive
        },
        {
          path: '/longrent',
          name: 'Longrent',
          component: Longrent
        }
      ]
    },

  ]
})
