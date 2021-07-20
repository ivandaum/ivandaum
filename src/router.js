import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import('~/views/Home.vue'),
    },
    {
        path: '/about',
        component: () => import('~/views/About.vue'),
    }
]

export default new VueRouter({ mode: 'history', routes })
