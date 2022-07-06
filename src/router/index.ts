import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children:[
      {
        path:'/product',
        name:'product',
        meta:{
          isShow:true,
          title:'商品列表'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/ProductView.vue')
      },
      {
        path:'/AboutView',
        name:'AboutView',
        meta:{
          isShow:true,
          title:'角色列表'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      }
    ]
  },
  {
    path:'/',
    redirect: '/LoginView',
  },
  {
    path: '/LoginView',
    name: 'LoginView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
