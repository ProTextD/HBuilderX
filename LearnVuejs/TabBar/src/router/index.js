import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../pages/home/Home.vue')
const Category = () => import('../pages/category/Category.vue')
const Cart = () => import('../pages/cart/Cart.vue')
const My = () => import('../pages/my/My.vue')
// const Special = () => import('../pages/special/Special.vue')
const showOne = () => import('../pages/category/category-component/show1-1.vue')

Vue.use(Router)

export default new Router({
  routes:[
    {
      path : '/',
      redirect : '/home'
    },
    {
      path : '/home',
      component : Home
    },
    {
      path : '/category',
      component : Category,
      children:[
        {
          path : '/',
          component : showOne
        },
        {
          path : 'showOne',
          component : showOne
        }
      ]
    },
    {
      path : '/cart',
      component : Cart
    },
    {
      path : '/my',
      component : My
    },
    // {
    //   path : '/special',
    //   component : Special
    // }
  ]
})

