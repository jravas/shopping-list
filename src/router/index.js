import Vue from 'vue'
import Router from 'vue-router'
const AppHome = () => import('@/pages/AppHome')
const ShoppingList = () => import('@/pages/ShoppingList')
const StockList = () => import('@/pages/StockList')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome
    },
    {
      path: '/shopping-list',
      name: 'ShoppingList',
      component: ShoppingList
    },
    {
      path: '/stock-list',
      name: 'StockList',
      component: StockList
    }
  ]
})
