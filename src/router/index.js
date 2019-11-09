import Vue from 'vue'
import VueRouter from 'vue-router'
import homeRoutes from './home-routes'
import borrowRoutes from './borrow-routes'
import creditRoutes from './credit-routes'
import mineRoutes from './mine-routes'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  homeRoutes,
  borrowRoutes,
  creditRoutes,
  mineRoutes,
  {
    path: '/login',
    component: ()=>import('../pages/mine/children/login/login')
  },
  {
    path: '/regiester',
    component: ()=>import('../pages/mine/children/regiester/regiester')
  },
  {
    path: '/404',
    component: ()=>import('../pages/common/not-find/NotFind')
  },
  {
    path: '**',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
