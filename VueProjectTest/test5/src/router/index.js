import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'
// import biaodan from '../components/biaodan.vue'
// import biaoqian from '../components/biaoqian.vue'
// import ariaLabel from '../components/aria-label.vue'
// import ariaLabelledby from '../components/aria-labelledby.vue'
// import zhanweifu from '../components/zhanweifu.vue'
// import currentDate from '../components/currentDate.vue'

const biaodan = () => import ('../components/biaodan.vue')
const biaoqian = () => import ('../components/biaoqian.vue')
const ariaLabel = () => import ('../components/aria-label.vue')
const ariaLabelledby = () => import ('../components/aria-labelledby.vue')
const zhanweifu = () => import ('../components/zhanweifu.vue')
const currentDate = () => import ('../components/currentDate.vue')
const AsyncShow = () => import('../components/AsyncShow.vue')
Vue.use(Router)

const routes = [
  {
    path : '/biaodan',
    component : biaodan
  },
  {
    path : '/biaoqian',
    component : biaoqian
  },
  {
    path : '/ariaLabel',
    component : ariaLabel
  },
  {
    path : '/ariaLabelledby',
    component : ariaLabelledby
  },
  {
    path : '/zhanweifu',
    component : zhanweifu
  },
  {
    path : '/currentDate',
    component : currentDate
  },
  {
    path : '/AsyncShow',
    component : AsyncShow
  }
]

const router = new VueRouter({
  routes,
  mode : 'history'
})

export default router
