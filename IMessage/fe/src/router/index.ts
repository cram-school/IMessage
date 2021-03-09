import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('../components/LayOut/index.vue'),
    children: [
      {
        path: '/',
        alias: '/index',
        name: 'Index',
        meta: {
          navbar: false
        },
        component: () => import('../views/Index/index.vue')
      },
      {
        path: '/chat',
        name: 'Chat',
        component: () => import('../views/Friend/chat.vue')
      }
    ]
  },


]


const router = createRouter({
  history: createWebHistory('/message/'),
  routes
})

export default router
