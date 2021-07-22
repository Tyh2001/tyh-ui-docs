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
        path: '/about',
        name: 'about',
        component: () => import('@/views/about')
      },
      // 组件
      {
        path: '/component',
        redirect: '/component/install',
        component: () => import('@/views/component'),
        children: [
          {
            path: '/component/install',
            component: () => import('@/components/tyhUI/install')
          },
          {
            path: '/component/button',
            component: () => import('@/components/tyhUI/button')
          },
          {
            path: '/component/list',
            component: () => import('@/components/tyhUI/list')
          },
          {
            path: '/component/card',
            component: () => import('@/components/tyhUI/card')
          },
          {
            path: '/component/tag',
            component: () => import('@/components/tyhUI/tag')
          },
          {
            path: '/component/link',
            component: () => import('@/components/tyhUI/link')
          },
          {
            path: '/component/input',
            component: () => import('@/components/tyhUI/input')
          },
          {
            path: '/component/tips',
            component: () => import('@/components/tyhUI/tips')
          },
          {
            path: '/component/menu',
            component: () => import('@/components/tyhUI/menu')
          },
          {
            path: '/component/message',
            component: () => import('@/components/tyhUI/message')
          },
          {
            path: '/component/division',
            component: () => import('@/components/tyhUI/division')
          },
          {
            path: '/component/backTop',
            component: () => import('@/components/tyhUI/backTop')
          },
          {
            path: '/component/icon',
            component: () => import('@/components/tyhUI/icon')
          },
          {
            path: '/component/color',
            component: () => import('@/components/tyhUI/color')
          },
          {
            path: '/component/crumbs',
            component: () => import('@/components/tyhUI/crumbs')
          }
        ]
      },
      // 特别的组件
      {
        path: '/special',
        redirect: '/special/buttonLight',
        component: () => import('@/views/special'),
        children: [
          {
            path: '/special/buttonLight',
            component: () => import('@/components/special/buttonLight')
          },
          {
            path: '/special/buttonAurora',
            component: () => import('@/components/special/buttonAurora')
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
