import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AddItem from '@/components/AddItem'
import EditItem from '@/components/EditItem'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/add-item',
      name: 'AddItem',
      component: AddItem
    },
    {
      path: '/edit-item/:id',
      name: 'EditItem',
      component: EditItem
    }
  ]
})
