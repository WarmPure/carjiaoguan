import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
/* Layout */
import Layout from '@/layout/index.vue'
Vue.use(VueRouter)

export const constantRoutes: RouteConfig[] = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
    },
]

const createRouter = () => new VueRouter({
    // model: 'history',  // Disabled due to Github Pages doesn't support this, enable this if you need.
    scrollBehavior: (to, from, savedPosition) => {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    base: process.env.BASE_URL,
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter();
    (router as any).matcher = (newRouter as any).matcher // reset router
}

export default router as any
