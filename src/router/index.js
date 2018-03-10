import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import NewEmployee from '@/components/NewEmployee'
import ViewEmployee from '@/components/ViewEmployee'
import EditEmployee from '@/components/EditEmployee'
import ProductGrid from '@/components/ProductGrid'
import ViewProduct from '@/components/ViewProduct'
import Cart from '@/components/Cart'
import Home from '@/components/Home'
import NewProduct from '@/components/NewProduct'
import OrderConfirmation from '@/components/OrderConfirmation'
import Account from '@/components/Account'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },
    {
      path: '/new',
      name: 'new-employee',
      component: NewEmployee
    },
    {
      path: '/order-confirmation',
      name: 'order-confirmation',
      component: OrderConfirmation
    },
    {
      path: '/addproduct',
      name: 'new-product',
      component: NewProduct
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/shop',
      name: 'products',
      component: ProductGrid
    },
    {
      path: '/product/:sku',
      name: 'view-product',
      component: ViewProduct
    },
    {
      path: '/edit/:employee_id',
      name: 'edit-employee',
      component: EditEmployee
    },
    {
      path: '/:employee_id',
      name: 'view-employee',
      component: ViewEmployee
    }
  ]
})
