import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'

const Home = () => import ('../components/Home.vue')
const Bar = () => import ('../components/Bar.vue')
const Foo = () => import ('../components/Foo.vue')

Vue.use(Router)

const routes = [
  {
    path : '',
    component : Home
  },
  {
    path : '/Home',
    component : Home,
    meta:{
      scrollToTop: true
    }
  },
  {
    path : '/Bar',
    component : Bar,
    meta:{
      scrollToTop: true
    }
  },
  {
    path : '/Foo',
    component : Foo
    }
]

const router = new VueRouter({
  routes,
  mode : 'history',
  base: __dirname,
  // scrollBehavior,
  scrollBehavior (to , from , savedPosition){
    // if(to.hash){
    //   return{
    //     selector : to.hash
    //   }
    // }

    //异步滚动
    // return new Promise((resolve , reject) =>{
    //   setTimeout(() => {
    //     resolve({x : 0 , y : 0})
    //   }, 500);
    // })

    //平滑滚动
    if(to.hash){
      return{
        selector : to.hash,
        behavior: 'smooth'
      }
    }
  }
})

export default router
