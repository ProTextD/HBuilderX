import Vue from 'vue'
import Router from 'vue-router'

const echartTest = () => import('../components/echartTest.vue')

const routes = [
  {
    path : '/echartTest',
    component : echartTest
  }
]

const router = new Router({
  routes,
  mode : 'history'
})

Vue.use(Router)

export default router

