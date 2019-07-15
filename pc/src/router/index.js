import Vue from 'vue'
import Router from 'vue-router'
import CostSettlement from '../mlt/CostSettlement/CostSettlement.vue'
import Hou from '../mlt/hou/hou.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CostSettlement',
      component: CostSettlement
    },
    {
      path: '/hou',
      name: 'Hou',
      component:Hou
    }
  ]
})
