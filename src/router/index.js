import { createRouter,createWebHistory } from 'vue-router' 
// createWebHashHistory是創建history模式的路由
//crouter是路由的實例
import Login from '@/views/Login/index.vue'
import Item from '@/views/Item/Item.vue'
import Home from '@/views/Home.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //配置path和component的對應關係
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/items',
      name: 'Item',
      component: Item
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // {
    //   path: '/signup',
    //   name: 'sign-up',
    //   component: () => import('@/views/account/SignUp.vue')
    // },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFound.vue')
    }
  ]
})

export default router
