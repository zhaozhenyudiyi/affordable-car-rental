import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
// import index from '../components/index/index'
import Pcomments from './../components/DMH/Pcomments/comments'
import Evaluation from './../components/DMH/Evaluation/Evaluation'
import Recharge from './../components/DMH/Recharge/Recharge'
import Choice from './../components/DMH/UrbanChoice/Choice'
=======
import Start from '../components/zzy/start/start'
import intro from '../components/zzy/start/intro'
import Shop from '../components/zzy/shop/shop'
>>>>>>> upstream/master

Vue.use(Router)

export default new Router({
  routes: [
    {
<<<<<<< HEAD
      path: '/comments',
      name: 'Pcomments',
      component: Pcomments
    },
    {
      path:'/evaluation',
      name:'Evaluation',
      component:Evaluation
    },
    {
      path:'/recharge',
      name:'Recharge',
      component:Recharge
    },
    {
      path:'/choice',
      name:'Choice',
      component:Choice
    },
  ],
  beforeCreate() {
    this.$router.push('/choice');
  },
=======
      path: '/',
      name: 'shop',
      component: Shop
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
>>>>>>> upstream/master
})
