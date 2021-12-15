import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/layout.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/home.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about.vue')
      },
      // 组件
      {
        path: '/component',
        redirect: '/component/install',
        component: () => import('@/views/component.vue'),
        children: [
          {
            path: '/component/install',
            component: () => import('@/views/tyhUI/install')
          },
          {
            path: '/component/button',
            component: () => import('@/views/tyhUI/button')
          },
          {
            path: '/component/list',
            component: () => import('@/views/tyhUI/list')
          },
          {
            path: '/component/card',
            component: () => import('@/views/tyhUI/card')
          },
          {
            path: '/component/tag',
            component: () => import('@/views/tyhUI/tag')
          },
          {
            path: '/component/link',
            component: () => import('@/views/tyhUI/link')
          },
          {
            path: '/component/input',
            component: () => import('@/views/tyhUI/input')
          },
          {
            path: '/component/tips',
            component: () => import('@/views/tyhUI/tips')
          },
          {
            path: '/component/menu',
            component: () => import('@/views/tyhUI/menu')
          },
          {
            path: '/component/message',
            component: () => import('@/views/tyhUI/message')
          },
          {
            path: '/component/division',
            component: () => import('@/views/tyhUI/division')
          },
          {
            path: '/component/backTop',
            component: () => import('@/views/tyhUI/backTop')
          },
          {
            path: '/component/icon',
            component: () => import('@/views/tyhUI/icon')
          },
          {
            path: '/component/color',
            component: () => import('@/views/tyhUI/color')
          },
          {
            path: '/component/crumbs',
            component: () => import('@/views/tyhUI/crumbs')
          },
          {
            path: '/component/table',
            component: () => import('@/views/tyhUI/table')
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  // 解决 vue 中跳转页面后滚动条没有在最顶端问题
  scrollBehavior (to, from, saveTop) {
    if (saveTop) {
      return saveTop
    } else {
      return {
        x: 0,
        y: 0,
        // 配置动画平滑滚动
        behavior: 'smooth'
      }
    }
  }
})

// 解决路由冗余导航报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
