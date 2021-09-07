import Vue from 'vue'
import Router from 'vue-router'
const tableOne = () => import('../components/tableOne.vue')
const processingCenter = () => import('../components/processingCenter.vue')
const modify = () => import ('../components/modify.vue')
const orderManage = () => import ('../components/orderManage.vue')

const location = () => import ('../components/location.vue')
Vue.use(Router)

const routes = [
  {
    path:'',
    component : processingCenter
  },
  {
    path : '/tableOne',
    component : tableOne
  },
  {
    path : '/processingCenter',
    component : processingCenter
  },
  {
    path : '/modify',
    component : modify
  },
  {
    path : '/orderManage',
    component : orderManage
  },
  {
    path : '/location',
    component : location
  }
]

const router = new Router({
  routes,
  mode:'history'
})

export default router
