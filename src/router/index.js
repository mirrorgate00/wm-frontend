import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'
import ItemRegView from '@/views/ItemRegView.vue'
import ItemSingleView from '@/views/ItemSingleView.vue'
import ItemAllView from '@/views/ItemAllView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/itemreg',
      name: 'item registration',
      component: ItemRegView
    },
    {
      path: '/singleitem',
      name: 'single item',
      component: ItemSingleView
    },
    {
      path: '/allitems',
      name: 'all items',
      component: ItemAllView
    }
  ]
})

export default router
