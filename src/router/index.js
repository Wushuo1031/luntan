import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login/login.vue'

Vue.use(VueRouter)

// 清空路由规则
const routes = [
  {
    path: '/Login',
    component: Login,
    name: 'login'
  }
]

const router = new VueRouter({
  routes
})

export default router
