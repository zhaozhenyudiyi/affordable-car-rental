import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/zzy/start/start'
import Domestic from '../components/QSS/Parity/domestic/domestic'
import Freeride from '../components/QSS/Parity/Freeride/Freeride.vue'
import Timesharing from '../components/QSS/Parity/Timesharing/Timesharing'
import Testdrive from '../components/QSS/Parity/testdrive/testdrive'
import Longrent from '../components/QSS/Parity/Longrent/Longrent'
import Pages from '../components/QSS/Parity/pagas/pagas.vue'
import YearSent from '../components/QSS/Parity/Longrent/year_sent/year_sent.vue'
import BestLong from '../components/QSS/Parity/Longrent/bestlong_sent/bestlong_sent.vue'
import Pcomments from './../components/DMH/Pcomments/comments'
import Evaluation from './../components/DMH/Evaluation/Evaluation'
import Recharge from './../components/DMH/Recharge/Recharge'
import Choice from './../components/DMH/UrbanChoice/Choice'
import Start from '../components/zzy/start/start'
import intro from '../components/zzy/start/intro'
import Shop from '../components/zzy/shop/shop'

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
      children: [
        {
          path: '/',
          name: 'Domestic',
          component: Domestic
        },
        {
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
          component: Longrent,
          children:[
            {
              path: '',
              name: 'YearSent',
              component: YearSent
            },
            {
              path: '/year_sent',
              name: 'YearSent',
              component: YearSent
            },
            {
              path: '/bestlong_sent',
              name: 'BestLong',
              component: BestLong
            }
          ]
        },
      ]
    },
    {
      path: '/comments',
      name: 'Pcomments',
      component: Pcomments
    },
    {
      path: '/evaluation',
      name: 'Evaluation',
      component: Evaluation
    },
    {
      path: '/recharge',
      name: 'Recharge',
      component: Recharge
    },
    {
      path: '/choice',
      name: 'Choice',
      component: Choice
    },
    {
      path: '/intro',
      name: 'intro',
      component: intro
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/start',
      name: 'start',
      component: Start
    },
  ]
})
