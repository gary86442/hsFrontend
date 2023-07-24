import { createRouter,createWebHistory } from 'vue-router' 
// createWebHashHistory是創建history模式的路由
//crouter是路由的實例
import Item from '@/views/Item/Item.vue'
import Home from '@/views/Home.vue' 
import SignUp from '@/views/account/SignUp.vue'
import NotFound from '@/views/NotFound.vue'
import LogIn from '@/views/account/LogIn.vue'

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
      name: 'Login',
      component: LogIn
    },
    {
      path: '/signup',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound
    }
  ]
})

export default router
