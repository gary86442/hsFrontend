import { createRouter,createWebHistory } from 'vue-router' 
// createWebHashHistory是創建history模式的路由
//crouter是路由的實例
import ItemPage from '@/views/Item/ItemPage.vue'
import Home from '@/views/Home.vue' 
import SignUp from '@/views/account/SignUp.vue'
import NotFound from '@/views/NotFound.vue'
import SignIn from '@/views/account/SignIn.vue'
import CartList from '@/views/Cart/CartList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //配置path和component的對應關係
  routes: [
    // {
    //   path: '/',
    //   name: 'Root',
    //   redirect: SignIn,
    // },
    {
      path: '/home',
      name: 'Home',
      component: Home

    },
    {
      path: '/items',
      name: 'ItemPage',
      component: ItemPage
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '/cart',
      name: 'CartList',
      component: CartList

    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound
    }
  ]
})

export default router
