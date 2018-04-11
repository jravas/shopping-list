import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/pages/AppHome'
import ShoppingList from '@/pages/ShoppingList'
import StockList from '@/pages/StockList'

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
