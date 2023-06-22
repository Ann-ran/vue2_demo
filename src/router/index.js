import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
const routes = [
  // { path: '/', component: () => import('@/components/Home.vue') },
  // { path: '/about', component: () => import('@/components/About.vue') }
  // { path: '/', component: require('@/components/Home.vue') },
  // { path: '/about', component: require('@/components/About.vue') }
  { path: '/', component: Home },
  { path: '/about', component: About }
]
const router = new Router({
  routes
})
export default router
