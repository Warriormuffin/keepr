import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path:"/dashboard/:username",
      name: "Dashboard",
      component: Dashboard
    }
  ]
})
