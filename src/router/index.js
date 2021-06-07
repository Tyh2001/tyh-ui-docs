import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/layout'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: '/component',
        redirect: '/component/install',
        component: () => import('@/views/component'),
        children: [
          {
            path: '/component/install',
            component: () => import('@/components/install')
          },
          {
            path: '/component/button',
            component: () => import('@/components/button')
          },
          {
            path: '/component/list',
            component: () => import('@/components/list')
          },
          {
            path: '/component/card',
            component: () => import('@/components/card')
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
