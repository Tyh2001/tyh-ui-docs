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
        path: '/guide',
        name: 'guide',
        component: () => import('@/views/guide')
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
          },
          {
            path: '/component/tag',
            component: () => import('@/components/tag')
          },
          {
            path: '/component/link',
            component: () => import('@/components/link')
          },
          {
            path: '/component/input',
            component: () => import('@/components/input')
          },
          {
            path: '/component/tips',
            component: () => import('@/components/tips')
          },
          {
            path: '/component/menu',
            component: () => import('@/components/menu')
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 解决 冗余导航报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
