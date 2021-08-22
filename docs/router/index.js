import Vue from 'vue'
import VueRouter from 'vue-router'
import Todolist from '@/views/Todolist'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Todolist',
    component: Todolist
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
