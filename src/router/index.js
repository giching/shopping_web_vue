import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import ProductViewVue from '@/views/ProductView.vue'
import ShoppingCartViewVue from '@/views/ShoppingCartView.vue'
import OrderInfoVue from '@/views/OrderInfo.vue'
import ComfirmInfoVue from '@/views/ComfirmInfo.vue'
import my0304 from '@/views/my0304.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/',
      name: 'product',
      component: ProductViewVue
    },
    {
      path: '/shoppingCartView',
      name: 'shoppingCart',
      component: ShoppingCartViewVue
    },
    {
      path: '/OrderInfo',
      name: 'OrderInfo',
      component: OrderInfoVue
    },
    {
      path: '/ComfirmInfo',
      name: 'ComfirmInfoVue',
      component: ComfirmInfoVue
    },
    {
      path: '/my0304',
      name: '0304',
      component: my0304
    },
  ]
})

export default router
