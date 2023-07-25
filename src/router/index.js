import { createRouter,createWebHistory } from 'vue-router' 
// createWebHashHistory是創建history模式的路由
//crouter是路由的實例
import Item from '@/views/Item/Item.vue'
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
    //   redirect: ItemPage  //重定向到ItemPage,
    // },
    {
      path: '/',
      name: 'root',
      component: Home

    },
    {
      path: '/items',
      name: 'Item',
      component: Item
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn,
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
