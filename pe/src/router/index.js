import Vue from 'vue'
import Router from 'vue-router'
// import index from '../components/index/index'
import Pcomments from './../components/DMH/Pcomments/comments'
import Evaluation from './../components/DMH/Evaluation/Evaluation'
import Recharge from './../components/DMH/Recharge/Recharge'
import Choice from './../components/DMH/UrbanChoice/Choice'

Vue.use(Router)

export default new Router({
  routes: [
    {
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
})
